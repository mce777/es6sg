const cars = [
	{ model: 'Buick', price: 'CHEAP' },
	{ model: 'Camero', price: 'expensive' }
];

const prices = cars.map(function(car) {
	return car.price;
});

console.log(prices);