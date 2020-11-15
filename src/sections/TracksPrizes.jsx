import React, {Component} from 'react';
import {Container} from "react-bootstrap";

// Tracks and Prizes
class TracksPrizes extends Component {
  render() {
    return (
      <Container>
        <p className="h3 text-white" style={{fontFamily: 'Valorant'}}>Tracks</p>
        <p className="h3 text-white" style={{fontFamily: 'Valorant'}}>Prizes</p>
      </Container>
    );
  }
}

export default TracksPrizes;