from .bilbox_photo_prompt import BilboXPhotoPrompt
from .bilbox_post_processing import BilboXLut, BilboXVignette
import os

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

# Expand Server api

import server
from aiohttp import web


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

WEB_DIRECTORY = "./web"
__all__ = ["NODE_CLASS_MAPPINGS", "NODE_DISPLAY_NAME_MAPPINGS", "WEB_DIRECTORY"]
