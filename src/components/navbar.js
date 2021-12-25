import React from "react";
import styled from "styled-components";
import img from "../assets/images/LOGO.png";
import { useTransition, animated, config } from "react-spring";
import { MdClose, MdMenu } from "react-icons/md";

function Navbar({ isOpen, toggleMenu }) {
  let styleToggleButton = {
    fontSize: "3rem",
    color: "rgb(36,36,36)",
    padding: 0,
    border: "none",
    background: "none",
  };
  let fullscreenMenu = useTransition(isOpen, null, {
    from: {
      opacity: 0,
      transform: "scale(0.80)",
    },
    enter: {
      opacity: 1,
      transform: "scale(1)",
      backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
      position: "absolute",
      maxHeight: "100vh",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
    leave: { opacity: 0, transform: "scale(0.80)" },
    config: config.gentle,
  });
  let openButton = useTransition(isOpen, null, {
    from: {
      opacity: 0,
      transform: "scale(0)",
      position: "absolute",
    },
    enter: {
      opacity: 1,
      transform: "scale(1)",
    },
    leave: { opacity: 0, transform: "scale(0)" },
    config: config.stiff,
  });
  return (
    <div>
      <NavBarContainer>
        <img id="logoimg" src={img} width="180" alt="" />
        <div
          style={{
            zIndex: 20,
          }}
        >
          {openButton.map(({ item, key, props }) =>
            !item ? (
              <animated.div key={key} style={props}>
                <button style={styleToggleButton} onClick={toggleMenu}>
                  <MdMenu />
                </button>
              </animated.div>
            ) : (
              <animated.div key={key} style={props}>
                <button style={styleToggleButton} onClick={toggleMenu}>
                  <MdClose />
                </button>
              </animated.div>
            )
          )}
        </div>
      </NavBarContainer>
      <div>
        {fullscreenMenu.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
            
                <ul
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "8vw",
                    padding: 0,
                    margin: 0,
                    listStyle: "none",
                    overflow: "hidden",
                    textAlign: "left",
                  }}
                >
                  <li>Link 1</li>
                  <li>Link 2</li>
                  <li>Link 3</li>
                  <li>Link 4</li>
                </ul>
              </animated.div>
            )
        )}
      </div>
    </div>
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
  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
  }
`;
