var primaryColors = [
	{ color: 'red' },
	{ color: 'green' },
	{ color: 'blue'}
];

primaryColors.reduce(function(previous, primaryColor) {
	previous.push(primaryColor.color);
	return previous;
}, [] );