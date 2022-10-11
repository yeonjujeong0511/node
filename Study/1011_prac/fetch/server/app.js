const express = require('express');
const app = express();
const cors = require('cors');

//익스프레스에서 바디에서 데이터를 꺼내쓰려면 body-parser가 필요함
// 바디 파싱을 하려면 아래 두 줄을 입력해야한다.
app.use(express.json()); // 파싱을 위한 어플리케이션
app.use(express.urlencoded({ extended: true })); // 파싱
app.use(cors());

const todoList = [
  {
    id: 1,
    text: '할일 1',
    done: false,
  },
];
app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/api/todo', (req, res) => {
  res.json(todoList);
});

// 바디에 데이터를 담아서 보낸다.
app.post('/api/todo', (req, res) => {
  const { text, done } = req.body;
  todoList.push({
    id: id++,
    text,
    done,
  });
  return res.send('success');
});

app.listen(5000, () => {
  console.log('server start!!');
});
