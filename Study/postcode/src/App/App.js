import { useState } from 'react';
import styled from 'styled-components';
import PopupPostCode from './PopupPostCode';

const Box = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  flex-direction: column;
  & > input:nth-child(1) {
    width: 250px;
    height: 40px;
  }

  & > input:nth-child(2) {
    width: 500px;
    height: 40px;
  }

  & > input:nth-child(3) {
    width: 500px;
    height: 40px;
  }
`;
function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // 팝업창 상태 관리
  const [zipcode, setZipcode] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');

  console.log(zipcode);
  console.log(address1);
  console.log(address2);
  return (
    <>
      <form>
        <Box>
          <input placeholder='우편번호' name='zipcode' value={zipcode} />
          <input placeholder='기본주소' name='address1' value={address1} />
          <input
            placeholder='상세주소'
            name='address2'
            onChange={(e) => {
              setAddress2(e.target.value);
            }}
          />
          {/* 버튼 클릭하면 팝업 생성 */}
          <button
            onClick={() => {
              setIsPopupOpen(true);
            }}
          >
            주소검색
          </button>
          <div>{isPopupOpen ? <PopupPostCode></PopupPostCode> : null}</div>
          <PopupPostCode
            zipcode={setZipcode}
            address1={setAddress1}
          ></PopupPostCode>
        </Box>
      </form>
    </>
  );
}

export default App;
