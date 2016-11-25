// incoming data of an API, an array of arrays
const points = [
	[4,5],
	[10,1],
	[0,40]
];

// return an array of objects with {x,y}
// cuz that's what was needed in this example
points.map(([ x, y ]) => {
	return { x, y };
});
