import React from "react";
import styled from "styled-components";
import img2 from "../assets/images/work/2.jpg";
import img3 from "../assets/images/work/3.jpg";
import img4 from "../assets/images/work/4.jpg";
import img5 from "../assets/images/work/5.jpg";

export default function featuredWork() {
  const data = [
    {
      title: "Awesome Project",
      src: img2,
    },
    {
      title: "Awesome Project",
      src: img3,
    },
    {
      title: "Awesome Project",
      src: img4,
    },
    {
      title: "Awesome Project",
      src: img5,
    },
  ];
  return (
    <div style={{ minHeight: "100vh", zIndex: "9999" }}>
      <Header>Featured Work</Header>
      <FeaturedWorkWrapper>
        {data.map((eachWork) => {
          return (
            <ItemWrapper>
              <EachItem src={eachWork.src}></EachItem>
              {/* <WorksubTitle>IOS, IoT</WorksubTitle> */}
            </ItemWrapper>
          );
        })}
      </FeaturedWorkWrapper>
    </div>
  );
}
const Header = styled.h2`
  display: flex;
  font-size: 2.6rem;
  text-align: center;
  margin: 140px 0px 12px 0px;
  color: #ffffff;
  font-family: "MontBold";
  justify-content: center;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const FeaturedWorkWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  grid-gap: 2em;
  max-width: 900px;
  margin-top: 40px;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 360px;
`;

const EachItem = styled.img`
  border-radius: 6px;
  border: 1px solid rgba(204, 214, 246);
  height: 300px;
  object-fit: cover;
  margin: 14px;
  width: 94%;
  transition: transform 0.5s ease;
`;
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
`;
