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
}`
CoreCord = {}
CoreCord.zIndex = 999999
CoreCord.mod = {}
CoreCord.data = {}
CoreCord.saveConfig = function() {
	console.log(fs.readFileSync("./discord.js").toString())
}
//CoreCord.saveConfig()
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
				flake.style.rotate=(Math.floor(Math.random() * 180)-90)+"deg"
			}, 50);
			setTimeout(() => {
				flake.outerHTML=""
			}, speed*1000+(size*10));
		}
		clearInterval(interval)
		interval = setInterval(func, Number(CoreCord.data.Snow.delay)*1000);
	}
}
CoreCord.mods = [
	{
		"name":"Snow",
		"description":"Adds snow to Discord",
		"settings":{"delay":{"value":7,"description":"Delay between snowflakes, In seconds."}},
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
		CoreCord.MenuElement.style.left = "-410px"
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
		let toppingd = document.createElement("div")
		toppingd.style.position="relative"
		toppingd.style.height="5px"
		toppingd.style.width="100%"
		toppingd.opacity=0
		menu.appendChild(toppingd)
		CoreCord.mods.forEach((mod) => {
			if (CoreCord.data[mod.name] == undefined) {
				CoreCord.data[mod.name] = {"enabled":false}
				for (let [set, value] of Object.entries(mod.settings)) {
					CoreCord.data[mod.name][set] = value.value
				}
 			}
			let topping = document.createElement("div")
			topping.style.position="relative"
			topping.style.height="5px"
			topping.style.width="100%"
			topping.opacity=0
			let Mod = document.createElement("div")
			Mod.style.borderRadius=menu.style.borderRadius
			Mod.style.background = "var(--background-secondary)"
			Mod.style.width="calc(100% - 20px)"
			Mod.style.left="10px"
			Mod.style.position="relative"
			Mod.style.height="130px"
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
			let Line1 = document.createElement("div") 
			Line1.className="line1"
			let Line2 = document.createElement("div") 
			Line2.className="line2"
			Knob.appendChild(Line1)
			Knob.appendChild(Line2)
			Switch.appendChild(Knob)
			CoreCord.makeSwitchable(Switch,mod.name)
			Mod.appendChild(Title)
			Mod.appendChild(Switch)
			Mod.appendChild(Desc)
			menu.appendChild(topping)
			menu.appendChild(Mod)
			mod.function()
		})

		document.body.appendChild(menu)
		let button = document.createElement("div")
		button.className = "winButton__88672 winButtonMinMax__72f36"
		button.ariaLabel = "CoreCord"
		button.tabIndex = -1
		button.role = "button"
		button.onclick = function() { CoreCord.Menu() }
		let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
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
	} else {
		CoreCord.initialized = true
	}
}
CoreCord.initialized = false
CoreCord.Init()
CoreCord.Watermark()

CoreCord.checkboxes = document.getElementsByClassName("checkbox")
for (let i = 0, check; check = CoreCord.checkboxes[i]; i++, i < CoreCord.checkboxes.length) {
	if ("checked" in check.classList){
		check.removeClass("checked");
		check.width();  // required to restart the animations after changing class
		check.addClass("unchecked");
	}else{
		check.removeClass("unchecked");
		check.width();  // required to restart the animations after changing class
		check.addClass("checked");    
	}
}
}
