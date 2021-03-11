'use strict';

// cuurent balance
let currentbalance = document.getElementById(`currentbalance`);
let currentamount = Number(currentbalance.innerText)

//add income
let incomevalue;
let incomesource;
let totalincome = document.getElementById(`totalincome`);
let addincomeform = document.getElementById(`addincomeform`);
let sourceofincome = document.getElementById(`sourceofincome`);
let amountofincome = document.getElementById(`amountofincome`);

sourceofincome.addEventListener(`keyup`,function(e) {
    incomesource = e.target.value;
})

amountofincome.addEventListener(`keyup`,function(e) {
    incomevalue = Number(e.target.value);
})

addincomeform.addEventListener(`submit`,function(e) {
    e.preventDefault();
    if(incomevalue <= 0 || incomevalue == undefined || incomesource == undefined ) {
        alert(`Income can't be negative or empty or source is empty`)
    } else {
        let previousvalueoftotal = +totalincome.innerText;
        let currentBalance = +currentbalance.innerText;

        totalincome.innerText = previousvalueoftotal + incomevalue;
        currentbalance.innerText = currentBalance + incomevalue;
    }
    createIncomeLi()
    e.target.reset()
})

//subtract expense
let totalspent = document.getElementById(`totalspent`);
let expenseform = document.getElementById(`subexpenseform`);
let spentamount = document.getElementById(`subexpenseamountinput`);
let spendsource = document.getElementById(`subexpensesrcinput`);
let spent;
spendsource.addEventListener(`keyup`, function(e) {
     spent = e.target.value;
})
let spend;
spentamount.addEventListener(`keyup`,function(e) {
    spend = Number(e.target.value);
})
expenseform.addEventListener(`submit`,function(e) {
    e.preventDefault();
    if(spend <= 0 || spend == undefined || spent == undefined) {
        alert(`spent value can't be 0 or undefined or spent source is undefined`)
    } else {
        let previouspent = Number(totalspent.innerText);
        totalspent.innerText = previouspent + spend;
        
        currentbalance.innerText = totalincome.innerText - totalspent.innerText
    }
    createSpendLi()
    e.target.reset();
})


function createIncomeLi() {
    let ul = document.getElementById(`myul`);
    let li = document.createElement(`li`)
    li.classList.add(`list-group-item`,`d-flex`,`justify-content-center`,`justify-content-sm-between`, `align-items-center`);
    li.style.borderLeft = `10px solid green`;
    li.innerHTML = 
    `<span class="text-center font-weight-bold">${incomesource}</span>
    <span class="text-center font-weight-bold">${incomevalue}</span>
    <div class="imgcontainer bg-white p-1">
      <img src="./images/delete.png" alt="delete" title="delete item" style="height: 25px; min-width: 25px; cursor: pointer;" class="img-fluid">
    </div>`;
    ul.appendChild(li)
}

function createSpendLi() {
    let ul = document.getElementById(`myul`);
    let li = document.createElement(`li`)
    li.classList.add(`list-group-item`,`d-flex`,`justify-content-center`,`justify-content-sm-between`, `align-items-center`);
    li.style.borderLeft = `10px solid red`;
    li.innerHTML = 
    `<span class="text-center font-weight-bold">${spent}</span>
    <span class="text-center font-weight-bold">${spend}</span>
    <div class="imgcontainer bg-white p-1">
      <img src="./images/delete.png" alt="delete" title="delete item" style="height: 25px; min-width: 25px; cursor: pointer;" class="img-fluid">
    </div>`;
    ul.appendChild(li)
}