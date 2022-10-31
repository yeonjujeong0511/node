import { useEffect, useState } from "react";

// 서버에 데이터 요청
// fetch와 axios

function App() {
  const [todoList, setTodoList] = useState(null);
  // fetch는 리렌더링을 계속 실행시킨다.
  useEffect(() => {
    fetch("http://localhost:3000/api/todo")
      .then((response) => response.json())
      .then((data) => setTodoList(data));
  }, []);

  return (
    <>
      <h1>TODO LIST</h1>
      {todoList.map((todo) => {
        <div key={todo.id}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done ? "Y" : "N"}</div>
        </div>;
      })}
    </>
  );
}

export default App;
