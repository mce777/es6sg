const testingTeam = {
	lead: 'Amanda',
	tester: 'Bill',
	[Symbol.iterator]: function*() {
		yield this.lead;
		yield this.tester;
	}
};

const engineeringTeam = {
	size: 3,
	department: 'Engineering',
	lead: 'Jill',
	manager: 'Alex',
	engineer: 'Dave',
	testingTeam: testingTeam, //or just testingTeam
	[Symbol.iterator]: function*() {
		yield team.lead;
		yield team.manager;
		yield team.engineer;
		yield* team.testingTeam;
	}
};

const names = [];
for (let name of engineeringTeam) {
	names.push(name);
}

console.log(
	names
);


