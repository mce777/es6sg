// combining Rest and Spread

// here, ...items is 'Rest', combining into one array
function validateShoppingList(...items) {
	if (items.indexOf('milk') < 0) {
		//here, spread, adding to
		return [ 'milk', ...items ];
	}
	return items;
}

// the following returns the list, + milk because we added that above
validateShoppingList('oranges', 'bread', 'eggs');
