import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js";

function apiReboot(type) {
  api
    .fetchApi("/bilbox/reboot?mode=" + type)
    .then((response) => response.json())
    .then(async (data) => {
      try {
        console.log(data["server_op"]);
      } catch (exception) {
        console.log("Problem when sending " + type + " to server...");
      }
    });
}

app.registerExtension({
  name: "Comfy.BilboXReboot",
  commands: [
    {
      id: "reboot_lock",
      label: "Lock Session",
      function: () => {
        apiReboot("lock");
      },
    },
    {
      id: "reboot_logout",
      label: "Logout",
      function: () => {
        apiReboot("logout");
      },
    },
    {
      id: "reboot_reboot",
      label: "Reboot",
      function: () => {
        apiReboot("reboot");
      },
    },
    {
      id: "reboot_hibernate",
      label: "Hibernate",
      function: () => {
        apiReboot("hibernate");
      },
    },
    {
      id: "reboot_shutdown",
      label: "Shutdown",
      function: () => {
        apiReboot("shutdown");
      },
    },
  ],
  menuCommands: [
    // Create a nested menu structure
    {
      path: ["Server..."],
      commands: ["reboot_lock", "reboot_logout", "reboot_reboot", "reboot_hibernate", "reboot_shutdown"],
    },
  ],
  init() {},
  async setup() {
    function toggle_menu(el) {
      if (el.style.display == "block") {
        el.style.display = "none";
      } else {
        el.style.display = "block";
      }
    }

    function create_menu(el, id, isnew = false) {
      let cl = "bx-reboot-context-menu";
      if (isnew) cl = "bx-reboot-cm-new " + cl;
      el.insertAdjacentHTML(
        "beforeend",
        ' \
				<div id="' +
          id +
          '" class="' +
          cl +
          '" style="display: none"> \
					<ul class="menu">  \
						<li class="lock"><a href="#">Lock Session</a></li>  \
						<li class="logout"><a href="#">Logout</a></li>  \
						<li class="reboot"><a href="#">Reboot</a></li>  \
						<li class="hibernate"><a href="#">Hibernate</a></li>  \
						<li class="shutdown"><a href="#">Shutdown</a></li>  \
					</ul>  \
				</div> '
      );

      el.querySelector(".lock").onclick = () => {
        apiReboot("lock");
      };
      el.querySelector(".logout").onclick = () => {
        apiReboot("logout");
      };
      el.querySelector(".reboot").onclick = () => {
        apiReboot("reboot");
      };
      el.querySelector(".hibernate").onclick = () => {
        apiReboot("hibernate");
      };
      el.querySelector(".shutdown").onclick = () => {
        apiReboot("shutdown");
      };
    }

    // Old Interface
    const menu = document.querySelector(".comfy-menu");
    if (menu) {
      const rebootButton = document.createElement("button");
      rebootButton.id = "bxRebootButtonOld";
      rebootButton.textContent = "Server...";
      rebootButton.onclick = () => {
        toggle_menu(document.getElementById("bxRebootContextMenuOld"));
      };
      rebootButton.style.background = "linear-gradient(90deg, #442222 0%, #222222 100%)";

      menu.append(rebootButton);

      create_menu(menu, "bxRebootContextMenuOld");
    }
  },
});
