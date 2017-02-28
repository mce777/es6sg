class Car {
	// initialization, stuff that's run when we call the NEW keyword
	// note also the destructuring
	constructor({ title }) {
		this.title = title;
	}
	// note object literal syntax
	drive() {
		return 'vroom';
	}
}

class Toyota extends Car {
	// NO destructuring when super() is used!
	constructor(options) {
		super(options); // calling Car.constructor() here
		this.color = options.color;
	}

	honk() {
		return 'beep';
	}
}

const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });
'------';
toyota.honk();
toyota;
'------';
toyota.drive();
