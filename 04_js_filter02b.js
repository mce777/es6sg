const post = { id: 4, title: 'New post for you'};

const comments = [
	{ postId: 4, content: 'awesome post' },
	{ postId: 3, content: 'it was ok' },
	{ postId: 4, content: 'neat' }
];

function commentsForPost() {
	return comments.filter(function(comment) {
		return comment.postId === post.id;
	});
}

console.log(commentsForPost(post, comments));