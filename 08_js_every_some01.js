const computers = [
	{ name: apple, ram: 32},
	{ name: compaq, ram: 4},
	{ name: acer, ram: 32},
]

// returns boolean false
computers.every(function(computer) {
	return computer.ram > 16;
});

// returns boolean true
computers.some(function(computer) {
	return computer.ram > 16;
});