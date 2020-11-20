import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Information extends Component {
  render() {
    return (
      <Container fluid className="fixed-top px-5" style={this.props.style} id="info-section">
        <Row className="mx-5 align-items-center mt-4">
          <Col xl={1} className="my-auto mr-n4" onClick={() => {
            this.props.goBack("info")
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
          <Col xl={4} className="p-0">
            <span style={{fontFamily: "Blockletter", fontSize: 42}}>what is code-off-duty?</span>
          </Col>
        </Row>
        <Row>

        </Row>
      </Container>
    );
  }
}

export default Information;