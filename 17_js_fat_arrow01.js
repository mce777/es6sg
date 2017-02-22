// 'returns' are implicit IF on single line like this
// Multiline? Then you need 'return' keyword

const add = (a, b) => a + b;

add(1,2); // 3

// you can omit parenthesis if there's just one argument

const doubler = number => number * 2;

doubler(4); //8