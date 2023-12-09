import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js";
app.registerExtension({
	name: "Comfy.BilboXReboot",
	init() {
	},
	async setup() {

		const menu = document.querySelector(".comfy-menu");
		const separator = document.createElement("hr");

		separator.style.margin = "20px 0";
		separator.style.width = "100%";
		menu.append(separator);

		const rebootButton = document.createElement("button");
		rebootButton.textContent = "Server...";
		rebootButton.onclick = () => {
	
			if (document.getElementById("bxRebootContextMenu") .style.display == "block"){ 
				document.getElementById("bxRebootContextMenu").style.display = "none" ; 
			}else{ 
				var menu = document.getElementById("bxRebootContextMenu")      
				menu.style.display = 'block'; 
			} 
			}
		menu.append(rebootButton);


		menu.insertAdjacentHTML('beforeend',' \
		<div id="bxRebootContextMenu" class="bx-reboot-context-menu" style="display: none"> \
			<ul class="menu">  \
				<li class="lock"><a href="#">Lock Session</a></li>  \
				<li class="logout"><a href="#">Logout</a></li>  \
				<li class="reboot"><a href="#">Reboot</a></li>  \
				<li class="shutdown"><a href="#">Shutdown</a></li>  \
			</ul>  \
    	</div> ');

		function apiReboot(type) {
			api.fetchApi('/bilbox/reboot?mode='+type)
			.then(response => response.json())
			.then(async data => {
				try {
					console.log(data["server_op"]);
				}
				catch (exception) {
					console.log("Problem when sending "+type+" to server...");
				}
			});
		}

		menu.querySelector(".lock").onclick = () => { apiReboot("lock");}
		menu.querySelector(".logout").onclick = () => { apiReboot("logout");}
		menu.querySelector(".reboot").onclick = () => { apiReboot("reboot");}
		menu.querySelector(".shutdown").onclick = () => { apiReboot("shutdown");}

		rebootButton.style.background = "linear-gradient(90deg, #442222 0%, #222222 100%)";
		//rebootButton.style.color = "black";
	},
});    