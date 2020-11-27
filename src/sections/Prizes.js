import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { getDevice } from '../global';

import '../css/prizes.css';

class Prizes extends Component {
	constructor(props) {
		super(props);
		this.PrizeData = [
			{
				title: '2nd Prize',
				data: '',
				height: '350px',
				border: '2px solid #db4437'
			},
			{
				title: '1st Prize..',
				data: '	',
				height: '390px',
				border: '2px solid #F4B400'
			},
			{
				title: '3rd Prize',
				data: '',
				height: '350px',
				border: '2px solid #0F9D58'
			}
		];
	}

	state = {
		device: getDevice()
	};

	render() {
		return (
			<Container fluid className="fixed-top px-xl-5 px-0" style={this.props.style} id="prizes-section">
				<Row className="mx-5 align-items-center mt-4">
					<Col
						xl={1}
						sm={1}
						md={1}
						xs={1}
						className={this.state.device === 'xs' ? 'ml-n5' : ''}
						onClick={() => {
							this.props.goBack(this.state.device === 'xs' ? 'mobile-prizes' : 'prizes');
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
						<span style={{ fontFamily: 'Blockletter', fontSize: 42 }}>Prizes</span>
					</Col>
				</Row>
				<Row
					sm={5}
					style={{ marginTop: this.state.device === 'xs' ? '3em' : '7em' }}
					className="d-flex align-items-center"
				>
					{this.PrizeData.map((prize, idx) => (
						<Col xl={3} className="mb-5 mb-xl-0" key={idx}>
							<Container
								style={{
									border: prize.border,
									width: '300px',
									height: prize.height,
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									color: 'white',
									textAlign: 'center'
								}}
								className={`prizes${idx}`}
							>
								<div className="prize">
									<Col
										style={{
											fontFamily: 'Blockletter',
											fontSize: this.state.device ? '20pt' : '15pt'
										}}
										className="prize-info"
									>
										<Row className="mt-3">{prize.data}</Row>
										<Row>{prize.data}</Row>
										<Row>{prize.title}</Row>
									</Col>
								</div>
							</Container>
						</Col>
					))}
				</Row>
			</Container>
		);
	}
}

export default Prizes;

/*<Col>
              <Container
                style={{
                  border: "5px solid #db4437",
                  width: "300px",
                  height: "350px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  textAlign: "center",
                }}
                className="prizes1"
              >
                <div className="prize">
                  <div className="prize-info">
                    <h1 className="mt-3">&#8377;10,000</h1>
                    <h4>+ Goodies worth upto 75,000</h4>
                    <h1>2nd prize</h1>
                  </div>
                </div>
              </Container>
            </Col>
            <Col className="mt-n4">
              <Container
                style={{
                  border: "2px solid #F4B400",
                  width: "300px",
                  height: "390px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  textAlign: "center",
                }}
                className="prizes2"
              >
                <div className="prize">
                  <div className="prize-info">
                    <h1 className="mt-3">&#8377;15,000</h1>
                    <h4>+ Goodies worth upto 1,00,000</h4>
                    <h1>1st prize</h1>
                  </div>
                </div>
              </Container>
            </Col>
            <Col>
              <Container
                style={{
                  border: "2px solid #0F9D58",
                  width: "300px",
                  height: "350px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  textAlign: "center",
                }}
                className="prizes3"
              >
                <div className="prize">
                  <div className="prize-info">
                    <h1 className="mt-3">&#8377;5,000</h1>
                    <h4>+ Goodies worth upto 50,000</h4>
                    <h1>3rd prize</h1>
                  </div>
                </div>
              </Container>
            </Col> */
