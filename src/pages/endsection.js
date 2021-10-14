import React from "react";
import styled from "styled-components";
import img from "../assets/images/end.svg";
import Footer from "../components/footer";
function EndSection() {
  return (
    <div>
      <EndContainer>
        <UIText size={"2.2em"}>Have a Project in mind?</UIText>
        <CustomInput type="text" placeholder="What's your Email?" />
        <FooterWrapper>
          <Footer></Footer>
        </FooterWrapper>
      </EndContainer>
    </div>
  );
}

export default EndSection;
const CustomInput = styled.input`
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  border: none;
  outline: none;
  font-size: 18px;
  color: #e0ebff;
  background-color: transparent;
  margin-top: 24px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #999999;
  }
  :-ms-input-placeholder {
    color: #999999;
  }
`;
const EndContainer = styled.div`
  min-height: 100vh;
  background: url(${img}) #210837;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const UIText = styled.div`
  color: #e0ebff;
  font-size: ${(props) => props.size};
`;

const FooterWrapper = styled.h3`
  position: fixed;
  bottom: 0;
  margin-bottom: 30px;
`;
