function createBookShop(inventory) {
	return {
		// same as inventory: inventory (ie when 'key' and 'value' the same)
		inventory,
		// same as inventoryValue: function() { ...etc
		inventoryValue() {
			return this.inventory.reduce((total, book) => total + book.price, 0);
		},
		priceForTitle(title) {
			return this.inventory.find(book => book.title === title).price;
		}
	};
}

const inventory = [
	{ title: 'Harry Potter', price: 10 },
	{ title: 'Eloquent Javascript', price: 15 }
];

const bookshop = createBookShop(inventory);

bookshop.inventoryValue();  // 25
bookshop.priceForTitle('Harry Potter'); //10

// you're saving a few characters here