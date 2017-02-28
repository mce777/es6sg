const expense = {
	type: 'Business',
	amount: '$45 USD'
};

// the ES5 way
// var type = expense.type;
// var amount = expense.amount;

// the ES6 way
const { type } = expense;
const { amount } = expense;

// or even simpler, just like this
// const { type, amount } = expense;

console.log(type);
console.log(amount);