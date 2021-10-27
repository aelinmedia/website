import React from "react";
import styled from "styled-components";
import img from "../assets/images/end.svg";
import Footer from "../components/footer";
function EndSection() {
  return (
    <div>
      <EndContainer>
        <div></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <UIText size={"2.2em"} color={"#e0ebff"}>
            Have a Project in mind?
          </UIText>
          <a href="mailto:">
            <UIText size={"1.1em"} color={"#999999"}>
              📧 support@aelinmedia.com
            </UIText>
          </a>
          {/* <CustomInput type="text" placeholder="What's your Email?" /> */}
        </div>
        <FooterWrapper>
          <Footer></Footer>
        </FooterWrapper>
      </EndContainer>
    </div>
  );
}

export default EndSection;
// const CustomInput = styled.input`
//   border-top-style: hidden;
//   border-right-style: hidden;
//   border-left-style: hidden;
//   border-bottom-style: groove;
//   border: none;
//   outline: none;
//   font-size: 18px;
//   color: #e0ebff;
//   background-color: transparent;
//   margin-top: 24px;
//   ::placeholder,
//   ::-webkit-input-placeholder {
//     color: #999999;
//     font-family: "MontRegular";
//   }
//   :-ms-input-placeholder {
//     color: #999999;
//   }
// `;
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
  justify-content: space-between;
  align-items: center;
`;
const UIText = styled.div`
  text-align: center;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  margin-bottom: 14px;
  @media screen and (max-width: 480px) {
  }
`;

const FooterWrapper = styled.h3`
  max-width: 90vw;
  margin-bottom: 20px;
`;
