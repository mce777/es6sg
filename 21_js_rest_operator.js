function addNumbers(...numbers) {
	return numbers.reduce((sum, number) => {
		return sum + number;
	}, 0);
}

addNumbers(1,2,3,4,5);  // 15

// rest 'flattens'