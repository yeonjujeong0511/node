const express = require("express");
const app = express();
const db = require("./db");
const path = require("path");
// body parser 하려면 무조건 설정해야함
// ture -> qs, false -> querystring
app.use(express.urlencoded({ extended: false }));
// post 요청을 해석해서 req.body에 객체로넣어주는 기능
// app.use(express.json());

app.get("/", (req, res) => {
  // db.query("select * from user", (err, row, fil) => {
  //   if (err) throw err; // 이거 안쓰면 에러가 안떠서 에러를 띄운다
  //   res.send(row);
  // });
  res.sendFile(path.join(__dirname, "./index.html"));
  console.log(__dirname);
});


// /crete로 가면 form 안에 input데이터를 가져온다
app.post("/create", (req, res) => {
  const { name, email, password } = req.body;
  
// 가져온데이터를 토대로 데이터베이스에 접속해서 
// 쿼리문을 날린다.
  const SQL = `insert into user (name,email,password) values ('${name}','${email}','${password}')`;
  db.query(SQL, (err, row, fild) => {
    if (err) throw err;
    console.log(name, email, password);
    res.send("성공");
  });
});

app.listen(3000, () => {
  console.log("3000 서버 실행!");
});
