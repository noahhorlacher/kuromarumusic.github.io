let reloadbtn = document.getElementsByTagName("reload")[0];
let display = document.getElementsByTagName("h1")[0];
let tooltipDisplay = document.getElementsByTagName("tooltip")[0];

let lastWord;

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.floor(Math.random() * (max - min + 1)) + min);
}

function reload(event, loadIndex = randomInt(0, vocabulary.size - 1), selectIndex = -100) {

    let r = reloadbtn.cloneNode(true);
    reloadbtn.parentNode.replaceChild(r, reloadbtn);
    reloadbtn = r;
    reloadbtn.onclick = reload;

    display.innerHTML = vocabulary.get(loadIndex);

    let wordList = document.getElementsByTagName("span");

    //can be randomized
    selectIndex = 0;

    console.log(selectIndex);
    tooltip(wordList[selectIndex]);
}

function tooltip(tip) {

    tooltipDisplay.innerHTML = tip.getAttribute('tooltip');

    let color = "";

    switch (tip.getAttribute("index")) {
        case "1":
            color = "#74b8bd";
            break;

        case "2":
            color = "#f9b5ac";
            break;

        case "3":
            color = "#cbd59e";
            break;

        case "4":
            color = "#987284";
            break;

        default:
            color = "#74b8bd";
            break;
    }

    if (lastWord) {
        lastWord.style.color = lastWord.style.backgroundColor;
        lastWord.style.backgroundColor = "transparent";
    }

    lastWord = tip;

    lastWord.style.backgroundColor = color;
    lastWord.style.color = "white";

    tooltipDisplay.style.backgroundColor = color;
}

reload();

//reload on spacebar
document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
        reload();
    }
}