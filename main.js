//
const scoreTable = document.querySelector(".score-table"),
    redWinBtn = document.querySelector(".red-win-btn"),
    greenWinBtn = document.querySelector(".green-win-btn");

// Create new column and column child
let colEl = document.createElement("div");
colEl.classList.add("col");
let newWinEl = document.createElement("span");

//
let cols = [];
//

redWinBtn.addEventListener("click", redWinClicked);
greenWinBtn.addEventListener("click",   greenWinBtnClicked);

function redWinClicked() {
    if (!cols.values().next().value) {
        //
        cols.push(['red'])
        //
    } else if (cols[cols.length - 1].includes('red')) {
        //
        cols[cols.length - 1].push('red')
        //
    } else {
        //
        cols.push(['red'])
    }

    console.log(cols);
}

function greenWinBtnClicked() {
    if (!cols.values().next().value) {
        //
        cols.push(['green'])
        //
    } else if (cols[cols.length - 1].includes('green')) {
        //
        cols[cols.length - 1].push('green')
        //
    } else {
        //
        cols.push(['green'])
        // 
    }

    console.log(cols);
}

