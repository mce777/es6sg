// rest operator gathers unknown number of arguments

function addNumbers(...numbers) {
	return numbers.reduce((sum, number) => {
		return sum + number;
	}, 0);
}

// we can add numbers without having to refactor above fn
console.log(
	addNumbers(1,2,3,4,5)   // 15
);
