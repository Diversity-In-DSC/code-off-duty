import React, { Component } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { getDevice } from '../global';

const eligibilityAndRules = {
	eligibility: [
		{
			rule:
				'All the students are welcome to participate irrespective of their university college, branch or any other criteria.'
		}
	],
	rules: [
		{
			rule: 'Maximum of 3 & Minimum of 2 Participants.',
			type: 1
		},
		{
			rule: 'A Github repository must be created during the hackathon only.',
			type: 1
		},
		{
			rule:
				'Video will be compulsory - Maximum 3 minutes demo video of the project else it will be disqualified.',
			type: 1
		},
		{
			rule: 'Pre-Built Projects shall NOT be entertained in the hackathon.',
			type: 0
		}
	]
};

class Information extends Component {
	state = {
		device: getDevice()
	};
	render() {
		return (
			<Container fluid className="fixed-top px-5" style={this.props.style} id="info-section">
				<Row className="mx-5 align-items-center mt-4">
					<Col
						xl={1}
						className="my-auto mr-n4"
						onClick={() => {
							this.props.goBack(this.state.device === 'xs' ? 'mobile-info' : 'info');
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
					<Col xl={4} className="p-0">
						<span style={{ fontFamily: 'Blockletter', fontSize: 42 }}>what is code-off-duty?</span>
					</Col>
				</Row>
				<Row>
					<Card className="bg-transparent text-white p-4" style={{ border: 'none' }}>
						<Card.Body>
							<p style={{ fontSize: 20 }}>
								<b>CODE-OFF-DUTY</b> is an event of <b>DSC WOW</b>, where innovators get an opportunity
								to merge their creative ideas with their coding skills to build something exemplary.
								It's a place where your ideas will get acknowledged.
							</p>
							<p style={{ fontSize: 20 }}>
								Expect more than 36 hrs of inspiring panel discussion,working and collaborating on
								futuristic and empowering tech products, networking opportunities with budding
								developers and lots of fun!
							</p>
						</Card.Body>
					</Card>
				</Row>
				<Row className="justify-content-center justify-content-around mt-5">
					<Col
						className="mb-5 mb-xl-0"
						style={{
							borderWidth: '5px',
							borderStyle: 'dashed',
							borderColor: 'rgb(0,255,70)',
							borderRadius: 10,
							backgroundColor: 'none'
						}}
						xs={10}
						xl={5}
					>
						<Row className="bg-transparent text-white justify-content-left p-3">
							<h3 style={{ fontFamily: 'Blockletter' }}>Rules</h3>
						</Row>
						{eligibilityAndRules.rules.map((rule, index) => (
							<Row className="mb-3 px-4" key={index}>
								<h5
									style={{
										color: rule.type ? 'rgb(255, 255, 255)' : 'rgb(255,255,255)'
									}}
								>
									{rule.rule}
								</h5>
							</Row>
						))}
					</Col>
					<Col
						className="mb-5 mb-xl-0 "
						style={{
							borderWidth: '5px',
							borderRadius: 10,
							borderStyle: 'dashed',
							borderColor: 'rgb(0,255,70)'
						}}
						xs={10}
						xl={5}
					>
						<Row className="bg-transparent text-white justify-content-left p-3">
							<h3 style={{ fontFamily: 'Blockletter' }}>Eligibility</h3>
						</Row>
						{eligibilityAndRules.eligibility.map((rule, index) => (
							<Row className="mb-3 px-4" key={index}>
								<h5 className="text-white">{rule.rule}</h5>
							</Row>
						))}
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Information;
