const addBtn = document.getElementById('addBtn');
const descInput = document.getElementById('desc');
const amountInput = document.getElementById('amount');
const expenseList = document.getElementById('expenseList');
const totalDisplay = document.getElementById('total');

let expenses = [];

addBtn.addEventListener('click', () => {
  const desc = descInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (!desc || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid expense and amount!");
    return;
  }

  expenses.push({ desc, amount });
  descInput.value = '';
  amountInput.value = '';
  renderExpenses();
});

function renderExpenses() {
  expenseList.innerHTML = '';
  let total = 0;

  expenses.forEach((exp, idx) => {
    total += exp.amount;
    const li = document.createElement('li');
    li.innerHTML = `
      ${exp.desc} - ₹${exp.amount.toFixed(2)}
      <button class="delete-btn" onclick="deleteExpense(${idx})">X</button>
    `;
    expenseList.appendChild(li);
  });

  totalDisplay.textContent = total.toFixed(2);
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  renderExpenses();
}
