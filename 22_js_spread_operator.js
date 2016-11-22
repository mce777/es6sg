const defaultColors = ['red', 'green'];
const userFavorites = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

//the old concat way
defaultColors.concat(userFavorites);

// the new ... way (spread operator)
[ ...defaultColors, ...userFavorites, ...fallColors ];

// another example, showing the flexibility of ...
[ 'pink', ...defaultColors, ...userFavorites, ...fallColors ];
