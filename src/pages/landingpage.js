import React from "react";
import styled from "styled-components";
import Navbar from "../components/navbar";
import mainImg from "../assets/images/main-illustration.png";
function mainPage() {
  return (
    <MainPageWrapper>
      <Navbar />
      <IntroWrapper>
        <UIText size="1.2rem" color="#00AAF2" font="MontSemiBold" space="4px">
          WE'RE AELIN MEDIA
        </UIText>
        <UIText size="3rem" color="#ffffff" font="MontBold">
          We're an independent
        </UIText>
        <UIText size="3rem" color="#ffffff" font="MontBold">
          studio building
        </UIText>
        <UIText size="3rem" color="#ffffff" font="MontBold">
          impactful products.
        </UIText>
        <CtaButton>
          <a href="tel:+918247675335">
            <UIText color="#fff" font="MontSemiBold" size="1.3rem">
              Contact Us
            </UIText>
          </a>
        </CtaButton>
      </IntroWrapper>
    </MainPageWrapper>
  );
}

export default mainPage;
const MainPageWrapper = styled.div`
  min-height: 100vh;
  background: url(${mainImg}) #210837;
  background-position: right;
  padding: 0;
  margin: 0;
  background-repeat: no-repeat;
  background-size: contain;
  @media screen and (max-width: 480px) {
    background: none;
  }
`;

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 940px;
  margin: 0 auto;
  padding: 20vh 0;
  align-items: flex-start;
  @media screen and (max-width: 480px) {
    margin-left: 20px;
  }
`;

const UIText = styled.div`
  font-family: ${(props) => props.font};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  letter-spacing: ${(props) => props.space};
  @media screen and (max-width: 480px) {
  }
`;

const CtaButton = styled.div`
  padding: 10px 28px;
  background-color: #5b51bf;
  border-radius: 6px;
  margin-top: 14px;
`;
