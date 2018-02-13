let bpromise = new Promise( (resolve, reject) => {
	setTimeout(() => {
		resolve();
	}, 3000);
});

// after promise resolves, the callback .then is executed
bpromise
	.then(()=> console.log('finally finished'))
	.then(()=> console.log('glad you decided to wait'))
	.catch(()=> console.log('Ah, snap'));