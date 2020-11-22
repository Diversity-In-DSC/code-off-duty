import React, {Component} from 'react';
import {Container, Row, Tab} from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import spekersData from "../data/spekersData";
import judgesData from "../data/judgesData";
import mentorsData from "../data/mentorsData";
import SmjSection from "./SMJSection";

class SmjComponent extends Component {
    constructor(props) {
        super(props);
        this.tabbedData = [
            {
                title: "Spekers",
                data: spekersData,
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
                        <Tabs variant={"pills"} defaultActiveKey={"Spekers"} fill>
                            {this.tabbedData.map((tabData, index) => (
                                    <Tab eventKey={tabData.title} title={tabData.title}>
                                        <SmjSection data={tabData.data} />
                                    </Tab>
                            ))}
                        </Tabs>
                </Container>
            </div>
        );
    }
}

export default SmjComponent;