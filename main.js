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
        colEl.innerHTML = '<span class="red">R</span>'
        scoreTable.innerHTML += colEl.outerHTML
        // 
    } else if (cols[cols.length - 1].includes('red')) {
        //
        cols[cols.length - 1].push('red')
        //
        colEl.innerHTML += '<span class="red">R</span>'
        // 
        document.querySelectorAll('.col')[document.querySelectorAll('.col').length - 1].innerHTML += '<span class="red">R</span>'
        // 
    } else {
        //
        cols.push(['red'])
        // 
        colEl.innerHTML = '<span class="red">R</span>'
        scoreTable.innerHTML += colEl.outerHTML
    }
}

function greenWinBtnClicked() {
    if (!cols.values().next().value) {
        //
        cols.push(['green'])
        //
        colEl.innerHTML = '<span class="green">G</span>'
        scoreTable.innerHTML += colEl.outerHTML
        //
    } else if (cols[cols.length - 1].includes('green')) {
        //
        cols[cols.length - 1].push('green')
        //
        document.querySelectorAll('.col')[document.querySelectorAll('.col').length - 1].innerHTML += '<span class="green">G</span>'
        //
    } else {
        //
        cols.push(['green'])
        //
        colEl.innerHTML = '<span class="green">G</span>'
        scoreTable.innerHTML += colEl.outerHTML
        //
    }
}

