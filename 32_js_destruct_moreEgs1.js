const profile = {
	title: 'Engineer',
	department: 'Engineering'
};

// via destructuring we are getting these two properties
function isEngineer({ title, department }) {
	return title === 'Engineer' && department === 'Engineering';
}