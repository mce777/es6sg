// note the different scopes of function keyword and fat-arrow fn
// note this.teamName. Arrow functions use 'lexical this' which makes 'this'
// equal to the surrounding context ('team' in this case).
// prior to es6 you would have used 'bind' or something like that.

const team = {
	members: ['Jane', 'Bill'],
	teamName: 'Super Squad',
	teamSummary: function() {
		// 'this' === team
		return this.members.map( (member) => {
			return `${member} is on team ${this.teamName}`;
		});
	}
};

console.log(
	team.teamSummary()
);


