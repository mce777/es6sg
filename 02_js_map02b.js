// given something like this
const paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];


function pluck(paintArray, property) {

	const paintBuckets = paintArray.map( function(paint){
		return paint[property];
	} );

	return paintBuckets;
}

// this works too :)
// function pluck(paintArray, property) {
//
// 	return paintArray.map( function(paint){
// 		return paint[property];
// 	} );
//
// }

// test
console.log(pluck(paints, 'color'));