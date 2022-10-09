const express = require("express");
const app = express();

// body parser
app.use(express.json()); // 파싱을 위한 어플리케이션?
app.use(express.urlencoded({ extended: true })); // 파싱

let id = 2;
const todoList = [
  {
    id: 1,
    text: "할일 1",
    done: false,
  },
];

app.get("/api/todo", (req, res) => {
  res.json(todoList);
});

// body에 데이터를 담아서 보낼 예정
// req.body에 데이터가 들어갈 것이다.
// 익스프레스에서 바디에서 데이터를 꺼내 쓰려면,
// body parser를 필요로 한다.
app.post("/api/todo", (req, res) => {
  const { text, done } = req.body;
  todoList.push({
    id: id++,
    text,
    done,
  });
  return res.send("success ");
});

app.listen(3000, () => {
  console.log("server start!!!");
});
