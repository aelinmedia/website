import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/navbar";
import anim from "../assets/images/anim.mp4";

function MainPage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MainPageWrapper>
      <BgVideoWrapper className="animvideo" autoPlay loop muted>
        <source src={anim} type="video/mp4" />
      </BgVideoWrapper>
      <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
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

export default MainPage;
const MainPageWrapper = styled.div`
  min-height: 100vh;
  padding: 0;
  margin: 0;
  background-color: #000000;
  opacity: 0.9;
  @media screen and (max-width: 480px) {
    background: none;
  }
`;
const BgVideoWrapper = styled.video`
  max-height: 100vh;
  background-position: right;
  padding: 0;
  margin: 0;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -1;
  position: absolute;
  right: 0;
  @media screen and (max-width: 480px) {
    display: none;
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
