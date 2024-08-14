import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js"

// Inverts the scrolling of context menus
const ActivateNodeType = "BilboXPhotoPrompt"
const relPath = "/extensions/bilbox-comfyui"
const id = "BilboX.PromptGeekContextMenuEnhance";

function createCardElement(title, description, img_path, holder, callback)
{
	var card_html = ` \
        <div class="art__image"></div> \
        <div class="art__text-wrapper">  \
			<div class="art__title">${title}</div>  \
            <div class="art__details-wrapper"> \
                <p class="art__excerpt">${description}</p>  \
            </div>  \
        </div> \
        <a href="#" class="art__link"></a>  \
        <input type="checkbox" />  `;

	let grp = document.createElement('div');
	grp.classList.add('grid_group');
	var card = document.createElement("div");
	card.classList.add('grid-art');
	card.innerHTML = card_html;

	var d2 = card.querySelector(":scope > .art__image")
	if (d2)
		d2.setAttribute('style', 'background-image:url("' + img_path + '")')

	var link = card.querySelector("a");
	link.addEventListener("click", function (e) {
		e.preventDefault();
		if(callback)
			callback(title);
		});

	grp.appendChild(card);
	holder.appendChild(grp);
}

function set_preview_not_editable(node)
{
	if (node.widgets[0].name == 'modal_combos')
	{
		for(var w of node.widgets)
		{
			if(w.name=="preview")
			{
				w.inputEl.readOnly = true;
				return w;
			}
		}
	}
	return null;
}

function update_preview(node)
{
	if(node.type != ActivateNodeType)
		return "";

	var dict = new Object();
	
	for(var w of node.widgets)
		dict[w.name] = w.value;

	const EMPTY_TEXT = "";
	var style = dict.style == EMPTY_TEXT ? "" : `${dict.style} photo of `;
	var framing = dict.framing == EMPTY_TEXT ? "" : `, ${dict.framing}`;
    var setting_background = dict.setting_background == EMPTY_TEXT ? "" : `, ${dict.setting_background}`;
	var lighting = dict.lighting == EMPTY_TEXT ? "" : `, ${dict.lighting}`;
	var camera_angle = dict.camera_angle == EMPTY_TEXT ? "" : `, ${dict.camera_angle}`;
	var camera_properties = dict.camera_properties == EMPTY_TEXT ? "" : `, ${dict.camera_properties}`;
	var film_types = dict.film_types == EMPTY_TEXT ? "" : `, ${dict.film_types}`;
	var lenses = dict.lenses == EMPTY_TEXT ? "" : `, ${dict.lenses}`;
	var filters_effects = dict.filters_effects == EMPTY_TEXT ? "" : `, ${dict.filters_effects}`;
	var photographers = dict.photographers == EMPTY_TEXT ? "" : `, in the style of ${dict.photographers}`;

	var res=`${style}${dict.subject}${framing}${setting_background}${lighting}${camera_angle}${camera_properties}${film_types}${lenses}${filters_effects}${photographers}`;
	node.preview_widget.value = res;
    return res;
}

function customize_node(node)
{
	if('preview_widget' in node)
		return;
	var preview_widget = set_preview_not_editable(node);
	if(preview_widget)
	{
		node.preview_widget = preview_widget;
		update_preview(node)
	}
}

app.registerExtension({
	name: id,

	init() {
		function installCss()
		{
			console.log("[BilboX] Installing bilbox.css...")
			let head = document.getElementsByTagName('HEAD')[0];
			let link = document.createElement('link');
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = relPath+'/bilbox.css';
			head.appendChild(link);
		}

		function setup_tooltips(combo_name)
		{
			var cname = combo_name.replace("_"," ");
			if(!(cname in window.bilbox_promptgeek_data))
				return;
			var data = bilbox_promptgeek_data[cname].reduce(
				(obj, item) => Object.assign(obj, { [item["name"]]: item }), {});
			const items = Array.from(document.querySelectorAll(".litemenu-entry"));
			for (var e of items) {
				var title = e.innerText;
				if(title in data)
				{
					//e.setAttribute('data-tooltip', data[title]["description"]);
					var img = relPath+'/PromptGeek/'+ data[title]["images"][0]
					e.innerHTML += '<span><img src="'+img+'">'+
						'<a href="https://www.youtube.com/@promptgeek">PromptGeek\'s Youtube</a><br>'+
						'<a href="https://promptgeek.gumroad.com/l/photoreal">PromptGeek\'s "Photoreal" Book</a><br>'+
						'<h3>'+ title+'</h3><p align="justify">'+data[title]["description"]+'</p></span>';
					e.classList.add("tooltip");
				}
			}
		}

		function setup_selection_modal(combo_name, callback)
		{
			var container = null;
			var modal = null;
			
			modal = document.getElementById("bx_modal_context_menu");
			if(!modal)
			{
				modal = document.createElement("div");
				modal.classList.add("comfy-modal");
				modal.setAttribute("id","bx_modal_context_menu");
				modal.innerHTML='<h3 class="bx_modal_title">'+combo_name.replace("_"," ")+"</h3>"+
					'<span><a href="https://www.youtube.com/@promptgeek">PromptGeek\'s Youtube</a><br>'+
					'<a href="https://promptgeek.gumroad.com/l/photoreal">PromptGeek\'s "Photoreal" Book</a></span>';

				var container = document.createElement("div");
				container.classList.add("comfy-modal-content", "cards-container", "grid-layout");
				modal.appendChild(container);
				document.body.appendChild(modal);
			}

			container = modal.getElementsByClassName("cards-container")[0];
			container.innerHTML="";
			modal.setAttribute('style','display: block; width: 80%; height: 80%;')

			var cname = combo_name.replace("_"," ");
			if(!(cname in window.bilbox_promptgeek_data))
				return;

			var data = bilbox_promptgeek_data[cname].reduce(
				(obj, item) => Object.assign(obj, { [item["name"]]: item }), {});
			const items = Array.from(document.querySelectorAll(".litemenu-entry"));

			createCardElement("None","", "", container,
			(value) => { 
				modal.setAttribute('style','display: none; width: 80%; height: 80%;')
				callback("");
			});

			for(var e of window.bilbox_promptgeek_data[cname])
			{
				var img_path = relPath+'/PromptGeek/'+ e["images"][0]
				createCardElement(e["name"],e["description"], img_path, container,
					(value) => { 
						modal.setAttribute('style','display: none; width: 80%; height: 80%;')
						callback(value);
					});
			}
		}

		installCss()
		api.fetchApi('/extensions/bilbox-comfyui/PromptGeek/photo_data.json')
    		.then((response) => response.json())
    		.then((json) => window.bilbox_promptgeek_data = json);

		const lcg = LGraphCanvas.prototype.processNodeWidgets;

		LGraphCanvas.prototype.processNodeWidgets = function(
			node,
			pos,
			event,
			active_widget
		) {
			if( node.type != ActivateNodeType)
				return lcg.call(this, node, pos, event, active_widget);

			for (let widget of node.widgets) {
					if (widget?.element?.nodeName === "TEXTAREA") {
						widget.element.classList.add("bilbox-input");
					}
			}

			// Patch as it seems that in nodeCreated, node type is not set directly
			customize_node(node);

			if(event.type != LiteGraph.pointerevents_method+"down")
				return lcg.call(this, node, pos, event, active_widget);
			if (!node.widgets || !node.widgets.length || (!this.allow_interaction && !node.flags.allow_interaction))
			 	return lcg.call(this, node, pos, event, active_widget);
	
			var x = pos[0] - node.pos[0];
			var y = pos[1] - node.pos[1];
			var width = node.size[0];
			var that = this;
			var ref_window = this.getCanvasWindow();
	
			var combo_hit=false
			for (var i = 0; i < node.widgets.length; ++i) {
			 	var w = node.widgets[i];
			 	if(!w || w.disabled)
			 		continue;
				var widget_height = w.computeSize ? w.computeSize(width)[1] : LiteGraph.NODE_WIDGET_HEIGHT;
				var widget_width = w.width || width;
				//outside
				if ( w != active_widget && 
					(x < 6 || x > widget_width - 12 || y < w.last_y || y > w.last_y + widget_height || w.last_y === undefined) ) 
					continue;
				
				if(w.type != "combo")
					continue;
					
				if ( w == active_widget || (x > 6 && x < widget_width - 12 && y > w.last_y && y < w.last_y + widget_height) ) {

					var delta = x < 40 ? -1 : x > widget_width - 40 ? 1 : 0;
					if(delta)
						continue;
					combo_hit=true;
					var values = w.options.values;
					if (values && values.constructor === Function) {
						values = w.options.values(w, node);
					}
					var values_list = values.constructor === Array ? values : Object.keys(values);
					var text_values = values != values_list ? Object.values(values) : values;

					function inner_clicked(v, option, event) {
						if(values != values_list)
							v = text_values.indexOf(v);
						this.value = v;
						inner_value_change(this, v);
						that.dirty_canvas = true;
						return false;
					}

					if(isComboModal(node))
					{
						setup_selection_modal(w.name, inner_clicked.bind(w));
					}
					else
					{					
						var menu = new LiteGraph.ContextMenu(values, {
								scale: Math.max(1, this.ds.scale),
								event: event,
								className: "dark",
								callback: inner_clicked.bind(w),
								node: node,
								widget: w,
							},
							ref_window);

						setup_tooltips(w.name);
					}
				}
			}
			if(!combo_hit)
				return lcg.call(this, node, pos, event, active_widget);	
			// //const ctx = lcg.call(this, node, pos, event, active_widget);
			function inner_value_change(widget, value) {
				if(widget.type == "number"){
					value = Number(value);
				}
				widget.value = value;
				if ( widget.options && widget.options.property && node.properties[widget.options.property] !== undefined ) {
					node.setProperty( widget.options.property, value );
				}
				if (widget.callback) {
					widget.callback(widget.value, that, node, pos, event);
				}

				update_preview(node);
			}
			return null;
		}
		

		const ctxMenu = LiteGraph.ContextMenu;

		function isComboModal(node)
		{
			for (var i = 0; i < node.widgets.length; ++i)
			{
				var w = node.widgets[i];
				if(w.name == "modal_combos")
					return w.value;
			}
			return true;
		}

	},
	loadedGraphNode(node, app) {
		if(node.type != ActivateNodeType)
			return;		
		customize_node(node);
	},
	nodeCreated(node, app) {
		// hotfix cause node.type is somehow has undefined value
		if (node.widgets[0].name != 'modal_combos')
			return;
		// if(node.type != ActivateNodeType)
			// return;

		customize_node(node); // init event listeners

		function checkTextArea(event)
		{
			update_preview(node);
		}

		for(var i in node.widgets)
		{
		 	var w = node.widgets[i];
		 	if(w.type == "customtext" && 'inputEl' in w)
			{
				
				w.inputEl.addEventListener("input", checkTextArea.bind(node));
			} 
		}

		node.onWidgetChanged = function( name, value, old_value)
		{
			update_preview(node);
		}
	}
});
