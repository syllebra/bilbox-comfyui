from .bilbox_photo_prompt import BilboXPhotoPrompt
from .bilbox_post_processing import BilboXLut, BilboXVignette

NODE_CLASS_MAPPINGS = {
    "BilboXPhotoPrompt": BilboXPhotoPrompt,
    "BilboXVignette": BilboXVignette,
    "BilboXLut": BilboXLut,
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "BilboXLut": "BilboX post-processing LUT",
    "BilboXVignette": "BilboX post-processing vignette effect",
    "BilboXPhotoPrompt": "BilboX PromptGeek Photo Prompt",
}

__all__ = ['NODE_CLASS_MAPPINGS', 'NODE_DISPLAY_NAME_MAPPINGS']


# ensure .js and web copy
print("### Copying: BilboX web...")

import shutil, os
import folder_paths

bx_path = os.path.dirname(__file__)
comfy_path = os.path.dirname(folder_paths.__file__)
dest_path = os.path.join(comfy_path, "web", "extensions")
shutil.copytree(os.path.join(bx_path,"web_to_copy"), os.path.join(dest_path,"bilbox"), dirs_exist_ok=True)  # Fin



# Expand Server api

import server
from aiohttp import web
import aiohttp
import json
import zipfile
import urllib.request

@server.PromptServer.instance.routes.get("/bilbox/reboot")
async def fetch_customnode_mappings(request):
    type = request.rel_url.query["mode"]
    print("BilboX:",type)
    json_obj = {"server_op": type}
 
    if(type == "shutdown"):
        os.system("shutdown /s") # Shutdown
    if(type == "reboot"):
        os.system("shutdown /r") # Restart
    if(type == "logout"):
        os.system("shutdown /l") # logout
    if(type == "lock"):
        os.system("rundll32.exe user32.dll,LockWorkStation") # logout
    return web.json_response(json_obj, content_type='application/json')

WEB_DIRECTORY = "reboot"