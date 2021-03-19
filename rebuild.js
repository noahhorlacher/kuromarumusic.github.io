const fs = require('fs')
const glob = require('glob')
const pug = require('pug')

const ignorechar = '__' // Prefix for files to ignore

const srcdir = 'src' // Source directory
const dstdir = '' // Distribution directory

const rebuildlimit = 500 // Wait for this many millisecs until rebuilding
let waiting = false // Currently in timeout?

// Rebuild pug files (except the templates)
const rebuildpug = () => {
	// Get all pugfiles in srcdir, except the ones starting with ignorechar
	let pugfiles = glob
		.sync(srcdir + '/**/*.pug', { root: srcdir })
		.filter((e) => !e.split('/').pop().startsWith(ignorechar))

	try {
		//Rebuild each
		for (let srcpath of pugfiles) {
			console.log('rendering ', srcpath)
			let dstpath = srcpath
				.replace(`${srcdir}/`, `${dstdir}/`)
				.replace('.pug', '.html') // The distribution path for the file
			let basedstpath = dstpath.replace(/[^/]*\.html/, '') // distribution path without the filename
			if (!fs.existsSync(basedstpath))
				fs.mkdirSync(basedstpath, { recursive: true }) // Create the folders if needed

			// Render pug and write to file
			pug.renderFile(srcpath, {}, (err, html) => {
				if (err) throw err
				fs.writeFileSync(dstpath, html, { encoding: 'utf-8' })
			})
		}

		console.log('Rendered pug')
	} catch (e) {
		console.error(e)
	}
}

// Watch files in source directory
fs.watch(
	srcdir,
	{
		encoding: 'utf-8',
		recursive: true
	},
	(e, fname) => {
		if (waiting) return // Return if timeout not yet done

		fname = fname.replace('\\', '/') // Normalize path for Windows

		if (e == 'change') {
			let fext = fname.split('.').pop()
			if (fext == 'pug') {
				rebuildpug()
			} else {
				console.log(
					`Build process for file ${fname} of type ${fext} not specified.`
				)
			}

			// Set timeout
			waiting = true
			setTimeout(() => {
				waiting = false
			}, rebuildlimit)
		}
	}
)
