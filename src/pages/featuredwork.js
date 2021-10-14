import React from "react";
import styled from "styled-components";
export default function featuredWork() {
  return (
    <div>
      <Header>Featured Work</Header>
      <Description>
        we unlock your brand's potential to scale using content & tech. we help
        you discover ‘levers’ to pivot your product.
      </Description>
      <BrandsWrapper></BrandsWrapper>
    </div>
  );
}
const Header = styled.h2`
  display: flex;
  font-size: 1.8rem;
  text-align: center;
  font-family: "Poppins", sans-serif;
  margin: 50px 0px 6px 0px;
  justify-content: center;
  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;
const BrandsWrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  margin: 0 auto;
  max-width: 1080px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-template-rows: repeat(2, 150px);
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(130px, 0.5fr));
    grid-template-rows: repeat(4, 150px);
    grid-gap: 0px;
  }
`;

const Description = styled.p`
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
  }
`;
