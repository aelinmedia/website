import React from "react";
import styled from "styled-components";
import img from "../assets/images/LOGO.png";
import insta from "../assets/images/instagram.svg";
import twitter from "../assets/images/twitter.svg";
import dribbble from "../assets/images/youtube.svg";
import youtube from "../assets/images/dribbble.svg";
function Footer() {
  return (
    <FooterContainer>
      <img src={img} width="160" alt="" />
      <UIText>{"© " + new Date().getFullYear()}</UIText>
      <SocialIconsWrapper>
        <SocialIcon>
          <Icon src={insta} alt="" />
        </SocialIcon>
        <SocialIcon>
          <Icon src={twitter} alt="" />
        </SocialIcon>
        <SocialIcon>
          <Icon src={dribbble} alt="" />
        </SocialIcon>
        <SocialIcon>
          <Icon src={youtube} alt="" />
        </SocialIcon>
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
  align-items: center;
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
