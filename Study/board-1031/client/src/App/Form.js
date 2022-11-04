import { useState } from 'react';

import styled from 'styled-components';
import PopupDom from './Popup';
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

const Form = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // 팝업창 상태 관리
  const openPostCode = () => {
    setIsPopupOpen(true);
  };
  const closePostCode = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
      <form>
        <Box>
          <input placeholder='우편번호' />
          <input placeholder='기본주소' />
          <input placeholder='상세주소' />
          {/* 버튼 클릭하면 팝업 생성 */}
          <button onClick={openPostCode}>주소검색</button>
          <div id='popupDom'>
            {isPopupOpen && (
              <PopupDom>
                <PopupPostCode onClose={closePostCode}></PopupPostCode>
              </PopupDom>
            )}
          </div>
        </Box>
      </form>
    </>
  );
};

export default Form;
