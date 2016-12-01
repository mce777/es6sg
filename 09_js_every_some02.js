function field(value) {
	this.value = value;
}

field.prototype.validate = function () {
	return this.value.length > 0;
}

//example data
var username = new field("user1");
var password = new field("pswd");
var birthdate = new field("10/10/2016");

var fields = [username, password, birthdate];

fields.every(function(field) {
	return field.validate();
})