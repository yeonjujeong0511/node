import './App.css';

function App() {
  fetch('http://localhost:5000/api/todo')
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <>
      <h1>TODO LIST</h1>
    </>
  );
}

export default App;
