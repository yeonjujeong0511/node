const test = new Promise((resolve, reject) => {
  resolve(1);
});

test.then((value) => console.log(value));

// 결과로도 무언가 할 수 있다.
// resolve -> then
// reject -> catch
//

// const number = (number) => {
//   return new Promise((resolve,reject)=>{
//     if(number >= 5){
//       reject("오류발생";)
//     }
//   })
// }

//박스이동 t
// 행동1.then()
// 행동 1 = ()

//Promise.all 한번에 결과값을 내보낸다  모든 비동기 처리가 끝날때까지 기다렸다가 한번에 값을 전달 (오류나면 모두 정지)
//Promise.allSettled 모든 프로미스 객체의 현재 상태와 데이터, 오류를 객체로 보여줌
//promise.race 제일 먼저 완료된 것만 보인다.

//pednding  프로미스 객체 만들고 대기중
//fulfiied
