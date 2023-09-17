//
const scoreTable = document.querySelectorAll(".score-table"),
    redWinBtn = document.querySelector(".red-win-btn"),
    greenWinBtn = document.querySelector(".green-win-btn");
    // redsTotal = document.querySelector(".reds-total"),
    // greensTotal = document.querySelector(".greens-total"),
    // modalBtn = document.querySelector('.modalBtn');

// Create new column and column child
let colEl = document.createElement("div");
colEl.classList.add("col");
let newWinEl = document.createElement("span");

//
let cols = [];
//

redWinBtn.addEventListener("click", redWinClicked);
greenWinBtn.addEventListener("click", greenWinBtnClicked);

function redWinClicked() {
    if (!cols.values().next().value) {
        //
        cols.push(['red'])
        //
        colEl.innerHTML = '<span class="red">R</span>'
        scoreTable.forEach((e,i,a)=>a[i].innerHTML += colEl.outerHTML)
        // 
    } else if (cols[cols.length - 1].includes('red')) {
        //
        cols[cols.length - 1].push('red')
        //
        colEl.innerHTML += '<span class="red">R</span>'
        // 
        scoreTable.forEach(e=>e.querySelectorAll('.col')[e.querySelectorAll('.col').length - 1].innerHTML +='<span class="red">R</span>')
        // 
    } else {
        //
        cols.push(['red'])
        // 
        colEl.innerHTML = '<span class="red">R</span>'
        scoreTable.forEach((e,i,a)=>a[i].innerHTML += colEl.outerHTML)
    }
}

function greenWinBtnClicked() {
    if (!cols.values().next().value) {
        //
        cols.push(['green'])
        //
        colEl.innerHTML = '<span class="green">G</span>'
        scoreTable.forEach((e,i,a)=>a[i].innerHTML += colEl.outerHTML)
        //
    } else if (cols[cols.length - 1].includes('green')) {
        //
        cols[cols.length - 1].push('green')
        //
        scoreTable.forEach(e=>e.querySelectorAll('.col')[e.querySelectorAll('.col').length - 1].innerHTML +='<span class="green">G</span>')
        //
    } else {
        //
        cols.push(['green'])
        //
        colEl.innerHTML = '<span class="green">G</span>'
        scoreTable.forEach((e,i,a)=>a[i].innerHTML += colEl.outerHTML)
        //
    }
}

// modalBtn.addEventListener('click', (e) => {
//     if (!cols.length) {
//         redsTotal.textContent = '0'
//         greensTotal.textContent = '0'
//     } else {
//         redsTotal.textContent = cols.join().split(',').filter(e => e === 'red').length
//         greensTotal.textContent = cols.join().split(',').filter(e => e === 'green').length
//     }
// })
