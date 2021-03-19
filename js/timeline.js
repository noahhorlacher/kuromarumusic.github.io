// check if an element is in viewport
const inview = (el) => {
	var rect = el.getBoundingClientRect()
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <=
			(window.innerWidth || document.documentElement.clientWidth)
	)
}

// add visible class if visible (don't remove if invisible)
const checkvisible = () => {
	document.querySelectorAll('timeline ul>li:not(.visible)').forEach((e) => {
		if (inview(e)) e.classList.add('visible')
	})
}

// listen for events
for (let e of ['load', 'resize', 'scroll'])
	window.addEventListener(e, checkvisible)

checkvisible()
