//fetch 기본
//axios 라이브러리

import "./App.css";
import useState from "usestate";
useEffect())=>{
  const [todoList, setTodoList] = useState("");
  
  fetch("http://localhost:5000/api/todo")
    .then((response) => response.json())
    .then((data) => setTodoList(data));
  }
  return (
    <>
      <h1>TODO LIST</h1>
    </>
  );
}

export default App;
