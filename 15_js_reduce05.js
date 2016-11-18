function unique(array) {
	return array.reduce(function(acc, number) {
		var numberInAcc = acc.find(function(item) { return item === number } );
		if (numberInAcc === undefined) {
			acc.push(number);
		}
		return acc;
	}, []);
}