function* colors() {
	yield 'red';
	yield 'blue';
	yield 'green';
}

const gen = colors();

gen.next(); // red, done:false
gen.next(); // blue, done:false
gen.next(); // green, done:false
gen.next(); // done:true

// for-of loops work well with generators
const myColors = [];
for (let color of colors()) {
	myColors.push(color);
}

console.log(
	myColors
);

// we can use generators to iterate through any data structure that we want
