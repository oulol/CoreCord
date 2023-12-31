fs = nodejs.fs()
if (document.getElementById("CoreCord_MENU") == undefined) {
ccstyle = document.createElement("style")
document.head.appendChild(ccstyle)
ccstyle.type = "text/css"
ccstyle.innerHTML = `.cc_checkbox{
	width: 40px;
	height: 24px;
	border-radius: 60px;
	cursor: pointer;
	background: rgb(128,132,142);
	transition: background 0.3s linear;
}
.knob {
	position: absolute;
	width: 18px;
	height: 18px;
	top: 3px;
	left: 3px;
	background: #FFF;
	border-radius: 60px;
	transition: all 0.3s ease-out;

}

.line1 {
	position: absolute;
	top: 8px;
	left: 3px;
	width: 12px;
	height: 2px;
	background: #72767d;
	transform: rotateZ(45deg);
	transform-origin: center;
	transition: all 0.3s ease-out;
}
  
.line2 {
	position: absolute;
	top: 8px;
	left: 3px;
	width: 12px;
	height: 2px;
	background: #72767d;
	transform: rotateZ(-45deg);
	transform-origin: center;
	transition: all 0.3s ease-out;
}


@keyframes knob{
    0%   { width: 18px; height: 18px; top: 3px; left: 3px; }
    33%  { width: 24px; height: 16px; top: 4px; left: 3px; }
    66%  { width: 24px; height: 16px; top: 4px; left: 12px; }
    100% { width: 18px; height: 18px; top: 3px; left: 18px; }
}

@keyframes line1{
    0%   { top: 8px; left: 3px; width: 12px; height: 2px; background: #72767d; transform: rotateZ(45deg); }
    25%  { top: 7px; left: 8px; width: 8px; height: 2px; transform: rotateZ( 0deg); }
    75%  { top: 7px; left: 8px; width: 8px; height: 2px; transform: rotateZ( 0deg); }
    100% { top: 10px; left: 3px; width: 6px; height: 2px; background: #43b581; transform: rotateZ(45deg); }
}

@keyframes line2{
    0%   { top: 8px; left: 3px; width: 12px; height: 2px; background: #72767d; transform: rotateZ(-45deg); }
    25%  { top: 7px; left: 8px; width: 8px; height: 2px; transform: rotateZ(  0deg); }
    75%  { top: 7px; left: 8px; width: 8px; height: 2px; transform: rotateZ(  0deg); }
    100% { top: 8px; left: 6px; width: 10px; height: 2px; background: #43b581; transform: rotateZ(-45deg); }
}

@keyframes knob_r{
    0%   { width: 18px; height: 18px; top: 3px; left: 18px; }
    33%  { width: 24px; height: 16px; top: 4px; left: 12px; }
    66%  { width: 24px; height: 16px; top: 4px; left: 3px; }
    100% { width: 18px; height: 18px; top: 3px; left: 3px; }
}

@keyframes line1_r{
    0%   { top: 10px; left: 3px; width: 6px; height: 2px; background: #43b581; transform: rotateZ(45deg); }
    25%  { top: 7px; left: 8px; width: 8px; height: 2px; transform: rotateZ( 0deg); }
    75%  { top: 7px; left: 8px; width: 8px; height: 2px; transform: rotateZ( 0deg); }
    100% { top: 8px; left: 3px; width: 12px; height: 2px; background: #72767d; transform: rotateZ(45deg); }
}

@keyframes line2_r{
    0%   { top: 8px; left: 6px; width: 10px; height: 2px; background: #43b581; transform: rotateZ(-45deg); }
    25%  { top: 7px; left: 8px; width: 8px; height: 2px; transform: rotateZ(  0deg); }
    75%  { top: 7px; left: 8px; width: 8px; height: 2px; transform: rotateZ(  0deg); }
    100% { top: 8px; left: 3px; width: 12px; height: 2px; background: #72767d; transform: rotateZ(-45deg); }
}

.cc_checkbox.checked {
	background: #43b581;
}

.cc_checkbox.checked .knob {
	animation: knob 0.3s ease-out 0s 1 normal forwards;
}

.cc_checkbox.unchecked .knob {
	animation: knob_r 0.3s ease-out 0s 1 normal forwards;
}

.cc_checkbox.checked .line1 {
	animation: line1 0.3s ease-out 0s 1 normal forwards;
}

.cc_checkbox.unchecked .line1 {
	animation: line1_r 0.3s ease-out 0s 1 normal forwards;
}

.cc_checkbox.checked .line2 {
	animation: line2 0.3s ease-out 0s 1 normal forwards;
}

.cc_checkbox.unchecked .line2 {
	animation: line2_r 0.3s ease-out 0s 1 normal forwards;
}

.no_scrollbar::-webkit-scrollbar {
	display: none;
}

.cc_hidden {
	display: none;
}`
CoreCord = {}
CoreCord.zIndex = 999999
CoreCord.mod = {}
CoreCord.data = {}
CoreCord.readConfig = function() {
	try {
		CoreCord.data = JSON.parse(fs.readFile("config.json"))
	} catch (e) {
		console.log("[CoreCord] No config file was found, unable to load data.")
	};
};
CoreCord.saveConfig = function() {
	fs.writeFile("config.json",JSON.stringify(CoreCord.data))
};
CoreCord.readConfig()
CoreCord.olddata = {}
CoreCord.mod.Snow = function() {
	var interval
	func()
	function func() {
		if (CoreCord.data.Snow.enabled) {
			let flake = document.createElementNS("http://www.w3.org/2000/svg","svg")
			let size = Math.floor(Math.random() * 15)+10
			let speed = (Math.floor(Math.random() * 10)+10)
			let pos = (Math.floor(Math.random() * document.body.clientWidth))
			flake.setAttributeNS(null,"width",size)
			flake.setAttributeNS(null,"height",size)
			flake.setAttributeNS(null,"viewBox","0 0 512 512")
			flake.innerHTML='<path fill="#000000" style="fill: rgb(255, 255, 255);" d="M494.464,322.215l-8.835-32.969l-94.197,25.24l-22.472-12.975L447.788,256l-78.827-45.511l22.472-12.974l94.197,25.24 l8.834-32.971l-61.227-16.406l52.999-30.599l-17.067-29.559l-52.999,30.599l16.407-61.227l-32.972-8.835l-25.24,94.198 l-22.471,12.974V89.907l-78.828,45.511v-25.949l68.956-68.957l-24.136-24.136l-44.819,44.822V0h-34.133v61.198l-44.822-44.82 l-24.136,24.136l68.957,68.956v25.948l-78.828-45.511v91.022l-22.471-12.974l-25.24-94.197l-32.972,8.835l16.406,61.227 L42.831,113.22L25.764,142.78l52.999,30.599l-61.227,16.406l8.834,32.971l94.198-25.24l22.471,12.974L64.211,256l78.828,45.511 l-22.471,12.974L26.37,289.246l-8.834,32.971l61.227,16.406L25.764,369.22l17.067,29.56l52.998-30.599l-16.406,61.227 l32.972,8.835l25.24-94.198l22.471-12.974v91.022l78.828-45.511v25.948l-68.956,68.957l24.136,24.136l44.819-44.82V512h34.133 v-61.198l44.822,44.82l24.136-24.136l-68.957-68.956v-25.949l78.828,45.511v-91.022l22.471,12.974l25.24,94.198l32.972-8.835 L416.17,368.18l52.999,30.599l17.067-29.56l-52.999-30.599L494.464,322.215z M194.239,149.026l44.694,25.805l-44.694,25.805 V149.026z M177.172,281.804L132.478,256l44.694-25.805V281.804z M194.239,362.974v-51.61l44.694,25.805L194.239,362.974z M255.999,307.608l-44.694-25.805v-51.609l44.694-25.804l44.694,25.805v51.608L255.999,307.608z M317.76,362.973l-44.694-25.804 l44.694-25.805V362.973z M317.76,200.635l-44.694-25.804l44.694-25.805V200.635z M334.827,281.805v-51.61L379.521,256 L334.827,281.805z"/>'
			flake.style.transition = "all "+speed+"s linear"
			flake.style.top=-size
			flake.style.pointerEvents="none"
			flake.style.rotate=(Math.floor(Math.random() * 180)-90)+"deg"
			flake.style.left=pos
			flake.style.zIndex=CoreCord.zIndex
			flake.style.position="absolute"
			flake = document.body.appendChild(flake)
			setTimeout(() => {
				flake.style.top="100%"
				flake.style.left=pos+(Math.floor(Math.random() * 300)-150)
				flake.style.rotate=(Math.floor(Math.random() * 360)-180)+"deg"
			}, 50);
			setTimeout(() => {
				flake.outerHTML=""
			}, speed*1000+(size*10));
		}
		clearInterval(interval)
		interval = setInterval(func, CoreCord.data.Snow.delay)
	}
}
CoreCord.mods = [
	{
		"name":"Snow",
		"description":"Adds snow to Discord",
		"settings":{"delay":{"value":1000,"description":"Delay between snowflakes, In milliseconds.","type":"int"}},
		"function": CoreCord.mod.Snow
	}
]
CoreCord.Watermark = function() {
	let title = document.createElement("a")
	title.style.position="absolute"
	title.style.width="100%"
	title.style.height=15
	title.style.textAlign="center"
	title.style.top=0
	title.style.transition="all 0.3s ease 0s"
	title.style.transform="translateY(-20px)"
	title.style.opacity=0
	title.style.left=0
	title.style.zIndex=CoreCord.zIndex
	title.style.color="var(--text-normal)"
	title.id = "CoreCord_WATERMARK"
	title.innerText = "CoreCord"
	document.body.appendChild(title)
	setTimeout(() => {
		document.getElementById("CoreCord_WATERMARK").style.transform="translateY(2px)"
		document.getElementById("CoreCord_WATERMARK").style.opacity=1
		setTimeout(() => {
			document.getElementById("CoreCord_WATERMARK").style.transform="translateY(-20px)"
			setTimeout(() => {
				document.getElementById("CoreCord_WATERMARK").outerHTML=""
			}, 300);
		}, 5000);
	}, 300);
}

CoreCord.isOpen = false
CoreCord.Menu = function() {
	if (CoreCord.isOpen) {
		CoreCord.MenuElement.style.left = "-310px"
		CoreCord.MenuElement.style.opacity = 0
		CoreCord.isOpen = false
	} else {
		CoreCord.MenuElement.style.left = "10px"
		CoreCord.MenuElement.style.opacity = 1
		CoreCord.isOpen = true
	}
}
CoreCord.makeSwitchable = function(swtch, modname) {
	swtch.onclick = function() {
		if (this.classList.contains("checked")) {
			this.classList.remove("checked")
			this.classList.add("unchecked")
		} else {
			this.classList.remove("unchecked")
			this.classList.add("checked")
		}
		CoreCord.data[modname].enabled = this.classList.contains("checked")
	}
}
CoreCord.Init = function() {
	if (CoreCord.initialized == false) {
		CoreCord.titleBar = document.getElementsByClassName("titleBar__01af6")[0]
		let menu = document.createElement("div")
		menu.style.width="300px"
		menu.style.top="28px"
		menu.style.zIndex=CoreCord.zIndex
		menu.style.left = "-310px"
		menu.style.height="calc(100% - 38px)"
		menu.style.borderRadius="9px"
		menu.style.transition = "left 0.5s ease, opacity 0.4s ease"
		menu.style.background = "var(--background-primary)"
		menu.style.position="absolute"
		menu.id = "CoreCord_MENU"
		let modsm = document.createElement("div")
		modsm.style.width="290px"
		modsm.style.left="5px"
		modsm.style.height="calc(100% - 45px)"
		modsm.style.bottom="5px"
		modsm.style.borderRadius=menu.style.borderRadius
		modsm.style.position="absolute"
		modsm.style.background="var(--background-secondary)"
		modsm.style.overflowY="scroll"
		modsm.className = "no_scrollbar"
		modsm.id = "CoreCord_MODS"
		CoreCord.mods.forEach((mod,index) => {
			if (CoreCord.data[mod.name] == undefined) {
				CoreCord.data[mod.name] = {"enabled":false}
				for (let [set, value] of Object.entries(mod.settings)) {
					CoreCord.data[mod.name][set] = value.value
				}
 			}
			let Mod = document.createElement("div")
			Mod.style.borderRadius=menu.style.borderRadius
			Mod.style.background = "var(--background-secondary-alt)"
			Mod.style.width="calc(100% - 10px)"
			Mod.style.marginLeft="5px"
			Mod.style.marginTop="5px"
			Mod.style.position="relative"
			Mod.style.height="130px"
			Mod.dataset.modname = mod.name.toLowerCase()
			let Title = document.createElement("a")
			Title.style.position="absolute"
			Title.style.left="10px"
			Title.style.top="10px"
			Title.style.fontSize="20px"
			Title.style.color="var(--text-normal)"
			Title.style.zIndex=CoreCord.zIndex
			Title.innerText=mod.name
			let Desc = document.createElement("a")
			Desc.style.position="absolute"
			Desc.style.left="10px"
			Desc.style.bottom="30px"
			Desc.style.height="60px"
			Desc.style.fontSize="10px"
			Desc.style.color="var(--text-secondary)"
			Desc.style.fontSize="15px"
			Desc.style.zIndex=CoreCord.zIndex
			Desc.innerText=mod.description
			let Switch = document.createElement("div")
			Switch.className="cc_checkbox"
			Switch.style.position="absolute"
			Switch.style.top="10px"
			Switch.style.right="10px"
			let Knob = document.createElement("div")
			Knob.className="knob"
			let Line1 = document.createElement("div");
			Line1.className="line1"
			let Line2 = document.createElement("div")
			Line2.className="line2"
			if (CoreCord.data[mod.name].enabled) {
				Switch.classList.add("checked")
			}
			let Settings = document.createElementNS("http://www.w3.org/2000/svg","svg")
			Settings.ariaHidden=true
			Settings.role="img"
			Settings.setAttributeNS(null,"viewBox","0 0 24 24")
			Settings.innerHTML='<path fill="currentColor" fill-rule="evenodd" d="M10.56 1.1c-.46.05-.7.53-.64.98.18 1.16-.19 2.2-.98 2.53-.8.33-1.79-.15-2.49-1.1-.27-.36-.78-.52-1.14-.24-.77.59-1.45 1.27-2.04 2.04-.28.36-.12.87.24 1.14.96.7 1.43 1.7 1.1 2.49-.33.8-1.37 1.16-2.53.98-.45-.07-.93.18-.99.64a11.1 11.1 0 0 0 0 2.88c.06.46.54.7.99.64 1.16-.18 2.2.19 2.53.98.33.8-.14 1.79-1.1 2.49-.36.27-.52.78-.24 1.14.59.77 1.27 1.45 2.04 2.04.36.28.87.12 1.14-.24.7-.95 1.7-1.43 2.49-1.1.8.33 1.16 1.37.98 2.53-.07.45.18.93.64.99a11.1 11.1 0 0 0 2.88 0c.46-.06.7-.54.64-.99-.18-1.16.19-2.2.98-2.53.8-.33 1.79.14 2.49 1.1.27.36.78.52 1.14.24.77-.59 1.45-1.27 2.04-2.04.28-.36.12-.87-.24-1.14-.96-.7-1.43-1.7-1.1-2.49.33-.8 1.37-1.16 2.53-.98.45.07.93-.18.99-.64a11.1 11.1 0 0 0 0-2.88c-.06-.46-.54-.7-.99-.64-1.16.18-2.2-.19-2.53-.98-.33-.8.14-1.79 1.1-2.49.36-.27.52-.78.24-1.14a11.07 11.07 0 0 0-2.04-2.04c-.36-.28-.87-.12-1.14.24-.7.96-1.7 1.43-2.49 1.1-.8-.33-1.16-1.37-.98-2.53.07-.45-.18-.93-.64-.99a11.1 11.1 0 0 0-2.88 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" clip-rule="evenodd" class=""></path>'
			Settings.setAttributeNS(null,"width","22px")
			Settings.setAttributeNS(null,"height","22px")
			Settings.style.top="11px"
			Settings.style.right="56px"
			Settings.style.position="absolute"
			Settings.style.color="var(--interactive-normal)"
			Knob.appendChild(Line1)
			Knob.appendChild(Line2)
			Switch.appendChild(Knob)
			CoreCord.makeSwitchable(Switch,mod.name)
			Mod.appendChild(Title)
			Mod.appendChild(Switch)
			Mod.appendChild(Desc)
			Mod.appendChild(Settings)
			modsm.appendChild(Mod)
			mod.function()
		});
		menu.appendChild(modsm)
		let Search = document.createElement("div")
		Search.style.position="absolute"
		Search.style.top="10px"
		Search.style.left="10px"
		Search.style.height="20px"
		Search.style.width="280px"
		Search.style.background="var(--background-secondary-alt)"
		Search.style.borderRadius=menu.style.borderRadius
		let SearchInput = document.createElement("input")
		SearchInput.style.position="absolute"
		SearchInput.style.width="260px"
		SearchInput.style.height="14px"
		SearchInput.style.fontFamily="gg sans"
		SearchInput.style.top="0px"
		SearchInput.style.left="5px"
		SearchInput.style.background="rgba(0,0,0,0)"
		SearchInput.style.color="var(--text-normal)"
		SearchInput.style.borderColor="transparent"
		SearchInput.id = "CoreCord_search"
		SearchInput.placeholder="Search"
		SearchInput.oninput = function(e) {
			val = SearchInput.value
			let childs = document.getElementById("CoreCord_MODS").childNodes
			for (let i=0, item; item = childs[i]; i++) {
				if (!item.dataset.modname.includes(val.toLowerCase())) {
					item.classList.add("cc_hidden")
				} else {
					item.classList.remove("cc_hidden")
				}
			}
		}
		Search.appendChild(SearchInput)
		menu.appendChild(Search)
		document.body.appendChild(menu)
		let button = document.createElement("div")
		button.className = "winButton__88672 winButtonMinMax__72f36"
		button.ariaLabel = "CoreCord"
		button.tabIndex = -1
		button.role = "button"
		button.onclick = function() { CoreCord.Menu() }
		let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
		svg.ariaHidden=true
		svg.role = "img"
		svg.setAttributeNS(null,"width","12")
		svg.setAttributeNS(null,"height","12")
		svg.setAttributeNS(null,"viewBox","0 0 12 12")
		svg.innerHTML='<circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1" fill="none" />\n<circle cx="6" cy="6" r="2.3" fill="currentColor" />'
		button.appendChild(svg)
		CoreCord.titleBar.appendChild(button)
		CoreCord.MenuElement = document.getElementById("CoreCord_MENU")
		CoreCord.initialized=true
		CoreCord.saveConfig()
		setInterval(() => {
			if (JSON.stringify(CoreCord.data) != CoreCord.olddata) {
				CoreCord.olddata =JSON.stringify(CoreCord.data)
				CoreCord.saveConfig()
				console.log("[CoreCord] Saved config.")
			};
		}, 1000);
	} else {
		CoreCord.initialized = true
	}
}
CoreCord.initialized = false
CoreCord.Init()
CoreCord.Watermark()
}
