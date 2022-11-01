// fetch 리액트 기본 제공
// axios 다운이 필요한 라이브러리

import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

const SERVER_URL = "http://localhost:5000/api/todo";
function App() {
  const [todoList, setTodoList] = useState(null);
  const fetchData = async () => {
    const response = await axios.get("http://localhost:5000/api/todo");
    setTodoList(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // 다음 응답값은 todolist 데이터 이다.

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    await axios.post(SERVER_URL, { text, done });
    fetchData();
    // fetch('http://localhost:5000/api/todo', {
    //   method: 'POST',
    //   headers: {
    //     'content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     text,
    //     done,
    //   }),
    // json이라고 알려줘야 파싱을 해준다.
    // }).then(() => {
    //   fetchData();
    // });
  };

  // 자주 사용하는 코드는 커스텀 훅으로 빼서 쓸 수 있다.

  return (
    <>
      <h1>TODO LIST</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="text" />
        <input name="done" type="checkbox"></input>
        <input type="submit" value="추가" />
      </form>
      {todoList?.map((todo) => (
        <div key={todo.id} style={{ display: "flex" }}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done ? "Y" : "N"}</div>
        </div>
      ))}
    </>
  );
}

export default App;

// server에서 응답이 오면 코드를 실행시킨다.
// react는 상태를 바꾸면 리렌더링이 일어난다.
// fetch를 만나면 서버에 요청을 보낸다, 서버에 응답이 오면 setTodoList 상태 변화
// 리렌더링이 반복해서 나타난다.
// 계속 리렌더링 되는이유는 fetch가 그렇게 작성되어있기때문

// 처음 컴포넌트 렌더링 될때만 실행됬으면 좋겠다 -> useEffect
