import React, {Component} from 'react';
import {Accordion, Card, Col, Container, Row} from "react-bootstrap";
import FAQData from "../data/FAQData";
import {ReactComponent as PlayBtn} from "../assets/img/playbtn.svg";
import {ReactComponent as RePlayBtn} from "../assets/img/replay.svg";
import "../css/FAQ.css"
import {WindupChildren} from "windups";

class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FAQData: FAQData
    }
  }

  render() {
    return (
      <Container fluid className="fixed-top px-5" style={this.props.style} id="faq-section">
        <Row className="h-100 fixed-top">
          <Col>
            <Row className="mx-5 align-items-center mt-4">
              <Col xl={1} className="my-auto ml-5" onClick={() => {
                this.props.goBack("faq")
              }}>
                <svg width="2em" height="2em" viewBox="0 0 13 10"
                     style={{
                       stroke: "#fff",
                       fill: "none",
                       strokeWidth: 2,
                       transform: "rotateY(180deg)",
                       cursor: "pointer"
                     }}>
                  <path d="M1,5 L11,5"/>
                  <polyline points="8 1 12 5 8 9"/>
                </svg>
              </Col>
              <Col xl={2} className="p-0 ml-5">
                <span style={{fontFamily: "Blockletter", fontSize: 42}}>FAQs</span>
              </Col>
            </Row>

          </Col>
            <Col  style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
            }}>
                <Row className="h-100 align-items-center">
                    <Accordion as = {Col}>
                    {this.state.FAQData.map((data, number) => (
                        <Card style={{
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderColor: "rgba(0, 200, 70, 0.5)"
                        }}>
                            <Accordion.Toggle as={Card.Header} eventKey={number.toString()}
                                              onClick={() => {
                                                  let fqaData = this.state.FAQData;
                                                  fqaData.map((d, index) => {
                                                      d.played = index === number ? !d.played : false;
                                                  })
                                                  this.setState({FAQData: fqaData});

                                              }}  style={{
                                borderBottomColor: "rgba(0, 200, 70, 0.5)",
                                borderBottomStyle: "dashed",
                            }}>
                                <Row>
                                    <Col sm={11}>
                                        <h5>
                                            <snap style={{fontFamily: "Blockletter"}}>
                                                Question>
                                            </snap>
                                            <snap style={{fontFamily: "Poppins"}}>
                                                {" " + data.question}
                                            </snap>
                                        </h5>
                                    </Col>
                                    <Col>
                                        {
                                            !data.played ?
                                                <PlayBtn style={{ width: 20,  height: 20}} /> :
                                                <RePlayBtn style={{
                                                    width: 20,
                                                    height: 20,
                                                    animationName: "rotate-object",
                                                    animationDuration: "1s",
                                                    animationIterationCount: 1,
                                                    transitionTimingFunction: "ease-in",
                                                }} />
                                        }
                                    </Col>
                                </Row>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={number.toString()}>
                                <Card.Body>
                                    <h5>
                                        <snap style={{fontFamily: "Blockletter"}}>
                                            Answer>
                                        </snap>
                                        <snap style={{
                                            fontFamily: "Poppins",
                                        }}>
                                            {data.played && <WindupChildren speed={500}>
                                                {" " + data.answer}
                                            </WindupChildren>}
                                        </snap>
                                        <snap style={{
                                            animation: "blink 0.9s infinite",
                                        }}>|</snap>
                                    </h5>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    ))}
                </Accordion>
                </Row>
            </Col>
        </Row>
      </Container>
    );
  }
}

export default FAQ;