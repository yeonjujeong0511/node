const { timeEnd } = require('console');

console.log('work test');

process.stdin.setEncoding('utf8');
// * 해당 메서드를 선언하지 않으면 버퍼(buffer)형식의 데이터를 받습니다.

// * event
// * stdin : 표준 입력(standard input) // 입력할께
process.stdin.on('data', function (data) {
  // * 이벤트 등록
  console.time('monitor'); // * 이벤트가 시작되자마자 시간을 잽니다.
  console.log('방금 입력받았습니다.');
  console.log('당신이 입력한 값은 혹시 이것입니까? : ', data);
  console.log('지금 문자열변수에 입력받은 값을 넣었습니다.');
  console.timeEnd('monitor'); // * 종료직전 걸린 시간을 콘솔에 기록을 남겨줍니다.
  process.exit(); // 입력이벤트를 종료합니다.
});
