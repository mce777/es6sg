// good example of destructuring

// if you've destructured, then the order is not important
function signup({ username, password, email, dateOfBirth, city }) {
	//code to create user, etc.
}

// create user here
const user1 = {
	username: 'myname',
	password: 'mypassword',
	email: 'myemail@example.com',
	dateOfBirth: '1/1/1990',
	city: 'New York'
};

// simple call here
signup(user1);

// with the old way, you had to do it like this (and in the exact order)
// signup('myname', 'mypassword', 'myemail@example.com', '1/1/1990', 'New York');