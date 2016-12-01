function* shopping() {
	// stuff on the sidewalk

	// walking down the sidewalk

	// go into the store with cash
	// yield is sort of like return
	const stuffFromStore = yield 'cash';

	// walking to laundry place
	const cleanClothes = yield 'laundry';

	// walking back home
	return [stuffFromStore, cleanClothes];
}

// stuff in the store (no code invoked yet)
const gen = shopping();

gen.next(); // leaving our house
gen.next('groceries'); // leaving the store with groceries
gen.next('clean clothes');

// for every yield statement we need a generator