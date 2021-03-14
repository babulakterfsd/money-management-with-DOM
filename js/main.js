'use strict';

let list = [];
let obj = {
     source: ``,
     amount: 0,
     inputFrom: ``
}

//current Balance
let currentBalanceElement = document.getElementById(`currentbalance`);
let ul = document.getElementById(`myul`);

//Income 
let totalIncomeOutput = document.getElementById(`totalincome`);
let incomeInputForm = document.getElementById(`addincomeform`);
let incomeSourceInput = document.getElementById(`sourceofincome`);
let incomeAmountInput = document.getElementById(`amountofincome`);

incomeSourceInput.addEventListener(`keyup`,function(e) {
    obj.source = e.target.value;
    obj.inputFrom = `income`;
})
incomeAmountInput.addEventListener(`keyup`,function(e) {
    let income = e.target.value;
    obj.amount = +income;
})
incomeInputForm.addEventListener(`submit`,function(e) {
    e.preventDefault();
    if(obj.amount <= 0 || obj.amount == undefined || obj.source == `` ) {
        alert(`Income can't be negative or empty or source is empty`)
    } else {
        let previousTotalIncome = +totalIncomeOutput.innerText;
        let previousCurrentBalance = +currentBalanceElement.innerText;

        totalIncomeOutput.innerText = previousTotalIncome + obj.amount;
        currentBalanceElement.innerText = previousCurrentBalance + obj.amount;
    }
    list.push(JSON.parse(JSON.stringify(obj)))
    createLi(list);
    e.target.reset();
    removeLi()
})


//Spent
let totalSpentOutput = document.getElementById(`totalspent`);
let spentOutputForm = document.getElementById(`subexpenseform`);
let spentSourceInput = document.getElementById(`subexpensesrcinput`);
let spentAmountInput = document.getElementById(`subexpenseamountinput`);

spentSourceInput.addEventListener(`keyup`,function(e) {
    obj.source = e.target.value;
    obj.inputFrom = `spent`
})
spentAmountInput.addEventListener(`keyup`,function(e) {
    let spent = e.target.value;
    obj.amount = +spent;
})
spentOutputForm.addEventListener(`submit`,function(e) {
    e.preventDefault();
    if(obj.amount <= 0 || obj.amount == undefined || obj.source == ``) {
        alert(`spent value can't be 0 or undefined or spent source is undefined`)
    } else {
        let previouSpent = +totalSpentOutput.innerText;
        totalSpentOutput.innerText = previouSpent + obj.amount;

        currentBalanceElement.innerText = totalIncomeOutput.innerText - totalSpentOutput.innerText;
    }
    list.push(JSON.parse(JSON.stringify(obj)))
    createLi(list);
    e.target.reset();
    removeLi()
})

//create Li
function createLi(arr) {
    ul.innerHTML = ``;
    arr.forEach(data => {
        let li = document.createElement(`li`);
        li.classList.add(`list-group-item`,`d-flex`,`justify-content-center`,`justify-content-sm-between`, `align-items-center`);
        li.innerHTML = 
         `<span class="text-center font-weight-bold">${data.source}</span>
         <span class="text-center font-weight-bold">${data.amount}</span>
         <div class="imgcontainer bg-white p-1">
         <img src="./images/delete.png" alt="delete" title="delete item" style="height: 25px; min-width: 25px; cursor: pointer;" class="img-fluid remover">
         </div>`;
         if(data.inputFrom == `income`) {
             li.classList.add(`plus`)
         } else if(data.inputFrom == `spent`) {
             li.classList.add(`minus`)
         }
        ul.appendChild(li)
    })
}

//remove LI
function removeLi() {
    let target = document.getElementsByClassName(`remover`);
    if(target.length > 0) {
        for(let i = 0; i < target.length; i++) {
            target[i].addEventListener(`click`, function(e) {
                let rmv = e.target.parentElement.parentElement;
                rmv.remove()
            })
        }
    }
}