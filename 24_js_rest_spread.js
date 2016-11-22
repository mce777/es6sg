// Refactor the following to use the only the rest operator

// original code
function unshift(array, a, b, c, d, e) {
	return [a, b, c, d, e].concat(array);
}

// the solution
function unshift(array, ...rest) {
	return [ ...rest, ...array ];
}

// 'array' is array, nothing too strange there
// [a,b,c,d,e] becomes '...rest'

