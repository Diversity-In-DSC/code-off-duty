import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ReactComponent as MLlogo } from "../assets/brain.svg";
import { ReactComponent as BlockchainLogo } from "../assets/Blockchain.svg";
import { ReactComponent as OIlogo } from "../assets/Openinnovation.svg";
import { ReactComponent as ARVRlogo } from "../assets/arvr.svg";
import "./styles/trackprizes.css";

const data = {
  tracks: [
    {
      name: "AI/ML",
      logo: <MLlogo style={{ height: "100px", width: "100px" }} />,
      color: "#DB4437",
      info:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse dignissim tellus non turpis dignissim",
    },
    {
      name: "AR/VR",
      logo: <ARVRlogo style={{ height: "100px", width: "100px" }} />,
      color: "#F4B400",
      info: "AR/VR is dope",
    },
    {
      name: "Blockchain",
      logo: <BlockchainLogo style={{ height: "100px", width: "100px" }} />,
      color: "#4285F4",
      info: "blockchain is dope",
    },
    {
      name: "Open Inovtion",
      logo: <OIlogo style={{ height: "100px", width: "100px" }} o />,
      color: "#0F9D58",
      info: "open innovation is dope",
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
          <Col>
            <Container
              style={{
                border: `2px solid ${track.color}`,
                width: "250px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "300px",
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
                  <p style={{ color: "white" }} className="track-info">
                    {track.info}
                  </p>
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
        <Col>
          <Container
            style={{
              border: "2px solid #db4437",
              width: "300px",
              height: "350px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textAlign: "center",
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
        <Col className="mt-n4">
          <Container
            style={{
              border: "2px solid #F4B400",
              width: "300px",
              height: "390px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
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
        <Col>
          <Container
            style={{
              border: "2px solid #0F9D58",
              width: "300px",
              height: "350px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
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
