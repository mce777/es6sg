function findWhere(array, criteria) {
	var property = Object.keys(criteria);
	var objToFind = array.find((item) => {
		return item[property] === criteria[property];
	});
	return objToFind;
}