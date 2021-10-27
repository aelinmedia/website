import React from "react";
import styled from "styled-components";
import videdit from "../assets/images/video.gif";
import threed from "../assets/images/3d.gif";
import motiong from "../assets/images/motion.gif";
import vfximage from "../assets/images/vfx.gif";
import graphic from "../assets/images/graphics.gif";
export default function servicesPage() {
  let services = [
    {
      serviceName: "Video Editing",
      desc: " We deliver high quality videos with compelling editing and post-production",
      image: videdit,
    },
    {
      serviceName: "Graphic Design",
      desc: "Stand out from the crowd with picture perfect graphics exclusively made for your brand",
      image: graphic,
    },
    {
      serviceName: "Motion graphic",
      desc: "Provide delightful experience to your audience and increase engagement via creative motion graphics",
      image: motiong,
    },
    {
      serviceName: "VFX",
      desc: "This is where the magic happens, anything from rotoscoping to digital compositing! We got you covered",
      image: vfximage,
    },
    {
      serviceName: "3D Modelling",
      desc: "Bring your graphics to live with our 3d models. Tell us the recipe, we'll cook it for you.",
      image: threed,
    },
  ];
  return (
    <div style={{ marginBottom: "40px" }}>
      <ServiesWrapper>
        <ItemWrapper>
          <EachItem1>
            <h5
              style={{
                color: "#fff",
                fontSize: "2rem",
                fontFamily: "MontBold",
              }}
            >
              Our Services
            </h5>
            <p
              style={{
                color: "#DEF5FF",
                fontSize: "1.1rem",
                letterSpacing: "0.3px",
                marginTop: "4px",
                fontFamily: "MontRegular",
              }}
            >
              we unlock your brand's
            </p>
            <p
              style={{
                color: "#DEF5FF",
                fontSize: "1.1rem",
                letterSpacing: "0.3px",
                marginTop: "4px",
                fontFamily: "MontRegular",
              }}
            >
              potential to scale using content
            </p>
            <p
              style={{
                color: "#DEF5FF",
                fontSize: "1.1rem",
                letterSpacing: "0.3px",
                marginTop: "4px",
                fontFamily: "MontRegular",
              }}
            >
              & tech. we help you discover
            </p>
            <p
              style={{
                color: "#DEF5FF",
                fontSize: "1.1rem",
                letterSpacing: "0.3px",
                marginTop: "4px",
                fontFamily: "MontRegular",
              }}
            >
              ‘levers’ to pivot your product.
            </p>
          </EachItem1>
        </ItemWrapper>
        {services.map((eachService) => {
          return (
            <ItemWrapper>
              <EachItem>
                <ServiceImagesWrapper>
                  <ServiceImage image={eachService.image}></ServiceImage>
                  {/* <ServiceIcon></ServiceIcon> */}
                </ServiceImagesWrapper>
                <h5
                  style={{
                    color: "#fff",
                    fontSize: "1.5rem",
                    fontFamily: "MontBold",
                  }}
                >
                  {eachService.serviceName}
                </h5>
                <p
                  style={{
                    color: "#DEF5FF",
                    fontSize: "1.1rem",
                    letterSpacing: "0.3px",
                    marginTop: "10px",
                    fontFamily: "MontRegular",
                  }}
                >
                  {eachService.desc}
                </p>
              </EachItem>
            </ItemWrapper>
          );
        })}
      </ServiesWrapper>
    </div>
  );
}

const ServiesWrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  margin: 0 auto;
  grid-gap: 2em;
  max-width: 900px;
  margin-top: 60px;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  /* grid-template-rows: repeat(2, 360px); */
`;

const EachItem = styled.div`
  background: white;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  height: 100%;
  margin: 0 14px;
  width: 94%;
  padding: 36px 26px;
`;
const EachItem1 = styled.div`
  background: white;
  border-radius: 6px;
  background: #210837;
  height: 100%;
  width: 97%;
  margin: 0 14px;
  padding: 36px 26px;
`;
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ServiceImage = styled.div`
  width: 74px;
  height: 74px;
  background-color: white;
  background-image: url(${(props) => props.image});
  border-radius: 6px;
  background-repeat: no-repeat;
  background-size: cover;
`;
// const ServiceIcon = styled.div`
//   width: 42px;
//   height: 42px;
//   background-color: white;
//   background-image: url(${img});
//   background-repeat: no-repeat;
//   background-size: cover;
//   border-radius: 6px;
// `;

const ServiceImagesWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
  align-items: center;
`;
