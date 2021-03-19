//disable image drag and drop
for (let e of document.querySelectorAll('img')) e.ondragstart = () => false

//buttons
document.querySelectorAll('btn').forEach(
	(e) =>
		(e.onclick = () => {
			if (e.hasAttribute('link')) window.location = e.getAttribute('link')
		})
)

//accordions
let lastActiveAccElt = []

document.querySelectorAll('accordion').forEach((e, i) => {
	e.setAttribute('index', i)
	lastActiveAccElt.push(null)

	e.querySelectorAll('item').forEach((f, j) => {
		f.querySelector('btn:first-of-type').onclick = () => {
			if (lastActiveAccElt[i] != j) {
				if (f.classList.contains('active')) {
					f.classList.remove('active')
				} else {
					f.classList.add('active')
				}

				lastActiveAccElt[i] = j
			} else {
				if (f.classList.contains('active')) {
					f.classList.remove('active')
				} else {
					f.classList.add('active')
				}
				lastActiveAccElt[i] = null
			}
		}
	})
})
