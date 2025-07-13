const form = document.getElementById('expense-form');
const expense = document.getElementById('expense');
const category = document.getElementById('category');
const amount = document.getElementById('amount');
const expenseList = document.getElementById('expense-list');
const total = document.getElementById('total');
let totalExpense = 0;

form.addEventListener('submit', function(e) {
e.preventDefault();

if (expense.value && category.value && amount.value) {
const expenseItem = document.createElement('div');
expenseItem.classList.add('expense-item');
expenseItem.innerHTML = `<p>${expense.value} - ${category.value} - $${amount.value}</p>
<button>Remove</button>`;
expenseList.appendChild(expenseItem);

totalExpense += parseFloat(amount.value);
total.textContent = totalExpense;

expense.value = '';
category.value = '';
amount.value = '';
}
});

expenseList.addEventListener('click', function(e) {
if (e.target.tagName === 'BUTTON') {
const expenseItem = e.target.parentElement;
const expenseAmount = parseFloat(expenseItem.querySelector('p').textContent.split('$')[1]);
totalExpense -= expenseAmount;
total.textContent = totalExpense;
expenseItem.remove();
}
});
