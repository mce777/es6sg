const team = {
	members: ['Jane', 'Bill'],
	teamName: 'Super Squad',
	teamSummary: function() {
		// 'this' === team
		return this.members.map( (member) => {
			return `${member} is on team ${this.teamName}`;
		});
	}
}

team.teamSummary();

// note the different scopes of function keyword and fat-arrow fn

