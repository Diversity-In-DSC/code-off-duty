import React from 'react';
import './App.css';
import { ReactComponent as JetPlane } from './assets/img/jet.svg';
import { ReactComponent as Arrow } from './assets/img/arrow.svg';

import { Col, Container, Row } from 'react-bootstrap';

import anime from 'animejs/lib/anime.es';
// import ButtonHover from './components/Button';
import './components/ButtonStyles.css';
import Tracks from './sections/Tracks';
import Prizes from './sections/Prizes';
import FAQ from './sections/FAQ';
import Information from './sections/Information';
import SmjComponent from './components/SMJComponent';
import { getDevice } from './global';
import { mobileSections, homeSections } from './data/sectionData';
import { goBack } from './animations';

import Sponsor from './sections/Sponsor';

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
						new Devfolio({
							key: 'codeoffduty',
							buttonSelector: '#devfolio-apply-now'
						});
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
				<div
					style={{
						fontFamily: 'Poppins',
						color: 'white',
						background: '#030304'
					}}
					onScroll={() => {}}
				>
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
									className="justify-content-center mt-5 cod-register w-100"
									style={{ opacity: 0, pointerEvents: 'none' }}
									id="btn"
								>
									<Col className="ml-5 pl-4 ml-xl-4" xl={12}>
										<button id="devfolio-apply-now" className="mx-auto">
											<svg
												className="logo"
												xmlns="http://www.w3.org/2000/svg"
												fill="#fff"
												viewBox="0 0 115.46 123.46"
												style={{ height: '24px', width: '24px' }}
											>
												<path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z" />
												<path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z" />
											</svg>Apply with Devfolio
										</button>
									</Col>
									{/* <ButtonHover
                    label="apply with devfolio"
                    onClick={() => {
                      this.devfolio.click();
                    }}
                  /> */}
								</Row>
								<Row className="w-100 justify-content-center text-center mt-5" style={{ zIndex: 1 }}>
									<Col xl={1} className="mr-n5 ml-4 p-4 p-xl-4 mr-xl-n4 ml-xl-0">
										<Arrow
											style={{ transform: 'rotate(90deg)' }}
											fill="rgb(0, 255, 70)"
											id="down-arrow"
											strokeWidth={2}
										/>
									</Col>
								</Row>
								<Row className="w-100" />
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

					<div>
						<Sponsor />
					</div>

					<Tracks
						style={{ opacity: 0, display: 'none' }}
						goBack={(selector) => {
							goBack(selector, true);
						}}
					/>
					<Prizes
						style={{
							opacity: 0,
							display: 'none',
							position: 'absolute',
							top: 0,
							zIndex: 999
						}}
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
						style={{
							opacity: 0,
							display: 'none',
							position: 'absolute',
							top: 0,
							zIndex: 999
						}}
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
