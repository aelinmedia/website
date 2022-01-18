import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/navbar";
import anim from "../assets/images/website.png";
import anim2 from "../assets/images/moon2.png";
import ChatWidget from "../components/chat_widget";

function MainPage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroWrapper>
      <ChatWidget />
      {/* <BgVideoWrapper className="animvideo" autoPlay loop muted>
          <source src={anim} type="video/mp4" />
        </BgVideoWrapper> */}
      <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
      <IntroWrapper>
        <UIText size="1.2rem" color="#00AAF2" font="MontSemiBold" space="4px">
          WE ARE AELIN MEDIA
        </UIText>
        <UIText size="2rem" color="#ffffff" font="MontBold">
          We turn your ideas into reality.
        </UIText>
      </IntroWrapper>
      <BGG>
        <div id="stars"></div>
        <div id="stars2"></div>
      </BGG>
    </HeroWrapper>
  );
}

export default MainPage;

const HeroWrapper = styled.section`
  height: 100vh;
  background: url(${anim2}) no-repeat center center;
  background-position: right;
  padding: 0;
  margin: 0;
  background-size: cover;
  @media screen and (max-width: 480px) {
    background: url(${anim}) no-repeat center center;
  }
`;
const BGG = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
`;
// const BgVideoWrapper = styled.video`
//   max-height: 100vh;
//   background-position: right;
//   padding: 0;
//   margin: 0;
//   background-repeat: no-repeat;
//   background-size: contain;
//   z-index: -1;
//   position: absolute;
//   right: 0;
//   @media screen and (max-width: 480px) {
//     display: none;
//   }
// `;

const IntroWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 62vh;
  text-align:start;
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

// const CtaButton = styled.div`
//   padding: 10px 28px;
//   background-color: #4344a3;
//   border-radius: 6px;
//   margin-top: 14px;
// `;
