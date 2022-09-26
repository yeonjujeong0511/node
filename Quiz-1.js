// ! node.js 빌트인 모듈
const http = require('http');
// *  Node.js에서 HTTP를 통해 데이터를 전송할 수 있도록 하는모듈
const fs = require('fs');
const { rootCertificates } = require('tls');

// * Node.js에서 js 파일 시스템에 접근하는 모듈
// * 파일을 생성하거나 삭제하고 읽거나 쓸 수 있음

const setDomComponent = (tagName, content, attributeName, props) => {
  let getDataArr = [];
  // ! try : 코드 실행부
  // ! catch : 에러가 발생하면, 여기부터 실행 / ()안에 에러객체 / 에러가 없다면 실행 x
  // ! finally : 에러여부와 상관없이 try/catch 이후에 실행

  try {
    if (
      typeof tagName === 'string' &&
      typeof props === 'object' &&
      typeof attributeName === 'string'
      // tagName의 데이터타입이 string이고, props의 데이터타입이 object고,
      // atrributeName의 데이터타입이 string이면 아래 조건문 실행
    ) {
      if (getDataArr.length === 0) {
        // getDateArr.length가 0과 일치하면, 즉, 빈배열을 뜻 함
        let tempArray = [];
        // tempArray에 빈 배열 선언
        tempArray.push('<');
        // tempArray에 '<' 요소 추가
        // tempArray = ['<']
        tempArray.push(tagName + ' ' + attributeName + '="');
        // tempArray에 위에 요소 추가
        // \u00A0 : 공백
        // tempArray = ['<','tagName atrributeName="']
        for (const keys in props) {
          tempArray.push(' ' + keys + ':' + props[keys] + ';');
          // tempArray에 위에 요소 추가
          // tempArray = ['<','tagName atrributeName="',' key:props[keys];']
        }
        tempArray.push('">');
        // tempArray에 '>' 요소 추가
        // tempArray = ['<','tagName atrributeName="',' key:props[keys];','>']
        getDataArr.push(tempArray.join(''));
        // tempArray.join -> [<tagName atrributeName=" key:props[keys];>]
        // getDataArr = ['<tagName atrributeName=" key:props[keys];>']
      }
    }
    getDataArr.push(content);
    // getDataArr = ['<tagName atrributeName=" key:props[keys];>','content']
    getDataArr.push(`</${tagName}>`);
    // getDataArr = ['<tagName atrributeName=" key:props[keys];>','content','</tagName>']
  } catch (e) {
    console.error(e, 'need checking arguments data type');
    // 에러가나면, 콘솔에 위 내용을 입력
  } finally {
    return getDataArr.join('');
    // getDataArr = ['<tagName atrributeName=" key:props[keys];>content</tagName>']
  }
};

let dynamicElement = setDomComponent('div', '안뇽', 'style', {
  width: '100px',
  height: '100px',
  'background-color': 'cadetblue',
});
// dynamicElement = '<div style=" width: '100px'; height: '100px'; 'background-color': 'cadetblue';>hello</tagName>'

const mainPage = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  ${dynamicElement}
</body>
</html>
`;

const byteChecker = (string) => {
  return string.length * 2 + 'byte';
};

http
  .createServer((request, response) => {
    response.writeHead(200, { 'content-Type': 'text/html' });
    response.write(mainPage);
    response.end();
  })
  .listen(5555, () => {
    console.log(byteChecker(mainPage), 'sever listening on port 5555');
  });

// ! http 서버 객체를 만들어서 retrun하게 된다.
// ! 서버객체에 listen해서 portnumber를 서버로 열수 있다.
// ! localhost:5555번으로 브라우저 접속을 하면 mainpage의 내용이 보인다.
