import React, {Component} from 'react';
import {Container} from "react-bootstrap";

// Speakers, Mentors, Judges and Sponsor Us Card
class Support extends Component {
  render() {
    return (
      <Container>
        <p className="h3 text-white" style={{fontFamily: 'Valorant'}}>Speakers</p>
        <p className="h3 text-white" style={{fontFamily: 'Valorant'}}>Mentors</p>
        <p className="h3 text-white" style={{fontFamily: 'Valorant'}}>Judges</p>
        <p className="h3 text-white" style={{fontFamily: 'Valorant'}}>Want to Sponsor Us?</p>
      </Container>
    );
  }
}

export default Support;