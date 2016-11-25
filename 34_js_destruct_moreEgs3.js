const numbers = [1, 2, 3];

function double([number, ...rest], arr = []) {

	if (!number && !rest.length) {
		return arr
	}

	return double(rest, [ ...arr, number * 2])
}

// output [2,4,6]