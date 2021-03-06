// ... spreads them out, so to speak

const defaultColors = ['red', 'green'];
const userFavorites = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

//the old concat way
defaultColors.concat(userFavorites);

// the new ... way (SPREAD operator)
console.log(
	[ ...defaultColors, ...userFavorites, ...fallColors ]
);

// another example, showing the flexibility of ...
console.log(
	[ 'pink', ...defaultColors, ...userFavorites, ...fallColors ]
);