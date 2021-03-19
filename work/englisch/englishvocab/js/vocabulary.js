let vocabulary = {
	glossar: {
		'I watched the storm, so beautiful *yet* terrific.': [
			'<b>[Adverb]</b> nevertheless'
		],
		'I shall *partake* in no such action.': [
			'<b>[Verb]</b> to take part in something'
		],
		'I am *but* a man.': ['<b>[Adverb]</b> only, merely'],
		'*For* I am a man of *leisure*.': [
			'<b>[Conjunction]</b> for the reason that',
			'<b>[Noun]<b/> convenience, relaxation'
		],
		'Thy presence is *utterly* *flattering*, if I *daresay*.': [
			'<b>[Adverb]</b> completely, absolutely',
			'<b>[Adjective]</b> pleasing or gratifying by compliments or attention',
			'<b>[Verb]</b> to dare to say'
		],
		'He who wanders *afar* and across *Aurora’s* *simper*.': [
			'<b>[Adverb]</b> From or at a great distance',
			'<b>[Noun]</b> Aurora, Roman goddess of dawn',
			'<b>[Noun]</b> a silly smile'
		],
		'My heart *yearns* for your touch.': [
			'<b>[Verb]</b> to long persistently, wistfully, or sadly '
		],
		'The wealthy are, *ipso facto*, better.': [
			'<b>[Adverb]</b> in fact, by that very fact'
		],
		'Shall I or *shan’t* I?': ['<b>[Verb]</b> archaic form of shalln’t'],
		'Fate strikes as the *empyrean* *lusters* upon us.': [
			'<b>[Noun]</b> The highest heaven or heavenly sphere in ancient and medieval cosmology usually consisting of fire or light',
			'<b>[Verb]</b> to glow, to sheen'
		],
		'Oh, how I envy the *eld*.': ['<b>[Noun]</b> old age, olden days'],
		'*Glaciated* by wind and storm,<br>*Nevermore*, thy heart be warm.': [
			'<b>[Verb]</b> to be covered with ice or a glacier',
			'<b>[Adverb]</b> never again'
		],
		'Between *vivid* light and *verdant* grasses,<br>It is here, where their wild hearts *loom*.': [
			'<b>[Adjective]</b> Perceived as bright and distinct',
			'<b>[Adjective]</b> Green, covered with green growth',
			'<b>[Verb]</b> to appear as a large, often frightening or unclear shape or object'
		],
		'I *brood* away.': [
			'<b>[Verb]</b> to think deeply about something that makes one unhappy, angry, or worried'
		],
		'Her *mellifluous* voice left my heart in an *ineffable* state.': [
			'<b>[Adjective]</b> having a smooth rich flow, filled with something sweet (such as honey)',
			'<b>[Adjective]</b> too great to be explained in words'
		],
		'You *nefarious* swine!': [
			'<b>[Adjective]</b> wicked, villainous, despicable'
		],
		'*Serendipity* is the travellers strongest ally.': [
			'<b>[Noun]</b> the faculty or phenomenon of finding valuable or agreeable things not sought for'
		],
		'A *sonorous* roar *punctuated* by occasional *percussive* bursts.': [
			'<b>[Adjective]</b> full or loud in sound',
			'<b>[Adjective]</b> interrupted at intervals',
			'<b>[Adjective]</b> of or relating to percussion, having powerful impact'
		]
	}
}

vocabulary.size = Object.keys(vocabulary.glossar).length

vocabulary.get = function (loadIndex = randomInt(0, vocabulary.size - 1)) {
	let original = Object.keys(vocabulary.glossar)[loadIndex]
	let explanation = Object.values(vocabulary.glossar)[loadIndex]
	let text = ''

	let words = []
	let wordCount = 0
	let currentWord = ''

	let tagOpen = false

	for (let i = 0; i < original.length; i++) {
		if (original.charAt(i) == '*') {
			if (!tagOpen) {
				text += `<span onClick="tooltip(this)" tooltip="${
					explanation[wordCount++]
				}" index="${wordCount}">`
			} else {
				text += '</span>'
			}
			tagOpen = !tagOpen
		} else {
			if (!tagOpen) {
				text += original.charAt(i)
			} else {
				text += original.charAt(i)
				currentWord += original.charAt(i)
				if (original.charAt(i + 1) == '*') {
					words.push(currentWord)
					currentWord = ''
				}
			}
		}
	}

	return text
}
