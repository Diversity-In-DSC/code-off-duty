import React, { Component, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ReactComponent as MLlogo } from "../assets/img/brain.svg";
import { ReactComponent as ARVRlogo } from "../assets/img/ARVR.svg";
import { ReactComponent as BlockchainLogo } from "../assets/img/blockchain.svg";
import { ReactComponent as OIlogo } from "../assets/img/innovation.svg";
import TrackModal from "../components/TrackModal";
import anime from "animejs/lib/anime.es";

class Tracks extends Component {
  constructor() {
    super();
    this.state = {
      showML: false,
      showARVR: false,
      showBC: false,
      showOI: false,
    };
  }

  handleClose = () => {
    this.setState({
      showML: false,
      showARVR: false,
      showBC: false,
      showOI: false,
    });
  };
  handleShow = (show) => {
    switch (show) {
      case "ML":
        this.setState({
          showML: true,
        });
        break;
      case "AR/VR":
        this.setState({
          showARVR: true,
        });
        break;
      case "BC":
        this.setState({
          showBC: true,
        });
        break;
      case "OI":
        this.setState({
          showOI: true,
        });

      default:
        break;
    }
  };

  hgml = window.innerWidth * 0.26;
  hgARVR = window.innerWidth * 0.685;
  hgBC = window.innerWidth * 0.52;
  hgOI = window.innerWidth * 0.195;

  // componentDidMount() {
  //   const t5 = anime.timeline({
  //     easing: "easeInOutQuad",
  //     duration: 1500,
  //     autoplay: true,
  //   });

  //   const t6 = anime.timeline({
  //     easing: "easeInOutQuad",
  //     duration: 1500,
  //     autoplay: true,
  //   });

  //   const t7 = anime.timeline({
  //     easing: "easeInOutQuad",
  //     duration: 1500,
  //     autoplay: true,
  //   });

  //   const t8 = anime.timeline({
  //     easing: "easeInOutQuad",
  //     duration: 1500,
  //     autoplay: true,
  //   });
  //   t5.add({
  //     duration: "2000",
  //     opacity: "0",
  //     targets: ".track-ml",
  //     keyframes: [{ translateY: "400px" }],
  //     opacity: "1",
  //   });

  //   t6.add({
  //     duration: "2000",
  //     opacity: "0",
  //     targets: ".track-ARVR",
  //     keyframes: [{ translateY: "600px" }],
  //     opacity: "1",
  //   });

  //   t7.add({
  //     duration: "2000",
  //     opacity: "0",
  //     targets: ".track-BC",
  //     keyframes: [{ translateY: "850px" }],
  //     opacity: "1",
  //   });

  //   t8.add({
  //     duration: "2000",
  //     opacity: "0",
  //     targets: ".track-OI",
  //     keyframes: [{ translateY: "900px" }],
  //     opacity: "1",
  //   });
  // }

  render() {
    const tracks = [
      {
        name: "AI/ML",
        show: this.state.showML,
        color: "#DB4437",
        desc:
          "Artificial Intelligence (AI) and Machine Learning (ML) are two very hot buzzwords right now, and often seem to be used interchangeably. ... Machine Learning is a current application of AI based around the idea that we should really just be able to give machines access to data and let them learn for themselves.",
      },
      {
        name: "AR/VR",
        show: this.state.showARVR,
        color: "#F4B400",
        desc:
          "Augmented reality (AR) adds digital elements to a live view often by using the camera on a smartphone. Examples of augmented reality experiences include Snapchat lenses and the game Pokemon Go. Virtual reality (VR) implies a complete immersion experience that shuts out the physical world",
      },
      {
        name: "Blockchain",
        show: this.state.showBC,
        color: "#4285F4",
        desc:
          "Blockchain is a system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system. A blockchain is essentially a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems on the blockchain.",
      },
      {
        name: "Open Inovtion",
        show: this.state.showOI,
        color: "#0F9D58",
        desc:
          "Open innovation is “the use of purposive inflows and outflows of knowledge to accelerate internal innovation, and expand the markets for external use of innovation, respectively.”",
      },
    ];
    return (
      <Container
        fluid
        className="fixed-top px-5"
        style={this.props.style}
        id="tracks-section"
      >
        <Row className="mx-5 align-items-center mt-4">
          <Col
            xl={1}
            className="my-auto mr-n4"
            onClick={() => {
              this.props.goBack("tracks");
            }}
          >
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 13 10"
              style={{
                stroke: "#fff",
                fill: "none",
                strokeWidth: 2,
                transform: "rotateY(180deg)",
                cursor: "pointer",
              }}
            >
              <path d="M1,5 L11,5" />
              <polyline points="8 1 12 5 8 9" />
            </svg>
          </Col>
          <Col xl={2} className="p-0">
            <span style={{ fontFamily: "Blockletter", fontSize: 42 }}>
              Tracks
            </span>
          </Col>
        </Row>

        <Container
          style={{
            border: "2px",
            cursor: "pointer",
            background: "#fff",
            position: "absolute",
            top: "-330px",
            right: `${this.hgml}px`,
            borderRadius: "50%",
            width: "130px",
            height: "130px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="track-ml"
          onClick={() => this.handleShow("ML")}
        >
          <div className="track-img">
            <MLlogo style={{ height: "50px", width: "50px" }} />
            <h4
              style={{ color: "black", fontSize: "15px" }}
              className="mt-3 text-center"
            >
              AI/ML
            </h4>
          </div>
        </Container>

        <Container
          style={{
            border: "2px",
            background: "#fff",
            cursor: "pointer",
            position: "absolute",
            top: "-330px",
            right: `${this.hgARVR}px`,
            borderRadius: "50%",
            width: "130px",
            height: "130px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="track-ARVR"
          onClick={() => this.handleShow("AR/VR")}
        >
          <div className="track-img">
            <ARVRlogo style={{ height: "50px", width: "50px" }} />
            <h4
              style={{ color: "black", fontSize: "15px" }}
              className="mt-3 text-center"
            >
              AR/VR
            </h4>
          </div>
        </Container>

        <Container
          style={{
            border: "2px",
            background: "#fff",
            cursor: "pointer",
            position: "absolute",
            top: "-330px",
            right: `${this.hgBC}px`,
            borderRadius: "50%",
            width: "130px",
            height: "130px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="track-BC"
          onClick={() => this.handleShow("BC")}
        >
          <div className="track-img text-center">
            <BlockchainLogo style={{ height: "50px", width: "50px" }} />
            <h4
              style={{ color: "black", fontSize: "15px" }}
              className="mt-3 text-center"
            >
              Blockchain
            </h4>
          </div>
        </Container>

        <Container
          style={{
            border: "2px",
            background: "#fff",
            cursor: "pointer",
            position: "absolute",
            top: "-330px",
            right: `${this.hgOI}px`,
            borderRadius: "50%",
            width: "130px",
            height: "130px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="track-OI"
          onClick={() => this.handleShow("OI")}
        >
          <div className="track-img text-center">
            <OIlogo
              className="mt-3"
              style={{ height: "50px", width: "50px" }}
            />
            <h5
              style={{ color: "black", fontSize: "15px" }}
              className="mt-2 text-center"
            >
              Open Innovation
            </h5>
          </div>
        </Container>

        {tracks.map((track) => (
          <TrackModal
            show={track.show}
            title={track.name}
            desc={track.desc}
            color={track.color}
            handleClose={this.handleClose}
          />
        ))}

        {/* <TrackModal
          show={this.state.showML}
          title={"AI/Ml"}
          desc={"AI/Ml is dope"}
          handleClose={this.handleClose}
        />
        <TrackModal
          show={this.state.showARVR}
          title={"AR/Vr"}
          desc={"AR/VR is dope"}
          handleClose={this.handleClose}
        /> */}
      </Container>
    );
  }
}

export default Tracks;
