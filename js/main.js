'use strict';

// targeting all the essential elements
let totalIncome = document.getElementById(`totalincomeinput`).value;
let totalExpense = document.getElementById(`totalexpenseinput`).value;
let currentBalance = document.getElementById(`currentbalanceinput`);

//current balance 
let currentBalanceValue = totalIncome - totalExpense;
currentBalance.value = currentBalanceValue;