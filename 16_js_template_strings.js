// "template strings" (aka "template literals")
// a nicer way of joining together javascript variables into a string

function getDate() {
	const year = new Date().getFullYear();

	// note `back ticks` and ${}
	return `the year is ${year}`;
}

getDate();
