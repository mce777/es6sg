const companies = [
	{ name: 'Google', location: 'Mountain View' },
	{ name: 'Facebook', location: 'Menlo Park' },
	{ name: 'Uber', location: 'San Francisco' }
];

// destructuring object and array at the same time
// going from outside in: first [], then {}
// [] yields first array item
// {} yields 'companies.location'
const [{ location }] = companies;

console.log(location);