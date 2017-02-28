const testingTeam = {
	lead: 'Amanda',
	tester: 'Bill'
};

const engineeringTeam = {
	size: 3,
	department: 'Engineering',
	lead: 'Jill',
	manager: 'Alex',
	engineer: 'Dave',
	testingTeam: testingTeam
};

function* TeamIterator(team) {
	yield team.lead;
	yield team.manager;
	yield team.engineer;

	// so the for/of loop can use 2 generators!
	const testingTeamGenerator = TestingTeamIterator(team.testingTeam);

	// through yield*, the iterator 'falls' into the next iterator
	// this is called 'generator delegation'
	yield* testingTeamGenerator;
}

function* TestingTeamIterator(team) {
	yield team.lead;
	yield team.tester;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
	names.push(name);
}

console.log(
	names
);


