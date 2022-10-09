import axios from "axios";
import { useEffect, useState } from "react";
const Board = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get("http://localhost:5000/");
        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  if (data === undefined) {
    return <h1>로딩중입니다</h1>;
  }

  return (
    <>
      <h1>게시판</h1>
      <form>
        <div>
          <label>이름 : </label>
          <input type="text" name="name"></input>
        </div>
        <div>
          <label>비밀번호 : </label>
          <input type="pasword" name="password"></input>
        </div>
        <div>
          <label>제목 : </label>
          <input type="text" name="title"></input>
        </div>
        <div>
          <label>내용 : </label>
          <input type="text" name="content"></input>
        </div>
        <div>
          <button type="submit">글쓰기</button>
        </div>
      </form>
    </>
  );
};

export default Board;
