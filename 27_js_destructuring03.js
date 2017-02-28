// destructuring arrays []

const companies = [
	'Google',
	'Apple',
	'Uber'
];

const [ name, ...rest ] = companies;

console.log(
	name // Google
);

console.log(
	rest // ["Apple","Uber"]
);