const promise = new Promise((resolve, reject) => {
  const x = 'geekforgeek';
  const y = 'geeksforgeeks';

  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(() => {
    console.log('Success, You are a GEEK');
  })
  .catch(() => {
    console.log('Some error has occurred');
  });
