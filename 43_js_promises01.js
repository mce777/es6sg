// ajax requests are a common use of promises
// but here is a super simple example
promise = new Promise((resolve, reject) => {
  reject();
});

promise
  .then(()=> console.log('finally finished'))
  .then(()=> console.log('I was also ran'))
  .catch(()=> console.log('Ah, snap'));
