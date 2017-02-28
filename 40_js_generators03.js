const engineeringTeam = {
	size: 3,
	department: 'Engineering',
	lead: 'Jill',
	manager: 'Alex',
	engineer: 'Dave'
};

// see, we're only iterating over the people
// despite having a bunch of other stuff in the object
function* TeamIterator(team) {
	yield team.lead;
	yield team.manager;
	yield team.engineer;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
	names.push(name);
}

console.log(
	names
);