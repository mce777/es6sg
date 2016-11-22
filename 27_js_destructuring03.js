// arrays

const companies = [
	'Google',
	'Apple',
	'Uber'
];

const [ name, ...rest ] = companies;

name; // Google
rest; // ["Apple","Uber"]
