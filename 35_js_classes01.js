class Car {
	// initialization here
	constructor({ title }) {
		this.title = title;
	}

	drive() {
		return 'vroom';
	}
}

class Toyota extends Car {
	// no destructuring when super is used
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

