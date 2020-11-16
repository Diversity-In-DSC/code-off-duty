import React, {Component} from 'react';
import {Row, Container, Col} from "react-bootstrap";
import ButtonHover from "../components/Button";

const eligibilityAndRules = {
  eligibility: [
    {
      rule: "All the students are welcome to participate irrespective of their university college, branch or any other criteria."
    }
  ],
  rules: [
    {
      rule: "Maximum of 3 & Minimum of 2 Participants.",
      type: 1,
    },
    {
      rule: "A Github repository must be created during the hackathon only.",
      type: 1,
    },
    {
      rule: "Video will be compulsory - Maximum 3 minutes demo video of the project else it will be disqualified.",
      type: 1,
    },
    {
      rule: "Pre-Built Projects shall NOT be entertained in the hackathon.",
      type: 0,
    }
  ],
}

// What is Code Off Duty?
class Information extends Component {
  render() {
    return (
      <Container className="py-5">
        <Row className="my-5 justify-content-center">
          <p className="text-white p-0 m-0" id="title" style={{fontFamily: 'Valorant'}}>code-off duty</p>
        </Row>
        <Row className="mb-5 justify-content-center">
          <ButtonHover label="REGISTER NOW"/>
        </Row>
        <Row className="py-5 justify-content-center text-white">
          <h3 className="mr-2">
            What is
          </h3>
          <h3 style={{color: "#ffe05d", fontFamily: "Valorant"}}>code-off duty <span
            style={{fontFamily: "Content"}} className="text-white">?</span></h3>
        </Row>
        <Row className="text-white text-center justify-content-center">
          <Col lg={7}>
            <h5>
              <span style={{color: "#ffe05d", fontFamily: "Valorant"}}>code-off duty</span> is an event of <span
              style={{color: "#ffe05d"}}>DSC WOW</span>, where innovators get an opportunity to
              merge their creative ideas with their technical skills to build something exemplary. It's a place where
              your
              ideas will get acknowledged.
            </h5>
          </Col>
        </Row>
        <Row className="text-white text-center justify-content-center">
          <Col lg={7}>
            <h5>
              Expect more than <span
              style={{color: "#ffe05d"}}>36 hours</span> of inspiring panel discussions, working and collaborating on
              futuristic and
              empowering tech products,
              networking opportunities with budding developers and <span
              style={{color: "#ffe05d"}}>lots of fun!</span>
            </h5>
          </Col>
        </Row>

        <Row className="justify-content-center justify-content-around mt-5">
          <Col className="mb-5 mb-xl-0"
               style={{border: "2px solid #ffe05d", borderRadius: 12, boxShadow: "10px -10px rgba(255, 224, 93, 0.5)", backgroundColor: "#111"}} xs={11} xl={5}>
            <Row className="text-white justify-content-center my-3">
              <h3 style={{fontFamily: "Valorant"}}>Rules</h3>
            </Row>
            {eligibilityAndRules.rules.map(rule => <Row className="mb-3 px-4">
              <h6
                style={{
                  fontWeight: "bold",
                  color: rule.type ? "rgb(0, 255, 70)" : "rgb(255,100,100)"
                }}>{rule.rule}</h6>
            </Row>)}
          </Col>
          <Col className="my-auto"
               style={{border: "2px solid #ffe05d", borderRadius: 12, boxShadow: `10px -10px rgba(255, 224, 93, 0.5)`, backgroundColor: "#111"}} xs={11} xl={5}>
            <Row className="text-white justify-content-center my-3">
              <h3 style={{fontFamily: "Valorant"}}>Eligibility</h3>
            </Row>
            {eligibilityAndRules.eligibility.map(rule => <Row className="mb-3 px-4">
              <h6 className="text-white" style={{fontWeight: "bold"}}>{rule.rule}</h6>
            </Row>)}
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Information;