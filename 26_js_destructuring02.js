const savedFile = {
	extension: '.jpg',
	name: 'repost',
	size: 14040
};

// The old way. Note the 'file.whatever'
// function fileSummary(file) {
// 	return `The file ${file.name}${file.extension} is ${file.size} big`;
// }

function fileSummary({ name, extension, size }) {
	return `The file ${name} '${extension}' is ${size} big`;
}

console.log(
	fileSummary(savedFile)
);