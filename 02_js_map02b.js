// given something like this
const paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];


function pluck(paintArray, property) {

	const paintBuckets = paintArray.map( function(paint){
		return paint[property];
	} );

	return paintBuckets;
}

// test
console.log(pluck(paints, 'color'));