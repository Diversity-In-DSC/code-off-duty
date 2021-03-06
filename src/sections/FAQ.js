import React, { Component } from 'react';
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';
import FAQData from '../data/FAQData';
import { ReactComponent as PlayBtn } from '../assets/img/playbtn.svg';
import { ReactComponent as RePlayBtn } from '../assets/img/replay.svg';
import '../css/FAQ.css';
import { WindupChildren } from 'windups';
import { getDevice } from '../global';

class FAQ extends Component {
	constructor(props) {
		super(props);
		this.state = {
			FAQData: FAQData,
			device: getDevice()
		};

		this.mobileUi = {
			accrodingRow: this.state.device !== 'xl' ? 'ml-1 mr-n5 mt-n4 mb-5' : ''
		};
	}

	render() {
		return (
			<Container fluid className="fixed-top px-5" style={this.props.style} id="faq-section">
				<Row className="h-100 fixed-top">
					<Col>
						<Row className="mx-5 align-items-center mt-4">
							<Col
								xl={1}
								sm={1}
								md={1}
								xs={1}
								className={this.state.device === 'xs' ? 'ml-n5' : ''}
								onClick={() => {
									this.props.goBack(this.state.device === 'xs' ? 'mobile-faq' : 'faq');
								}}
							>
								<svg
									width="2em"
									height="2em"
									viewBox="0 0 13 10"
									style={{
										stroke: '#fff',
										fill: 'none',
										strokeWidth: 2,
										transform: 'rotateY(180deg)',
										cursor: 'pointer'
									}}
								>
									<path d="M1,5 L11,5" />
									<polyline points="8 1 12 5 8 9" />
								</svg>
							</Col>
							<Col xl={2} md={2} sm={2} xs={2} className="p-0 ml-5">
								<span style={{ fontFamily: 'Blockletter', fontSize: 42 }}>FAQs</span>
							</Col>
						</Row>
					</Col>
					<Col
						className="mr-5"
						style={{
							backgroundColor: 'rgba(0, 0, 0, 0)'
						}}
					>
						<Row className={`h-100 align-items-center ${this.mobileUi.accrodingRow}`}>
							<Accordion as={Col}>
								{this.state.FAQData.map((data, number) => (
									<Card
										key={number}
										style={{
											backgroundColor: 'rgba(0, 0, 0, 0)',
											borderColor: 'rgba(0, 200, 70, 0.5)'
										}}
									>
										<Accordion.Toggle
											as={Card.Header}
											eventKey={number.toString()}
											onClick={() => {
												let fqaData = this.state.FAQData;
												fqaData.forEach((d, index) => {
													d.played = index === number ? !d.played : false;
												});
												this.setState({ FAQData: fqaData });
											}}
											style={{
												borderBottomColor: 'rgba(0, 200, 70, 0.5)',
												borderBottomStyle: 'dashed'
											}}
										>
											<Row>
												<Col xl={11} md={11} sm={10} xs={10}>
													<h5>
														<span style={{ fontFamily: 'Blockletter' }}>Question</span>
														<span style={{ fontFamily: 'Poppins', fontSize: 18 }}>
															{' ' + data.question}
														</span>
													</h5>
												</Col>
												<Col
													xl={1}
													md={1}
													sm={2}
													xs={2}
													style={{
														// display: this.state.device === 'xs' ? 'none' : 'inline',
													}}
												>
													{!data.played ? (
														<PlayBtn style={{ width: 20, height: 20 }} />
													) : (
														<RePlayBtn
															style={{
																width: 20,
																height: 20,
																animationName: 'rotate-object',
																animationDuration: '1s',
																animationIterationCount: 1,
																transitionTimingFunction: 'ease-in'
															}}
														/>
													)}
												</Col>
											</Row>
										</Accordion.Toggle>
										<Accordion.Collapse eventKey={number.toString()}>
											<Card.Body>
												<h5>
													<span style={{ fontFamily: 'Blockletter' }}>Answer</span>
													<span
														style={{
															fontFamily: 'Poppins',
															fontSize: 18
														}}
													>
														{data.played && (
															<WindupChildren speed={500}>
																{' ' + data.answer}
															</WindupChildren>
														)}
													</span>
													<span
														style={{
															animation: 'blink 0.9s infinite'
														}}
													>
														|
													</span>
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
