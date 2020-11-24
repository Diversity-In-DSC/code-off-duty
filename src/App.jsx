import React from 'react';
import './App.css';
import { ReactComponent as JetPlane } from './assets/img/jet.svg';
import { ReactComponent as Arrow } from './assets/img/arrow.svg';

import { Col, Container, Row } from 'react-bootstrap';

import anime from 'animejs/lib/anime.es';
import ButtonHover from './components/Button';
import Tracks from './sections/Tracks';
import Prizes from './sections/Prizes';
import FAQ from './sections/FAQ';
import Information from './sections/Information';
import SmjComponent from './components/SMJComponent';
import { getDevice } from './global';
import { mobileSections, homeSections } from './data/sectionData';
import { goBack } from './animations';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.mobileSections = mobileSections;
		this.homeSections = homeSections;
	}

	componentDidMount() {
		const device = getDevice();
		const sections = document.querySelectorAll('#section');
		const t1 = anime.timeline({
			easing: 'easeInOutExpo',
			duration: 1500,
			autoplay: true
		});

		const arrowTime = anime.timeline({
			easing: 'easeOutBounce',
			duration: 1500,
			autoplay: true,
			direction: 'alternate',
			loop: true
		});

		arrowTime.add({
			targets: '#down-arrow',
			translateX: '10em'
		});

		const t2 = anime.timeline({
			easing: 'easeInOutExpo',
			duration: 1500,
			autoplay: true
		});

		t1
			.add({
				targets: '#jet-plane > svg',
				opacity: 0.18,
				top: device === 'xs' ? -50 : 50,
				complete: () => {
					const script = document.createElement('script');
					script.src = 'https://apply.devfolio.co';
					script.async = true;
					document.body.appendChild(script);
					script.onload = () => {
						// eslint-disable-next-line no-undef
						new Devfolio({ key: 'codeoffduty', buttonSelector: '#devfolio-apply-now' });
					};
				}
			})
			.add(
				{
					targets: '.cod-register',
					opacity: 1,
					complete: () => {
						document.querySelector('.cod-register').style.pointerEvents = 'auto';
					}
				},
				1500
			);

		t2.add({
			targets: sections,
			opacity: 1
		});
	}

	render() {
		return (
			<React.Fragment>
				<div style={{ fontFamily: 'Poppins', color: 'white', background: '#030304' }} onScroll={() => {}}>
					<Container fluid style={{ fontFamily: 'Blockletter', color: 'white' }} className="mx-auto px-0">
						<div id="main-div" className="main-div mb-5">
							<h1
								id="heading"
								style={{ textShadow: '0px 1px 6px #fff', zIndex: 1 }}
								className="text-center cod-title"
							>
								code-off duty
							</h1>
							<Row className="justify-content-center bg-danger" id="jet-plane">
								<JetPlane
									id="jet"
									style={{
										top: window.innerHeight,
										position: 'absolute'
									}}
								/>
							</Row>
							<Row
								className="px-md-5 mx-5 bg-transparent position-absolute"
								id="container"
								style={{ top: 0 }}
							>
								<Row className="justify-content-between mb-n5" id="first-row">
									{this.homeSections.firstRow.map((section, index) => (
										<Col key={index} xl={2} className="p-4">
											<Row
												className={`justify-content-center ${section.class}`}
												id="section"
												style={{ opacity: 0 }}
												onClick={() => section.onClick('normal')}
											>
												{section.image}
												<h2 className="mt-3 ml-4" id={section.titleID}>
													{section.title}
												</h2>
											</Row>
										</Col>
									))}
								</Row>
								<Row
									className="justify-content-center mt-5 cod-register w-100 pt-3"
									style={{ opacity: 0, pointerEvents: 'none' }}
									id="btn"
								>
									<ButtonHover
										label="apply with devfolio"
										onClick={() => {
											this.devfolio.click();
										}}
									/>
								</Row>
								<Row className="w-100 justify-content-center text-center mt-5" style={{ zIndex: 1 }}>
									<Col xl={1} className="mr-n4 p-4">
										<Arrow
											style={{ transform: 'rotate(90deg)' }}
											fill="rgb(0, 255, 70)"
											id="down-arrow"
											strokeWidth={2}
										/>
									</Col>
								</Row>
								<Row className="w-100">
									<span
										id="devfolio-apply-now"
										style={{ opacity: 0 }}
										ref={(n) => {
											this.devfolio = n;
										}}
									/>
								</Row>
								<Row
									className="justify-content-between my-n5 py-0 align-content-center"
									id="second-row"
								>
									{this.homeSections.secondRow.map((section, index) => (
										<Col key={index} md={2} className="p-4">
											<Row
												className={`justify-content-center ${section.class}`}
												id="section"
												style={{ opacity: 0 }}
												onClick={() => section.onClick('normal')}
											>
												{section.image}
												<h2 className="mt-3" id={section.titleID}>
													{section.title}
												</h2>
											</Row>
										</Col>
									))}
								</Row>
							</Row>
						</div>
					</Container>

					<div id="mobile" className="mx-auto d-xl-none">
						<Container fluid className="text-center">
							{this.mobileSections.map((mob, idx) => (
								<div onClick={() => mob.onClick('normal')} key={idx}>
									<Col
										xs={12}
										className={`mx-auto mb-5 ${mob.class}`}
										id="section"
										style={{ zIndex: 99 }}
									>
										{mob.image}
										<h2 className="title">{mob.title}</h2>
									</Col>
								</div>
							))}
						</Container>
					</div>

					<div id="smj">
						<SmjComponent />
					</div>

					<Tracks
						style={{ opacity: 0, display: 'none' }}
						goBack={(selector) => {
							goBack(selector, true);
						}}
					/>
					<Prizes
						style={{ opacity: 0, display: 'none' }}
						goBack={(selector) => {
							goBack(selector, true);
						}}
					/>
					<FAQ
						style={{ opacity: 0, display: 'none' }}
						goBack={(selector) => {
							goBack(selector, false);
						}}
					/>
					<Information
						style={{ opacity: 0, display: 'none' }}
						goBack={(selector) => {
							goBack(selector, false);
						}}
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
