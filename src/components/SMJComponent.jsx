import React, {Component} from 'react';
import {Container, Tab} from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import speakersData from "../data/speakersData";
import judgesData from "../data/judgesData";
import mentorsData from "../data/mentorsData";
import SmjSection from "./SMJSection";
import "../css/SMJ.css"

class SmjComponent extends Component {
  constructor(props) {
    super(props);
    this.tabbedData = [
      {
        title: "Speakers",
        data: speakersData,
      },
      {
        title: "Judges",
        data: judgesData,
      },
      {
        title: "Mentors",
        data: mentorsData,
      }
    ]
  }

  render() {
    return (
      <div>
        <Container>
          <Tabs variant={"pills"} defaultActiveKey={"Speakers"} className="smj" fill>
            {this.tabbedData.map((tabData, index) => (
              <Tab eventKey={tabData.title} title={tabData.title} tabClassName="h4">
                <SmjSection data={tabData.data}/>
              </Tab>
            ))}
          </Tabs>
        </Container>
      </div>
    );
  }
}

export default SmjComponent;