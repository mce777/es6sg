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

gen.next(); // 1. leaving our house
// 2. walked into the store
gen.next('groceries'); // leaving the store with groceries
gen.next('clean clothes');

// if this example was confusing, check out the next one (super simple).