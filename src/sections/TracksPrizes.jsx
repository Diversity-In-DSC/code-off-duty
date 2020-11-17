import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ReactComponent as MLImage } from "../assets/brain.svg";
import { ReactComponent as BlockchainImage } from "../assets/Blockchain.svg";
import { ReactComponent as OIImage } from "../assets/Openinnovation.svg";
import { ReactComponent as ARVRImage } from "../assets/arvr.svg";
import "./styles/trackprizes.css";

const data = {
  tracks: [
    {
      name: "AI/ML",
      logo: <MLImage style={{ height: "100px", width: "100px" }} />,
      color: "#DB4437",
      info:
        "Artificial Intelligence (AI) and Machine Learning (ML) are two very hot buzzwords right now, and often seem to be used interchangeably. ... Machine Learning is a current application of AI based around the idea that we should really just be able to give machines access to data and let them learn for themselves.",
    },
    {
      name: "AR/VR",
      logo: <ARVRImage style={{ height: "100px", width: "100px" }} />,
      color: "#F4B400",
      info:
        "Augmented reality (AR) adds digital elements to a live view often by using the camera on a smartphone. Examples of augmented reality experiences include Snapchat lenses and the game Pokemon Go. Virtual reality (VR) implies a complete immersion experience that shuts out the physical world",
    },
    {
      name: "Blockchain",
      logo: <BlockchainImage style={{ height: "100px", width: "100px" }} />,
      color: "#4285F4",
      info:
        "Blockchain is a system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system. A blockchain is essentially a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems on the blockchain.",
    },
    {
      name: "Open Innovation",
      logo: <OIImage style={{ height: "100px", width: "100px" }} o />,
      color: "#0F9D58",
      info:
        "Open innovation is “the use of purposive inflows and outflows of knowledge to accelerate internal innovation, and expand the markets for external use of innovation, respectively.”",
    },
  ],
};

// Tracks and Prizes
const TracksPrizes = () => {
  return (
    <Container>
      <p
        className="h3 text-center text-white"
        style={{ fontFamily: "Valorant", marginTop: "70px" }}
      >
        Tracks
      </p>

      {/*TRACKS*/}

      <Row style={{ marginTop: "70px" }}>
        {data.tracks.map((track, index) => (
          <Col className="mb-5 mb-xl-0">
            <Container
              style={{
                background: "#111",
                border: `2px solid ${track.color}`,
                width: "250px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "300px",
                borderRadius: 10
              }}
              className={`track${index}`}
            >
              <div className="track-div">
                <div className="track-img">
                  {track.logo}
                  <h4 style={{ color: "white" }} className="mt-3">
                    {track.name}
                  </h4>
                </div>
                <div>
                  <h6 style={{ color: "white" }} className="track-info">
                    {track.info}
                  </h6>
                </div>
              </div>
            </Container>
          </Col>
        ))}
      </Row>

      <p
        className="h3 text-center text-white"
        style={{
          fontFamily: "Valorant",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        Prizes
      </p>

      <Row style={{ marginBottom: "100px" }}>
        <Col className="mb-5 mb-xl-0">
          <Container
            style={{
              background: "#111",
              border: "2px solid #db4437",
              width: "300px",
              height: "350px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textAlign: "center",
              borderRadius: 10
            }}
            className="prizes1"
          >
            <div className="prize">
              <div className="prize-info">
                <h1 className="mt-3">&#8377;10,000</h1>
                <h4>+ Goodies worth upto 75,000</h4>
                <h1>2nd prize</h1>
              </div>
            </div>
          </Container>
        </Col>
        <Col className="mb-5 mb-xl-0">
          <Container
            style={{
              background: "#111",
              border: "2px solid #F4B400",
              width: "300px",
              height: "390px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              borderRadius: 10,
              textAlign: "center",
            }}
            className="prizes2"
          >
            <div className="prize">
              <div className="prize-info">
                <h1 className="mt-3">&#8377;15,000</h1>
                <h4>+ Goodies worth upto 1,00,000</h4>
                <h1>1st prize</h1>
              </div>
            </div>
          </Container>
        </Col>
        <Col className="mb-5 mb-xl-0">
          <Container
            style={{
              background: "#111",
              border: "2px solid #0F9D58",
              width: "300px",
              height: "350px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              borderRadius: 10,
              textAlign: "center",
            }}
            className="prizes3"
          >
            <div className="prize">
              <div className="prize-info">
                <h1 className="mt-3">&#8377;5,000</h1>
                <h4>+ Goodies worth upto 50,000</h4>
                <h1>3rd prize</h1>
              </div>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default TracksPrizes;
