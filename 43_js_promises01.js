// 3 states of promises: unresolved, resolved, rejected
// ajax requests are a common use of promises
// but here is a super simple example

let apromise = new Promise( (resolve, reject) => {
  reject();
});

// after promise resolves, the callback .then is executed
apromise
  .then(()=> console.log('finally finished'))
  .then(()=> console.log('I was also ran'))
  .catch(()=> console.log('Ah, snap'));


