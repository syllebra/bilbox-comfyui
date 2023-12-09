import json
import os
import cv2
import numpy as np
import torch
from colour.io.luts.iridas_cube import read_LUT_IridasCube, LUT3D, LUT3x1D
from typing import Union

def read_luts_dicts(luts_path):
    paths = []
    for root, directories, files in os.walk(luts_path):
        for file in files:
            if file.lower().endswith('.cube'):
                file_path = os.path.join(root, file)
                rel_path = os.path.relpath(file_path, luts_path)
                paths.append(rel_path)
    return paths

def read_lut(lut_path, clip=False):
    """
    Reads a LUT from the specified path, returning instance of LUT3D or LUT3x1D

    <lut_path>: the path to the file from which to read the LUT (
    <clip>: flag indicating whether to apply clipping of LUT values, limiting all values to the domain's lower and
        upper bounds
    """
    lut: Union[LUT3x1D, LUT3D] = read_LUT_IridasCube(lut_path)
    lut.name = os.path.splitext(os.path.basename(lut_path))[0]  # use base filename instead of internal LUT name

    if clip:
        if lut.domain[0].max() == lut.domain[0].min() and lut.domain[1].max() == lut.domain[1].min():
            lut.table = np.clip(lut.table, lut.domain[0, 0], lut.domain[1, 0])
        else:
            if len(lut.table.shape) == 2:  # 3x1D
                for dim in range(3):
                    lut.table[:, dim] = np.clip(lut.table[:, dim], lut.domain[0, dim], lut.domain[1, dim])
            else:  # 3D
                for dim in range(3):
                    lut.table[:, :, :, dim] = np.clip(lut.table[:, :, :, dim], lut.domain[0, dim], lut.domain[1, dim])

    return lut

lut_path = "luts"
class BilboXLut:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        global lut_path
        # Get current file's directory
        p = os.path.dirname(os.path.realpath(__file__))

        # default luts path
        lut_path = os.path.join(p, 'luts')

        # Read luts directory TODO: multiple directories and recursive
        try:
            file_path = os.path.join(p, 'luts_directory.txt')
            with open(file_path) as f:
                for line in f:
                    if(line[0] != '#'):
                        lut_path = os.path.abspath(line)
        except Exception as e:
            print(f"An error occurred while reading LUTs path: {str(e)}")

        print("BilboX LUTs path set to:",lut_path)

        luts = read_luts_dicts(lut_path)

        return {
            "required": {
                "image": ("IMAGE",),
                "lut_name": ((luts),),
                "log": (["No", "Yes"], {"default":"No"}),
                "print": (["No", "Yes"], {"default":"No"}),
            },
        }

    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'apply_lut'
    CATEGORY = 'BilboX/Post-Processing'

    # From https://github.com/yoonsikp/pycubelut
    def apply_lut(self, image: torch.Tensor, lut_name, log, print):

        lp = os.path.join(lut_path,lut_name)
        lut = read_lut(lp)

        if print == "Yes":
            print(f"Test: {image}\n{lut}")

        log = (log == "Yes")

        batch_size, height, width, channels = image.shape
        result = torch.zeros(batch_size, height, width, channels)

        for b in range(batch_size):
            im_array = image[b].numpy().copy()

            is_non_default_domain = not np.array_equal(lut.domain, np.array([[0., 0., 0.], [1., 1., 1.]]))
            dom_scale = None
            if is_non_default_domain:
                dom_scale = lut.domain[1] - lut.domain[0]
                im_array = im_array * dom_scale + lut.domain[0]
            if log:
                im_array = im_array ** (1/2.2)
            im_array = lut.apply(im_array)
            if log:
                im_array = im_array ** (2.2)
            if is_non_default_domain:
                im_array = (im_array - lut.domain[0]) / dom_scale

            tensor = torch.from_numpy(im_array)
            result[b] = tensor

        return (result,)

# fixes and improve https://github.com/EllangoK/ComfyUI-post-processing-nodes/blob/master/post_processing/vignette.py
class BilboXVignette:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "image": ("IMAGE",),
                "size": ("FLOAT", {
                    "default": 0.0,
                    "min": 0.0,
                    "max": 10.0,
                    "step": 1.0
                }),
                "opacity": ("FLOAT", {
                    "default": 1.0,
                    "min": 0.0,
                    "max": 1.0,
                    "step": 0.05
                }),                
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "apply_vignette"

    CATEGORY = "BilboX/Post-Processing"

    def apply_vignette(self, image: torch.Tensor, size: float, opacity: float):
        if size == 0:
            return (image,)
        height, width, _ = image.shape[-3:]
        x = torch.linspace(-1, 1, width, device=image.device)
        y = torch.linspace(-1, 1, height, device=image.device)
        Y, X = torch.meshgrid(y, x, indexing="ij")
        radius = torch.sqrt(X ** 2 + Y ** 2)

        # Map vignette strength from 0-10 to 1.800-0.800
        mapped_vignette_strength = 1.8 - (size - 1) * 0.1
        vignette = 1 - (torch.clamp(radius / mapped_vignette_strength, 0, 1)*opacity)
        print(vignette.shape)
        print(image.shape)
        vignette = vignette[..., None]

        vignette_image = torch.clamp(image * vignette, 0, 1)

        return (vignette_image,)