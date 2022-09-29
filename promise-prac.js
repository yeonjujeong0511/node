const arrFunc = []; // 빈배열 선언

for (let i = 0; i < 5; i++) {
  // For문으로 func라는 함수를 5개 만듬
  const func = (resolve, reject) => {
    // Promise로 인스턴스화 하기위해 resolve를 매개변수로 심어줌
    setTimeout(() => {
      console.log(`처리시작${i}`);
      resolve(); // 처리완료
    }, 2000);
  };
  arrFunc.push(func); // 함수 5개를 빈 배열에 넣음
}

console.log(arrFunc); // [Function:func] * 5

let mkPromise = arrFunc.map((value) => new Promise(value));
// 배열에 담긴 함수각각을 map method를 써서 프로미스화한다음 배열로 반환

console.log(mkPromise); // Promise{<pending>}*5 // 비동기 상태 로직 처리 미완료

Promise.all(mkPromise).then(() => {
  console.log('병렬처리완료');
});
//Promose 5개 병럴처리 완료후 console로 병렬처리완료 찍음
