// disable image drag and drop
document.querySelectorAll('img').forEach(img => img.ondragstart = () => false)

// button
// open link if button has link attribute
document.querySelectorAll('btn').forEach(btn =>
	btn.onclick = e => {
		if (btn.hasAttribute('link')) window.location = btn.getAttribute('link')
	}
)

// accordion
let last_active_accordion_element = []

document.querySelectorAll('accordion').forEach((e, i) => {
	e.setAttribute('index', i)
	last_active_accordion_element.push(null)

	e.querySelectorAll('item').forEach((f, j) => {
		f.querySelector('btn:first-of-type').onclick = () => {
			// open/close item
			if (last_active_accordion_element[i] != j) {
				if (f.classList.contains('active')) f.classList.remove('active')
				else f.classList.add('active')

				last_active_accordion_element[i] = j
			} else {
				if (f.classList.contains('active')) f.classList.remove('active')
				else f.classList.add('active')

				last_active_accordion_element[i] = null
			}
		}
	})
})
