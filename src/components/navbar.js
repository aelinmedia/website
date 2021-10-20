import React from "react";
import styled from "styled-components";
import img from "../assets/images/LOGO.png";

function Navbar() {
  return (
    <NavBarContainer>
      <img src={img} width="180" alt="" />
      <NavItemsWrapper>
        <UIText>WORK</UIText>
        <UIText>ABOUT</UIText>
      </NavItemsWrapper>
    </NavBarContainer>
  );
}

export default Navbar;
const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90vw;
  margin: 0 auto;
  padding-top: 36px;
  align-items: center;
`;

const NavItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* margin-top: 30px; */
`;
const UIText = styled.div`
  font-family: "MontSemiBold";
  cursor: pointer;
  color: #fff;
  font-size: 1.5rem;
  margin-left: 16px;
`;
