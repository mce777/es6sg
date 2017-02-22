// default function arguments: setting default to 'GET'
function makeRequest(url, method = 'GET') {
	return method;
}

// method not specified, so returns the default 'GET'
makeRequest('google.com');

// here we are setting method to 'POST', so returns 'POST'
makeRequest('google.com', 'POST');

// here we are setting to null, so returns nothing
makeRequest('google.com', null);

// note, the defaults can also be a function