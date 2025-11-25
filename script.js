const balance = document.getElementById('balance');
const moneyPlus = document.getElementById('money_plus');
const moneyMinus = document.getElementById('money_minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

// Lê do LocalStorage OU usa array vazio se não houver nada
const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));

// Se houver dados salvos, usa eles. Senão, array vazio.
let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

function addTransaction(e) {
  e.preventDefault();

  // Valida: Se texto OU valor estiverem vazios, alerte o usuário.
  if (text.value.trim() === '' || amount.value.trim() === '') {
    alert('Por favor, adicione uma descrição e um valor');
    return;
  }

  const transaction = {
    id: generateID(), // função simples que retorna Math.random()
    text: text.value,
    amount: +amount.value // O '+' converte string para número
  }

  // // atualiza UI + storage
  transactions.push(transaction);

  addTransactionDOM(transaction); // Adiciona na lista visual
  updateValues();                 // Atualiza os saldos
  updateLocalStorage();           // Salva

  // limpa inputs
  text.value = '';
  amount.value = '';

};

// Gera ID simples
function generateID(){
return Math.floor(Math.random()*100000000);
}

// Atualiza localStorage sempre que transactions mudar
function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Formata número para moeda BRL
function formatBRL(value){
return (value >= 0 ? '+ ' : '- ') + 'R$ ' + Math.abs(value).toFixed(2);
}

// Objetivo: Recebe UM objeto de transação e cria o HTML na lista.
function addTransactionDOM(transaction) {
  // Determina o sinal e a classe
  const sign = transaction.amount < 0 ? '-' : '+';
  const itemClass = transaction.amount < 0 ? 'minus' : 'plus';

  const item = document.createElement('li');
  item.classList.add(itemClass);

  item.innerHTML = `
    <span class="text">${transaction.text}</span>
    <span class="amount">${formatBRL(transaction.amount)}</span>

     <!-- onclick chama a função global removeTransaction -->
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">X</button>
  `;

  list.appendChild(item);

}

// Objetivo: Atualiza os valores de Saldo, Receita e Despesa
function updateValues() {
  
  // Cria um array só com os valores
  const amounts = transactions.map(t => t.amount);

  // Usa .reduce() para somar tudo - saldo total
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  // Receita: Filtra os maiores que zero e soma - (apenas positivos)
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

  //  Despesas: Filtre os menores que zero e some - (apenas negativos)
  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

  // Atualiza o DOM
  balance.innerHTML = `R$ ${total}`;
  moneyPlus.innerHTML = `+ R$ ${income}`;
  moneyMinus.innerHTML = `- R$ ${expense}`;
}

// Objetivo: Remover um item pelo ID.
function removeTransaction(id) {
  
  // Atualiza o array transactions filtrando ele
  transactions = transactions.filter(item => item.id !== id);
  updateLocalStorage();
  init(); // Re-renderiza tudo para atualizar a lista visualmente
}

function init() {
  list.innerHTML = '';
  transactions.forEach(addTransactionDOM); // Recria a lista baseada no estado
  updateValues();
}

// evento do form
form.addEventListener('submit', addTransaction);

// inicializa
init();
