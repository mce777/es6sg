function balancedParens(string) {
	// the ! enables the return of a bool (sec 7, lec 22)
	return !string.split("").reduce(function(previous, char) {
		if (previous < 0) { return previous }
		if (char === "(") { return ++previous; }
		if (char === ")") { return --previous; }
		return previous;
	}, 0);
}

balancedParens(")(");