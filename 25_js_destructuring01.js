var expense = {
	type: 'Business',
	amount: '$45 USD'
};

// ES5
// var type = expense.type;
// var amount = expense.amount;

// ES6
const { type } = expense;
const { amount } = expense;

// or just like this
// const { type, amount } = expense;

type;
amount;