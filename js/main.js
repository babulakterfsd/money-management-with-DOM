'use strict';

// cuurent balance
let currentbalance = document.getElementById(`currentbalance`);
let currentamount = Number(currentbalance.innerText)

//add income
let incomevalue;
let totalincome = document.getElementById(`totalincome`);
let addincomeform = document.getElementById(`addincomeform`);
let sourceofincome = document.getElementById(`sourceofincome`);
let amountofincome = document.getElementById(`amountofincome`);
amountofincome.addEventListener(`keyup`,function(e) {
    incomevalue = Number(e.target.value);
})

addincomeform.addEventListener(`submit`,function(e) {
    e.preventDefault();
    if(incomevalue < 0) {
        alert(`Income can't be negative`)
    } else {
        let previousvalueoftotal = +totalincome.innerText;
        let currentBalance = +currentbalance.innerText;

        totalincome.innerText = previousvalueoftotal + incomevalue;
        currentbalance.innerText = currentBalance + incomevalue;
    }
    e.target.reset()
})

//subtract expense
let totalspent = document.getElementById(`totalspent`);
let expenseform = document.getElementById(`subexpenseform`);
let spentamount = document.getElementById(`subexpenseamountinput`);
let spend;
spentamount.addEventListener(`keyup`,function(e) {
    spend = Number(e.target.value);
})
expenseform.addEventListener(`submit`,function(e) {
    e.preventDefault();
    if(spend <= 0) {
        alert(`Value equal or smaller than 0 cam't be a spent value`)
    } else {
        let previouspent = Number(totalspent.innerText);
        totalspent.innerText = previouspent + spend;
        
        currentbalance.innerText = totalincome.innerText - totalspent.innerText
    }
    e.target.reset();
})