import React, { Component } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import PersonalCard from "./PersonalCard";

class SmjSection extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }

    render() {
        return (
            <Container className="mt-3">
                <Row>
                    {this.data.map((sectionData, index) => (
                        <Col sm={12} md={6} lg={4}>
                            <PersonalCard data={sectionData} />
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default SmjSection;