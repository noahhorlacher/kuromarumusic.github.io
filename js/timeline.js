// check if an element is in viewport
const in_view = e => {
	var rect = e.getBoundingClientRect()
	return (rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth))
}

// add visible class if visible (don't remove if invisible)
const check_visibility = () => {
	document.querySelectorAll('timeline li:not(.visible)').forEach(e => {
		if (in_view(e)) e.classList.add('visible')
	})
}

// re-check visibility on window load, resize and scroll
for (let e of ['load', 'resize', 'scroll']) window.addEventListener(e, check_visibility)

// initial visibility check
check_visibility()