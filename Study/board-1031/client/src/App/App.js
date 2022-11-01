import styled from 'styled-components';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import './App.css';
import { useEffect, useState } from 'react';
import ReactHtmlParser from 'html-react-parser';
import axios from 'axios';

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div:nth-child(2) {
    width: 500px;
    min-height: 200px;
    border: 1px solid;
    text-align: center;
  }

  & > div:nth-child(3) {
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    & > input {
      width: 250px;
      height: 70px;
      margin: 10px;
      border-radius: 5px;
    }
  }
  & > button {
    width: 60px;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

function App() {
  const [musicContent, setMusicContent] = useState({
    title: '',
    content: '',
  });
  const [viewContent, setViewContent] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/insert').then((response) => {
      setViewContent(response.data);
    });
  }, [viewContent]);

  const submitReview = () => {
    axios
      .post('http://localhost:8080/api/insert', {
        title: musicContent.title,
        content: musicContent.content,
      })
      .then(() => {
        alert('등록 완료');
      });
  };

  const getValue = (e) => {
    const { name, value } = e.target;
    setMusicContent({
      ...musicContent,
      [name]: value,
    });
    console.log(musicContent);
  };
  // musicContent의 내용을 복사해서 그 안에
  // name이라는 이름의 키 값을 value로 바꾸어 저장한다는 의미
  return (
    <MainBox>
      <h1>Music Review</h1>
      <div>
        {viewContent.map((element) => (
          <div>
            <h2>{element.title}</h2>
            <div>{ReactHtmlParser(element.content)}</div>
          </div>
        ))}
      </div>
      <div>
        <input
          type='text'
          placeholder='제목'
          onChange={getValue}
          name='title'
        />
        <CKEditor
          editor={ClassicEditor}
          //placeholder='내용을 입력하세요'
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setMusicContent({
              ...musicContent,
              content: data,
            });
            console.log(musicContent);
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <button onClick={submitReview}>등록</button>
    </MainBox>
  );
}

export default App;
