import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getDevice } from "../global";
import { ReactComponent as TezosLogo } from "../assets/img/tezos-xtz-logo.svg";
import { ReactComponent as MaticLogo } from "../assets/img/matic-network-matic-logo.svg";
import { ReactComponent as PortisLogo } from "../assets/img/portis-io-logo-vector.svg";

import "../css/prizes.css";

class Prizes extends Component {
  constructor(props) {
    super(props);

    //Top 3 Prizes Section

    this.PrizeData = [
	  {
		title: "1st Prize",
		data: "₹10000 +",
		from: "Swags from Google Developers",
		height: "350px",
		border: "2px solid #F4B400",
	  },
      {
        title: "2nd Prize",
        data: "₹5000 +",
        from: "Swags from Google Developers",
        height: "350px",
        border: "2px solid #db4437",
      },
     
       {
      title: "",
      data: "",
      from: "More Prizes to be Updated Soon",
      height: "350px",
       border: "2px solid #0F9D58",
      },
    ];


    // Sponsorships Prizes Section

    this.sponsorprizes = [
      {
        title: "Tezos",
        logo: (
          <TezosLogo
            style={{
              width: this.state.device === "xs" ? "3em" : "2em",
              height: this.state.device === "xs" ? "3em" : "2em",
            }}
          />
        ),
        data1: "₹10000 for best D-app built on Tezos",
        data2: `₹5000 for runners`,
        border: "2px solid #db4437",
      },
      {
        title: "Matic",
        logo: (
          <MaticLogo
            style={{
              width: this.state.device === "xs" ? "3em" : "2em",
              height: this.state.device === "xs" ? "3em" : "2em",
            }}
          />
        ),
        data1: "₹10,000 for best hack built on  Ethereum",
        data2: "₹15,000 for the best hack built on Ethreun and Matic",
        border: "2px solid #F4B400",
      },
      {
        logo: (
          <PortisLogo
            style={{
              width: this.state.device === "xs" ? "6em" : "4em",
              height: this.state.device === "xs" ? "6em" : "4em",
            }}
          />
        ),
        data1: "200 USD (crypto) for best D-app bult on portis",
        border: "2px solid #0F9D58",
      },
    ];
  }

  state = {
    device: getDevice(),
  };

  render() {
    return (
      <Container
        fluid
        className="fixed-top px-xl-5 px-0"
        style={this.props.style}
        id="prizes-section">


        <Row className="mx-5 align-items-center mt-4">
          <Col
            xl={1}
            sm={1}
            md={1}
            xs={1}
            className={this.state.device === "xs" ? "ml-n5" : ""}
            onClick={() => {
              this.props.goBack(
                this.state.device === "xs" ? "mobile-prizes" : "prizes"
              );
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
          <Col xl={2} md={2} sm={2} xs={2} className="p-0 ml-5">
            <span style={{ fontFamily: "Blockletter", fontSize: 42 }}>
              Prizes
            </span>
          </Col>
        </Row>

        
        <Row
          sm={5}
          style={{ marginTop: this.state.device === "xs" ? "3em" : "5em" }}
          className="d-flex align-items-center"
        >
          {this.PrizeData.map((prize, idx) => (
            <Col xl={3} className="mb-5 mb-xl-0" key={idx}>
              <Container
                style={{
                  border: prize.border,
                  width: "300px",
                  height: prize.height,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  textAlign: "center",
                }}
                className={`prizes${idx}`}
              >
                <div className="prize">
                  <Col
                    style={{
                      fontFamily: "Blockletter",
                      fontSize: this.state.device === "xs" ? "15pt" : "20pt",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    className="prize-info"
                  >
                    <Row className="mt-3">{prize.data}</Row>
                    <Row>{prize.from}</Row>
                    <Row className="mt-5">{prize.title}</Row>
                  </Col>
                </div>
              </Container>
            </Col>
          ))}
        </Row>
                          
        <Row sm={5}>
          {this.sponsorprizes.map((prize, idx) => (
            <Col xl={3} className="mb-5 mb-xl-0 mt-5" key={idx}>
              <Container
                style={{
                  border: prize.border,
                  width: "300px",
                  height: "300px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  textAlign: "center",
                }}
                className={`prizes${idx}`}
              >
                <div className="prize">
                  <Col
                    style={{
                      fontFamily: "Blockletter",
                      fontSize: this.state.device === "xs" ? "15pt" : "15pt",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    className="prize-info"
                  >
                    <Row
                      style={{
                        fontSize: this.state.device === "xs" ? "20pt" : "27pt",
                      }}
                      className="mt-3"
                    >
                      <Col className="ml-3 m-0 p-0">{prize.logo}</Col>
                      <Col>{prize.title}</Col>
                    </Row>
                    <Row className="mt-3">{prize.data1}</Row>
                    <Row>{prize.data2}</Row>
                  </Col>
                </div>
              </Container>
            </Col>
          ))}
        </Row>


          

      </Container>
    );
  }
}

export default Prizes;

/*<Col>
              <Container
                style={{
                  border: "5px solid #db4437",
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
            </Col> */
