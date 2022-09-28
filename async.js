// let first = setTimeout(() => {
//   console.log('first');
// }, 3000);
// let second = setTimeout(() => {
//   console.log('first');
// }, 2000);
// let third = setTimeout(() => {
//   console.log('first');
// }, 1000);

let first = setTimeout(() => {
  console.log('first');
  let second = setTimeout(() => {
    console.log('second');
    let third = setTimeout(() => {
      console.log('third');
      let fourht = setTimeout(() => {
        console.log('fourth');
        let fifth = setTimeout(() => {
          console.log('fifth');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 3000);
}, 2000);

let test = new Promise(function (resolve, reject) {
  console.log(typeof resolve);
  console.log(typeof reject);
  console.dir(resolve);
});

// const promise = new Promise((resolve,reject)=>{
//   // Promise 함수의 콜백 함수 내부에서 비동기 처리를 수행
//   if(/* 비동기 처리 성공 */) {
//     resolve('result')
//   } else {/* 비동기 처리 실패 */
//     reject('failure reason')
//   }
// })
// 비동기 처리가 성공하면 콜백 함수의 인수를 전달받은 resolve 함수를 호출
// 실패하면, reject 함수를 호출

console.dir(test); // promise(<pending>) // 보류
