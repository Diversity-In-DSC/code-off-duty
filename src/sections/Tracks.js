import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ReactComponent as MLlogo } from '../assets/img/brain.svg';
import { ReactComponent as ARVRlogo } from '../assets/img/ARVR.svg';
import { ReactComponent as BlockchainLogo } from '../assets/img/blockchain.svg';
import { ReactComponent as OIlogo } from '../assets/img/innovation.svg';
import TrackModal from '../components/TrackModal';

import { getDevice } from '../global';

class Tracks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			trackVisible: [],
			device: getDevice()
		};
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		Array.prototype.push.apply(this.state.trackVisible, [ false, false, false, false ]);

		this.tracks = [
			{
				name: 'AR/VR',
				show: false,
				color: '#F4B400',
				c: this.state.device === 'xs' ? 'track-ARVR' : 'track-ARVR ml-5',
				image: (
					<ARVRlogo
						style={{
							width: this.state.device === 'xs' ? '4em' : '5em',
							height: 'auto'
						}}
					/>
				),
				onClick: () => this.handleShow(0),
				desc:
					'Augmented reality (AR) adds digital elements to a live view often by using the camera on a smartphone. Examples of augmented reality experiences include Snapchat lenses and the game Pokemon Go. Virtual reality (VR) implies a complete immersion experience that shuts out the physical world'
			},
			{
				name: 'Blockchain',
				show: false,
				color: '#4285F4',
				c: this.state.device === 'xs' ? 'track-BC' : 'track-BC ml-5',
				image: (
					<BlockchainLogo
						style={{
							width: this.state.device === 'xs' ? '4em' : '5em',
							height: 'auto'
						}}
					/>
				),
				onClick: () => this.handleShow(1),
				desc:
					'Blockchain is a system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system. A blockchain is essentially a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems on the blockchain.'
			},
			{
				name: 'AI/ML',
				show: false,
				color: '#DB4437',
				c: 'track-ml',
				image: (
					<MLlogo
						style={{
							width: this.state.device === 'xs' ? '4em' : '5em',
							height: 'auto'
						}}
					/>
				),
				onClick: () => this.handleShow(2),
				desc:
					'Artificial Intelligence (AI) and Machine Learning (ML) are two very hot buzzwords right now, and often seem to be used interchangeably. ... Machine Learning is a current application of AI based around the idea that we should really just be able to give machines access to data and let them learn for themselves.'
			},
			{
				name: 'Open Innovation',
				show: false,
				color: '#0F9D58',
				c: this.state.device === 'xs' ? 'track-OI' : 'track-OI ml-5',
				image: (
					<OIlogo
						style={{
							width: this.state.device === 'xs' ? '4em' : '5em',
							height: 'auto'
						}}
					/>
				),
				onClick: () => this.handleShow(3),
				desc:
					'Open innovation is “the use of purposive inflows and outflows of knowledge to accelerate internal innovation, and expand the markets for external use of innovation, respectively.”'
			}
		];
	}

	handleClose = () => {
		let trackVisible = [];
		Array.prototype.push.apply(trackVisible, [ false, false, false, false ]);
		this.setState({
			trackVisible
		});
	};

	handleShow = (i) => {
		let trackVisible = this.state.trackVisible;
		trackVisible[i] = true;
		this.setState({ trackVisible });
	};

	render() {
		return (
			<Container fluid className="fixed-top px-5" style={this.props.style} id="tracks-section">
				<Row className="mx-5 align-items-center mt-4">
					<Col
						xl={1}
						sm={1}
						md={1}
						xs={1}
						className={this.state.device === 'xs' ? 'ml-n5' : ''}
						onClick={() => {
							this.props.goBack(this.state.device === 'xs' ? 'mobile-tracks' : 'tracks');
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
						<span style={{ fontFamily: 'Blockletter', fontSize: 42 }}>Tracks</span>
					</Col>
				</Row>
				<Row className="justify-content-center">
					{this.tracks.map((track, index) => (
						<Col xl={2} className="pl-0 pl-xl-5 ml-2 ml-xl-0" key={index}>
							<div
								style={{
									boxShadow: '0 1px 10px #888',
									position: 'fixed',
									top: '-10em',
									cursor: 'pointer',
									background: '#fff',
									borderRadius: this.state.device === 'xs' ? 10 : '50%',
									display: 'flex',
									width: this.state.device === 'xs' ? '70%' : '10em',
									height: this.state.device === 'xs' ? '8em' : '10em',
									justifyContent: 'center',
									alignItems: 'center'
								}}
								className={track.c}
								onClick={() => {
									track.onClick();
								}}
							>
								<div className="track-img text-md-center text-left">
									{track.image}
									{this.state.device !== 'xs' && <br />}
									<span
										style={{
											color: 'black',
											fontSize: this.state.device === 'xs' ? '20pt' : '15pt',
											fontFamily: 'Blockletter'
										}}
										className="mt-3 mt-xl-n4 text-center ml-xl-0 ml-0"
									>
										{track.name}
									</span>
								</div>
							</div>
						</Col>
					))}
				</Row>

				{this.tracks.map((track, index) => (
					<React.Fragment key={index}>
						<TrackModal
							show={this.state.trackVisible[index]}
							title={track.name}
							desc={track.desc}
							color={track.color}
							handleClose={this.handleClose}
						/>
					</React.Fragment>
				))}
			</Container>
		);
	}
}

export default Tracks;
