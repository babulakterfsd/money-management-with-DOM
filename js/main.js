'use strict';

//current Balance
let currentBalanceElement = document.getElementById(`currentbalance`);
let currentAmount = +currentBalanceElement;

//Income 
let totalIncomeOutput = document.getElementById(`totalincome`);
let incomeInputForm = document.getElementById(`addincomeform`);
let incomeSourceInput = document.getElementById(`sourceofincome`);
let incomeAmountInput = document.getElementById(`amountofincome`);

let incomeList = [];
let incomeObject = {
     incomeSource: ``,
     incomeAmount: 0
}

incomeSourceInput.addEventListener(`keyup`,function(e) {
    incomeObject.incomeSource = e.target.value;
})
incomeAmountInput.addEventListener(`keyup`,function(e) {
    let income = e.target.value;
    incomeObject.incomeAmount = +income;
})
incomeInputForm.addEventListener(`submit`,function(e) {
    e.preventDefault();
    if(incomeObject.incomeAmount <= 0 || incomeObject.incomeAmount == undefined || incomeObject.incomeSource == `` ) {
        alert(`Income can't be negative or empty or source is empty`)
    } else {
        let previousTotalIncome = +totalIncomeOutput.innerText;
        let previousCurrentBalance = +currentBalanceElement.innerText;

        totalIncomeOutput.innerText = previousTotalIncome + incomeObject.incomeAmount;
        currentBalanceElement.innerText = previousCurrentBalance + incomeObject.incomeAmount;
    }
    createIncomeLi();
    e.target.reset();
})


//Spent
let spentList = [];
let spentObject = {
    spentSource: ``,
    spentAmount: 0
}
let totalSpentOutput = document.getElementById(`totalspent`);
let spentOutputForm = document.getElementById(`subexpenseform`);
let spentSourceInput = document.getElementById(`subexpensesrcinput`);
let spentAmountInput = document.getElementById(`subexpenseamountinput`);

spentSourceInput.addEventListener(`keyup`,function(e) {
    spentObject.spentSource = e.target.value;
})
spentAmountInput.addEventListener(`keyup`,function(e) {
    let spent = e.target.value;
    spentObject.spentAmount = +spent;
})
spentOutputForm.addEventListener(`submit`,function(e) {
    e.preventDefault();
    if(spentObject.spentAmount <= 0 || spentObject.spentAmount == undefined || spentObject.spentSource == ``) {
        alert(`spent value can't be 0 or undefined or spent source is undefined`)
    } else {
        let previouSpent = +totalSpentOutput.innerText;
        totalSpentOutput.innerText = previouSpent + spentObject.spentAmount;
        
        currentBalanceElement.innerText = totalIncomeOutput.innerText - totalSpentOutput.innerText;
    }
    createSpentLi();
    e.target.reset();
})


//functions to create elements and modify DOM
function createIncomeLi() {
    let ul = document.getElementById(`myul`);
    let li = document.createElement(`li`)
    li.classList.add(`list-group-item`,`d-flex`,`justify-content-center`,`justify-content-sm-between`, `align-items-center`);
    li.style.borderLeft = `10px solid green`;
    li.innerHTML = 
    `<span class="text-center font-weight-bold">${incomeObject.incomeSource}</span>
    <span class="text-center font-weight-bold">${incomeObject.incomeAmount}</span>
    <div class="imgcontainer bg-white p-1">
      <img src="./images/delete.png" alt="delete" title="delete item" style="height: 25px; min-width: 25px; cursor: pointer;" class="img-fluid">
    </div>`;
    ul.appendChild(li)
}

function createSpentLi() {
    let ul = document.getElementById(`myul`);
    let li = document.createElement(`li`)
    li.classList.add(`list-group-item`,`d-flex`,`justify-content-center`,`justify-content-sm-between`, `align-items-center`);
    li.style.borderLeft = `10px solid red`;
    li.innerHTML = 
    `<span class="text-center font-weight-bold">${spentObject.spentSource}</span>
    <span class="text-center font-weight-bold">${spentObject.spentAmount}</span>
    <div class="imgcontainer bg-white p-1">
      <img src="./images/delete.png" alt="delete" title="delete item" style="height: 25px; min-width: 25px; cursor: pointer;" class="img-fluid">
    </div>`;
    ul.appendChild(li)
}