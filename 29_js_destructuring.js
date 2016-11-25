const Google = {
	locations: ['Mountain View', 'New York', 'London']
};

// first, find 'locations' property (Google.locations),
// then first element, which has to be called 'locations'
const { locations: [ locations ] } = Google;
locations; // Mountain View
