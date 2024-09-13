import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js";
app.registerExtension({
	name: "Comfy.BilboXReboot",
	init() {
	},
	async setup() {

		function toggle_menu(el) {
			if ( el.style.display == "block"){ 
				el.style.display = "none" ; 
			}else{ 
				el.style.display = 'block'; 
			} 
		}

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

		function create_menu(el, id, isnew=false) {

			let cl = "bx-reboot-context-menu";
			if(isnew)
				cl = "bx-reboot-cm-new " + cl;
			el.insertAdjacentHTML('beforeend',' \
				<div id="'+id+'" class="'+cl+'" style="display: none"> \
					<ul class="menu">  \
						<li class="lock"><a href="#">Lock Session</a></li>  \
						<li class="logout"><a href="#">Logout</a></li>  \
						<li class="reboot"><a href="#">Reboot</a></li>  \
						<li class="shutdown"><a href="#">Shutdown</a></li>  \
					</ul>  \
				</div> ');

			el.querySelector(".lock").onclick = () => { apiReboot("lock");}
			el.querySelector(".logout").onclick = () => { apiReboot("logout");}
			el.querySelector(".reboot").onclick = () => { apiReboot("reboot");}
			el.querySelector(".shutdown").onclick = () => { apiReboot("shutdown");}
		}

		// Old Interface
		const menu = document.querySelector(".comfy-menu");
		if(menu)
		{
			const rebootButton = document.createElement("button");
			rebootButton.id = "bxRebootButtonOld";
			rebootButton.textContent = "Server...";
			rebootButton.onclick = () => { toggle_menu(document.getElementById("bxRebootContextMenuOld")) }
			rebootButton.style.background = "linear-gradient(90deg, #442222 0%, #222222 100%)";
		
			menu.append(rebootButton);

			create_menu(menu, "bxRebootContextMenuOld")
		}
		
		// New interface
		const side_tb = document.querySelector(".side-tool-bar-end");
		const params_button = document.querySelector(".pi-cog");
		if(side_tb && params_button)
		{
			const shutButton = params_button.parentElement.cloneNode(true);
			shutButton.id = "bxRebootButtonNew";
			let shuticon = shutButton.querySelector(".pi-cog");
			shuticon.classList.remove("pi-cog");
			shuticon.classList.add("pi-power-off");
			side_tb.append(shutButton);

			shutButton.onclick = () => { toggle_menu(document.getElementById("bxRebootContextMenuNew")) }

			create_menu(document.querySelector(".side-tool-bar-container"), "bxRebootContextMenuNew", true)
		}

		const setting = app.ui.settings.addSetting({
			id: "BilboX.DistantShutdownMenu",
			name: "Show distant server shutdown menu",
			defaultValue: false,
			type: "boolean",
			onChange: async (v) => {
				let b_old = document.getElementById("bxRebootButtonOld");
				let m_old = document.getElementById("bxRebootContextMenuOld");
				if(b_old)
					b_old.style.display = v ? "block":"none";
				if(!v && m_old)
					m_old.style.display = "none";

				let b_new = document.getElementById("bxRebootButtonNew");
				let m_new = document.getElementById("bxRebootContextMenuNew");
				if(b_new)
					b_new.style.display = v ? "block":"none";
				if(!v && m_new)
					m_new.style.display = "none";
			}	
		});

	},
});    