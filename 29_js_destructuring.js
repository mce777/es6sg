const Google = {
	locations: ['Mountain View', 'New York', 'London']
};

// first, find 'locations' property (Google.locations),
// then first element, which can be called anything
const { locations: [ firstItem ] } = Google;

console.log(firstItem);
