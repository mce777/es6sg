var desks = [
	{ type: 'sitting' },
	{ type: 'standing' },
	{ type: 'sitting' },
	{ type: 'sitting' },
	{ type: 'standing' }
];

var deskTypes = desks.reduce(function(prev, desk) {

	return {
		sitting : ( desk.type === 'sitting' )  ? ++prev.sitting  : prev.sitting,
		standing: ( desk.type === 'standing' ) ? ++prev.standing : prev.standing
	}

}, { sitting: 0, standing: 0 });