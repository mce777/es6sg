function reject(array, iteratorFunction) {
	return array.filter(function(item) {
		return !iteratorFunction(item);
	})
}