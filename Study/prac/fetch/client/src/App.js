import "./App.css";

// 서버에 데이터 요청
// fetch와 axios

function App() {
  fetch("http://localhost:3000/api/todo");
  return (
    <>
      <h1>TODO LIST</h1>
    </>
  );
}

export default App;
