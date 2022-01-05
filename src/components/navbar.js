import React from "react";
import styled from "styled-components";
import img from "../assets/images/new-logo-light.png";

function Navbar({ isOpen, toggleMenu }) {
  return (
    <div style={{overflow:"hidden"}}
    >
      <NavBarContainer>
        <img id="logoimg" src={img} width="168" alt="" />
        <header id="header" onClick={toggleMenu}>
          <nav className="nav">
            <button className={`toggle-menu ${isOpen ? "active" : ""}`}>
              <span></span>
            </button>
          </nav>
        </header>

        <div id="menu" className={`${isOpen ? "open" : ""}`}>
          <nav className="main-nav">
            <ul>
              <li>
                <a href="cool">About</a>
              </li>
              <li>
                <a href="cool">Pricing</a>
              </li>

              <li>
                <a href="cool">Contact</a>
              </li>
            </ul>
          </nav>

          <footer className="menu-footer">
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="qwewq">
                    <i className="fa fa-twitter fa-fw"></i>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="kjh">
                    <i className="fa fa-envelope fa-fw"></i>
                    Subscribe
                  </a>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
      </NavBarContainer>
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

// const NavItemsWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   /* margin-top: 30px; */
// `;
// const UIText = styled.div`
//   font-family: "MontSemiBold";
//   cursor: pointer;
//   color: #fff;
//   font-size: 1.5rem;
//   margin-left: 16px;
//   @media screen and (max-width: 480px) {
//     font-size: 1.1rem;
//   }
// `;
