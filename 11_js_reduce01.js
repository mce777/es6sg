const numbers = [10,20,30];

const finalSum = numbers.reduce(function(sum, number) {
	return sum + number;
},0);

console.log(finalSum);   // this returns 60

// the initial value of "sum" is 0
// note where it's set at the end
