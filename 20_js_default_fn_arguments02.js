function User(id) {
	this.id = id;
}

function generateId() {
	return Math.floor(Math.random() * 99999);
}

function createAdminUser(user = new User(generateId())) {
	user.admin = true;
	return user;
}

// creates an admin user from scratch
console.log(
	createAdminUser()
);

// here we already have a user, so we override default
const xuser = new User(generateId());
console.log(
	createAdminUser(xuser)
);

