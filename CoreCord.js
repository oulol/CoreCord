function CoreCord_Watermark() {
	let title = document.createElement("a")
	title.style.position="absolute"
	title.style.width="100%"
	title.style.height=15
	title.style.textAlign="center"
	title.style.top=0
	title.style.transition="all 0.1s ease 0s"
	title.style.transform="translateY(-20px)"
	title.style.left=0
	title.style.zIndex=999999
	title.style.color="var(--text-normal)"
	title.id = "CoreCord_WATERMARK"
	title.innerText = "CoreCord"
	document.getElementById("app-mount").appendChild(title)
	setTimeout(() => {
		document.getElementById("CoreCord_WATERMARK").style.transform="translateY(2px)"
	}, 100);
	setTimeout(() => {
		document.getElementById("CoreCord_WATERMARK").style.transform="translateY(-20px)"
	}, 5100);
	setTimeout(() => {
		document.getElementById("CoreCord_WATERMARK").outerHTML=""
	}, 6100);
}

CoreCord_Watermark()
