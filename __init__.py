from .bilbox_photo_prompt import NODE_CLASS_MAPPINGS, NODE_DISPLAY_NAME_MAPPINGS

__all__ = ['NODE_CLASS_MAPPINGS', 'NODE_DISPLAY_NAME_MAPPINGS']

# ensure .js and web copy
print("### Copying: BilboX web...")

import shutil, os
import folder_paths

bx_path = os.path.dirname(__file__)
comfy_path = os.path.dirname(folder_paths.__file__)
dest_path = os.path.join(comfy_path, "web", "extensions")
shutil.copytree(os.path.join(bx_path,"web_to_copy"), os.path.join(dest_path,"bilbox"), dirs_exist_ok=True)  # Fin