const numbers = [10, 20, 30];

function reject(array, iteratorFunction) {
	return array.filter(function(item) {
		return !iteratorFunction(item);
	})
}

const lessThanFifteen = reject(numbers, function(number){
	return number > 15;
});

console.log(lessThanFifteen);