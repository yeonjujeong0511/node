import DaumPostcode from 'react-daum-postcode';

const PopupPostCode = (props) => {
  const postCodeStyle = {
    display: 'block',
    position: 'relative',
    top: '0%',
    width: '400px',
    height: '400px',
    padding: '7px',
  };
  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    console.log(data);
    console.log(fullAddress);
    console.log(data.zonecode);
    props.onClose();
  };
  return (
    <>
      <DaumPostcode
        style={postCodeStyle}
        onComplete={handlePostCode}
      ></DaumPostcode>
    </>
  );
};

export default PopupPostCode;
