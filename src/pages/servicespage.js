import React from "react";
import styled from "styled-components";
import videdit from "../assets/images/services/video.gif";
import threed from "../assets/images/services/3d.gif";
import motiong from "../assets/images/services/motion.gif";
import vfximage from "../assets/images/services/vfx.gif";
import graphic from "../assets/images/services/graphics.gif";
// import img from "../assets/images/services_bg.png";

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
    <ServicesContainer>
    
      <Header>Our Services</Header>
      <Description>
        we unlock your brand's potential to scale using content & tech. we help
        you discover ‘levers’ to pivot your product.
      </Description>
      <ServiesWrapper>
        {services.map((eachService) => {
          return (
            <ItemWrapper key={eachService.serviceName}>
              <EachItem>
                <ServiceImagesWrapper>
                  <ServiceImage image={eachService.image}></ServiceImage>
                  {/* <ServiceIcon></ServiceIcon> */}
                </ServiceImagesWrapper>
                <h5
                  style={{
                    color: "#fff",
                    fontSize: "1.2rem",
                    fontFamily: "MontBold",
                  }}
                >
                  {eachService.serviceName}
                </h5>
                <p
                  style={{
                    color: "#DEF5FF",
                    fontSize: "0.9rem",
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
    </ServicesContainer>
  );
}

const ServicesContainer = styled.div`
  ${'' /* background: url(${img}); */}
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  backdrop-filter: blur(5px);
  margin-bottom: 60px;
 
`;
const ServiesWrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  margin: 0 auto;
  grid-gap: 2em;
  max-width: 1080px;
  margin-top: 60px;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
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
const Description = styled.p`
  text-align: center;
  display: flex;
  color: #def5ff;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 70vw;
  font-size: 1.35rem;
  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
    max-width: 86vw;
  }
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

const ServiceImagesWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
  align-items: center;
`;
const Header = styled.h2`
  display: flex;
  font-size: 2.6rem;
  text-align: center;
  padding: 100px 0px 12px 0px;
  color: #ffffff;
  font-family: "MontBold";
  justify-content: center;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
