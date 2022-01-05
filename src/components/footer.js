import React from "react";
import styled from "styled-components";
import img from "../assets/images/LOGO.png";
import insta from "../assets/images/icons/instagram.svg";
import twitter from "../assets/images/icons/twitter.svg";
import dribbble from "../assets/images/icons/youtube.svg";
import youtube from "../assets/images/icons/dribbble.svg";
function Footer() {
  return (
    <FooterContainer>
      <img src={img} width="160" alt="" />
      <UIText>{"© " + new Date().getFullYear()}</UIText>
      <SocialIconsWrapper>
        <a href="https://www.instagram.com/aelinmedia/">
          <SocialIcon>
            <Icon src={insta} alt="" />
          </SocialIcon>
        </a>
        <a href="https://www.twitter.com/">
          <SocialIcon>
            <Icon src={twitter} alt="" />
          </SocialIcon>
        </a>
        <a href="https://www.dribbble.com/">
          <SocialIcon>
            <Icon src={dribbble} alt="" />
          </SocialIcon>
        </a>
        <a href="https://www.youtube.com/">
          <SocialIcon>
            <Icon src={youtube} alt="" />
          </SocialIcon>
        </a>
      </SocialIconsWrapper>
    </FooterContainer>
  );
}

export default Footer;
const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  justify-content: space-between;
  width: 100%;
  min-width: 90vw;
  /* padding: 20px; */
  align-items: center;
`;
const UIText = styled.div`
  color: #e0ebff;
  font-size: ${(props) => props.size};
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: 0 auto;
  align-items: center;
  @media screen and (max-width: 480px) {
    margin-left: auto;
    margin-left: 0px;
    margin-top: 18px;
  }
`;

const SocialIcon = styled.div`
  background: rgba(224, 235, 255, 0.1);
  display: flex;
  margin-right: 15px;
  border-radius: 50%;
  padding: 10px;
  height: 42px;
  width: 42px;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.img`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
`;
