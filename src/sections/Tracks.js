import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ReactComponent as MLlogo} from "../assets/img/brain.svg";
import {ReactComponent as ARVRlogo} from "../assets/img/ARVR.svg";
import {ReactComponent as BlockchainLogo} from "../assets/img/blockchain.svg";
import {ReactComponent as OIlogo} from "../assets/img/innovation.svg";
import TrackModal from "../components/TrackModal";

class Tracks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackVisible: []
    };
    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)

    Array.prototype.push.apply(this.state.trackVisible, [false, false, false, false])

    this.tracks = [
      {
        name: "AR/VR",
        show: false,
        color: "#F4B400",
        c: "track-ARVR ml-4",
        image: <ARVRlogo style={{width: "5em", height: "auto"}}/>,
        onClick: () => this.handleShow(0),
        desc:
          "Augmented reality (AR) adds digital elements to a live view often by using the camera on a smartphone. Examples of augmented reality experiences include Snapchat lenses and the game Pokemon Go. Virtual reality (VR) implies a complete immersion experience that shuts out the physical world",
      },
      {
        name: "Blockchain",
        show: false,
        color: "#4285F4",
        c: "track-BC ml-5",
        image: <BlockchainLogo style={{width: "5em", height: "auto"}}/>,
        onClick: () => this.handleShow(1),
        desc:
          "Blockchain is a system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system. A blockchain is essentially a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems on the blockchain.",
      },
      {
        name: "AI/ML",
        show: false,
        color: "#DB4437",
        c: "track-ml",
        image: <MLlogo style={{width: "5em", height: "auto"}}/>,
        onClick: () => this.handleShow(2),
        desc:
          "Artificial Intelligence (AI) and Machine Learning (ML) are two very hot buzzwords right now, and often seem to be used interchangeably. ... Machine Learning is a current application of AI based around the idea that we should really just be able to give machines access to data and let them learn for themselves.",
      },
      {
        name: "Open Innovation",
        show: false,
        color: "#0F9D58",
        c: "track-OI ml-5",
        image: <OIlogo style={{width: "5em", height: "auto"}}/>,
        onClick: () => this.handleShow(3),
        desc:
          "Open innovation is “the use of purposive inflows and outflows of knowledge to accelerate internal innovation, and expand the markets for external use of innovation, respectively.”",
      },
    ];
  }

  handleClose = () => {
    let trackVisible = []
    Array.prototype.push.apply(trackVisible, [false, false, false, false])
    this.setState({
      trackVisible
    });
  };

  handleShow = (i) => {
    let trackVisible = this.state.trackVisible;
    trackVisible[i] = true;
    this.setState({trackVisible})
  };

  render() {
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
              <path d="M1,5 L11,5"/>
              <polyline points="8 1 12 5 8 9"/>
            </svg>
          </Col>
          <Col xl={2} className="p-0">
            <span style={{fontFamily: "Blockletter", fontSize: 42}}>
              Tracks
            </span>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {this.tracks.map((track, index) => <Col xl={2} className="pl-5" key={index}>
            <div
              style={{
                boxShadow: "0 1px 10px #888",
                position: "fixed",
                top: "-10em",
                cursor: "pointer",
                background: "#fff",
                borderRadius: "50%",
                display: "flex",
                width: "10em",
                height: "10em",
                justifyContent: "center",
                alignItems: "center",
              }}
              className={track.c}
              onClick={() => {
                track.onClick()
              }}
            >
              <div className="track-img text-center">
                {track.image}
                <h4
                  style={{color: "black", fontSize: 15, fontFamily: "Blockletter"}}
                  className="mt-3 text-center"
                >
                  {track.name}
                </h4>
              </div>
            </div>
          </Col>)}
        </Row>

        {this.tracks.map((track, index) => (
          <TrackModal
            show={this.state.trackVisible[index]}
            title={track.name}
            desc={track.desc}
            color={track.color}
            handleClose={this.handleClose}
          />
        ))}
      </Container>
    );
  }
}

export default Tracks;
