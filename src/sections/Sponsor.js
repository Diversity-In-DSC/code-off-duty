import React, { Component } from 'react';
import { Row, Col, Container, Accordion, Card } from 'react-bootstrap';
import sponsorData from '../data/sponserData';
import { getDevice } from '../global';

export default class Sponsor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sponserData: sponsorData,
			device: getDevice(),
			sponsorTypes: [
				'Title Sponsors',
				'Platinum Sponsors',
				'Gold Sponsors',
				'Silver Sponsors',
				'Education Partners',
				'Community Partners',
				'Media Partners'
			]
		};

		this.mobileUi = {
			accordionRow: this.state.device !== 'xl' ? 'ml-1 mr-n5 mt-n4 mb-5' : ''
		};
	}

	render() {
		return (
			<Container className="mt-5">
				<Row className="mb-4 justify-content-center">
					<h1 style={{ fontFamily: 'Blockletter' }}>Sponsors</h1>
				</Row>
				<Row className={`h-100 align-items-center ${this.mobileUi.accordionRow}`}>
					<Accordion as={Col} className="mr-5 mr-xl-0">
						{this.state.sponserData.map((sponsors, number) => (
							<Card
								key={number}
								style={{
									backgroundColor: 'rgba(0, 0, 0, 0)',
									borderColor: 'rgba(0, 200, 70, 1)',
									borderWidth: 2
								}}
							>
								<Accordion.Toggle
									as={Card.Header}
									eventKey={number.toString()}
									style={{
										borderBottomColor: 'rgba(0, 200, 70, 0.5)',
										borderBottomStyle: 'dashed',
										cursor: 'pointer'
									}}
								>
									<Row className="justify-content-center">
										<Col
											xl={11}
											md={11}
											sm={10}
											xs={10}
											className="text-center align-content-center"
										>
											<span style={{ fontFamily: 'Blockletter', fontSize: 24 }}>
												{this.state.sponsorTypes[number]}
											</span>
										</Col>
									</Row>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey={number.toString()}>
									<Container>
										<Row className="justify-content-center">
											{sponsors.map((sponsor, index) => (
												<Col key={index} xl={4}>
													<Card
														className="m-3 align-items-center bg-white p-3"
														style={{
															borderColor: 'rgba(0, 200, 70, 1)',
															borderWidth: 5,
															borderStyle: 'dashed'
														}}
													>
														<div className="my-card">
															<a href={sponsor.link} target="blank">
																{<Card.Img src={sponsor.img} />}
															</a>
														</div>
													</Card>
												</Col>
											))}
										</Row>
									</Container>
								</Accordion.Collapse>
							</Card>
						))}
					</Accordion>
				</Row>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
			</Container>
		);
	}
}
