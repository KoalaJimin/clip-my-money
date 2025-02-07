import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  text-align: center;
  background-color: #f5f0e4;
  -ms-overflow-style: none;
  font-family: "Inter", sans-serif;

  /* 미디어 쿼리 적용 */
  @media (hover: hover) {
    width: 390px;
    margin: 0 auto;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Topbar = styled.div`
  background-color: #55877e;
  height: 46px;
  border-bottom: 1px solid #b3b3b3;
  box-sizing: border-box;
  padding-top: 13px;
`;

const Backbutton = styled.div`
  position: absolute;
  left: 13px;
`;

const Toptitle = styled.div`
  color: #b3dbd4;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-top: 70px;
`;

const Bottomtitle = styled.div`
  color: #b3dbd4;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const Mainimg = styled.div`
  margin: 0 auto;
  width: 225px;
  height: 206px;
`;

const Box1 = styled.div`
  border-radius: 6px;
  background: #b3dbd4;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 80px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  padding: 18px 95px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Logintext = styled.div`
  display: flex;
  width: 70px;
  height: 20px;
  flex-direction: column;
  justify-content: center;

  color: #214a43;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Box2 = styled.div`
  border-radius: 6px;
  background: #b3dbd4;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 80px;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  padding: 18px 95px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Jointext = styled.div`
  display: flex;
  width: 70px;
  height: 20px;
  flex-direction: column;
  justify-content: center;

  color: #214a43;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Box3 = styled.div`
  border-radius: 6px;
  background: #b3dbd4;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 80px;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  padding: 18px 95px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Nonmemblogintext = styled.div`
  display: flex;
  width: 80px;
  height: 20px;
  flex-direction: column;
  justify-content: center;

  color: #214a43;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Firstpage = () => {
  const navigate = useNavigate();
  const navigateTologinpage = () => {
    navigate("/login");
  };

  const navigateTosignup = () => {
    navigate("/signup");
  };

  const navigateTonosign = () => {
    navigate("/NoSign");
  };

  const onClickBtn = () => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };

  return (
    <Container>
      <Topbar>
        <Backbutton onClick={onClickBtn}>
          <img src={`${process.env.PUBLIC_URL}/images/back.png`} alt="back" />
        </Backbutton>
      </Topbar>
      <Toptitle>SHUT UP AND</Toptitle>
      <Mainimg>
        <img
          src={`${process.env.PUBLIC_URL}/images/mainimg.png`}
          alt="mainimage"
        />
      </Mainimg>
      <Bottomtitle>CLIP MY MONEY</Bottomtitle>

      <Box1 onClick={navigateTologinpage}>
        <Logintext>로그인</Logintext>
      </Box1>
      <Box2 onClick={navigateTosignup}>
        <Jointext>회원가입</Jointext>
      </Box2>
      <Box3 onClick={navigateTonosign}>
        <Nonmemblogintext>비회원 로그인</Nonmemblogintext>
      </Box3>
    </Container>
  );
};
export default Firstpage;
