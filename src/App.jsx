import React from "react";
import "./App.css";
import { ReactComponent as JetPlane } from "./assets/img/jet.svg";
import { ReactComponent as TracksMap } from "./assets/img/tracks.svg";
import { ReactComponent as FAQIcon } from "./assets/img/faq.svg";
import { ReactComponent as PrizesMedal } from "./assets/img/prizes.svg";
import { ReactComponent as InfoTent } from "./assets/img/home.svg";
import { ReactComponent as Arrow } from "./assets/img/arrow.svg";

import { Col, Container, Row } from "react-bootstrap";

import anime from "animejs/lib/anime.es";
import ButtonHover from "./components/Button";
import Tracks from "./sections/Tracks";
import Prizes from "./sections/Prizes";
import FAQ from "./sections/FAQ";
import Information from "./sections/Information";
import SmjComponent from "./components/SMJComponent";
import { disableScroll, enableScroll } from "./global";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.showSection = this.showSection.bind(this);
    this.goBack = this.goBack.bind(this);
    this.homeSections = {
      firstRow: [
        {
          reverseAnimation: (direction) => {
            this.showSection(
              "tracks",
              {
                rotate: "-30deg",
                translate: { x: "0", y: "0" },
                scale: 1,
                opacity: 1,
              },
              direction
            );
            enableScroll();
          },
          onClick: (direction) => {
            this.showSection(
              "tracks",
              {
                rotate: "0deg",
                translate: { x: "3.2em", y: "2.8em" },
                scale: 10,
                opacity: 0.8,
              },
              direction
            );
            this.animations();
            disableScroll();
          },
          title: "Tracks",
          class: "tracks",
          titleID: "tracks-title",
          image: (
            <TracksMap
              style={{
                background: "none",
                width: "100%",
                height: "100%",
                transform: "rotate(-30deg)",
              }}
            />
          ),
        },
        {
          reverseAnimation: (direction) => {
            this.showSection(
              "prizes",
              {
                rotate: "0deg",
                translate: { x: "0%", y: "0%" },
                scale: 1,
                opacity: 1,
              },
              direction
            );
            enableScroll();
          },
          onClick: (direction) => {
            this.showSection(
              "prizes",
              {
                rotate: "0deg",
                translate: { x: "-7%", y: "20%" },
                scale: 3,
                opacity: 1.0,
              },
              direction
            );
            disableScroll();
          },
          title: "Prizes",
          class: "prizes",
          titleID: "prizes-title",
          image: (
            <PrizesMedal
              style={{ background: "none", width: "100%", height: "100%" }}
              className="ml-4"
            />
          ),
        },
      ],
      secondRow: [
        {
          reverseAnimation: (direction) => {
            this.showSection(
              "faq",
              {
                rotate: "30deg",
                translate: { x: "0%", y: "0%" },
                scale: 1,
                opacity: 1,
              },
              direction
            );
            enableScroll();
          },
          onClick: (direction) => {
            this.showSection(
              "faq",
              {
                rotate: "0deg",
                translate: { x: "28%", y: "-37%" },
                scale: 3,
                opacity: 1.0,
              },
              direction
            );
            disableScroll();
          },
          title: "FAQs",
          class: "faq",
          titleID: "faq-title",
          image: (
            <FAQIcon
              style={{
                background: "none",
                width: "90%",
                height: "90%",
                transform: "rotate(-30deg)",
              }}
              className="mt-4"
            />
          ),
        },
        {
          reverseAnimation: (direction) => {
            this.showSection(
              "info",
              {
                rotate: "0deg",
                translate: { x: "0%", y: "0%" },
                scale: 1,
                opacity: 1,
              },
              direction
            );
            enableScroll();
          },
          onClick: (direction) => {
            this.showSection(
              "info",
              {
                rotate: "0deg",
                translate: { x: "-15%", y: "-20%" },
                scale: 18,
                opacity: 0.3,
              },
              direction
            );
            disableScroll();
          },
          title: "What is COD?",
          class: "info",
          titleID: "info-title",
          image: (
            <InfoTent
              style={{ background: "none", width: "100%", height: "100%" }}
            />
          ),
        },
      ],
    };
  }

  componentDidMount() {
    enableScroll();
    const sections = document.querySelectorAll("#section");
    const t1 = anime.timeline({
      easing: "easeInOutExpo",
      duration: 1500,
      autoplay: true,
    });

    const arrowTime = anime.timeline({
      easing: "easeOutBounce",
      duration: 1500,
      autoplay: true,
      direction: "alternate",
      loop: true,
    });

    arrowTime.add({
      targets: "#down-arrow",
      translateX: "10em",
    });

    const t2 = anime.timeline({
      easing: "easeInOutExpo",
      duration: 1500,
      autoplay: true,
    });

    t1.add({
      targets: "#jet-plane > svg",
      opacity: 0.18,
      top: 50,
      complete: () => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co';
        script.async = true;
        document.body.appendChild(script);
        script.onload = () => {
          // eslint-disable-next-line no-undef
          new Devfolio({ key: 'codeoffduty', buttonSelector: '#devfolio-apply-now' });
        }
      }
    }).add({
      targets: ".cod-register",
      opacity: 1,
      complete: () => {
        document.querySelector(".cod-register").style.pointerEvents = "auto"
      }
    }, 1500)

    t2.add({
      targets: sections,
      opacity: 1,
    });
  }

  animations = () => {
    const t5 = anime.timeline({
      easing: "easeInOutQuad",
      duration: 750,
      autoplay: true,
    });
    t5.add({
      delay: "1000",
      duration: "1000",
      targets: ".track-ml",
      translateY: "13em",
      opacity: "1",
    })
      .add(
        {
          delay: "1000",
          targets: ".track-ARVR",
          keyframes: [{ translateY: "25em" }],
          opacity: "1",
        },
        600
      )
      .add(
        {
          delay: "1000",
          targets: ".track-BC",
          keyframes: [{ translateY: "39em" }],
          opacity: "1",
        },
        800
      )
      .add(
        {
          delay: "1000",
          targets: ".track-OI",
          keyframes: [{ translateY: "45em" }],
          opacity: "1",
        },
        1200
      );

    document.querySelector(".tracks").onClick = t5.play();
  };

  getOtherSections(selector) {
    const rest = Array.prototype.filter.call(
      document.querySelectorAll("#section"),
      (node) => {
        return !node.classList.contains(selector);
      }
    );
    Array.prototype.push.apply(rest, [
      document.querySelector(".cod-title"),
      document.querySelector(".cod-register"),
      document.querySelector(`.${selector} > h2`),
      document.querySelector("#smj"),
    ]);
    return rest;
  }

  goBack(selector, firstRow) {
    if (firstRow) {
      const section = this.homeSections.firstRow.filter(
        (s) => s.class === selector
      )[0];
      section.reverseAnimation("reverse");
    } else {
      const section = this.homeSections.secondRow.filter(
        (s) => s.class === selector
      )[0];
      section.reverseAnimation("reverse");
    }

    const t6 = anime.timeline({
      easing: "easeInOutQuad",
      duration: 750,
      autoplay: true,
    });

    t6.add({
      targets: ".track-ml",
      keyframes: [{ translateY: 0 }],
      opacity: "0",
    })
      .add(
        {
          targets: ".track-ARVR",
          keyframes: [{ translateY: 0 }],
          opacity: "0",
        },
        100
      )
      .add(
        {
          targets: ".track-BC",
          keyframes: [{ translateY: 0 }],
          opacity: "0",
        },
        200
      )
      .add(
        {
          targets: ".track-OI",
          keyframes: [{ translateY: 0 }],
          opacity: "0",
        },
        300
      );
  }

  showSection(selector, transforms, direction) {
    console.log(direction);
    const rest = this.getOtherSections(selector);
    const target = document.querySelector(`.${selector} > svg`);
    const targetSection = document.querySelector(`#${selector}-section`);
    targetSection.style.display = "block";
    target.style.zIndex = 3;
    target.style.cursor = direction === "normal" ? "default" : "pointer";
    const jet = document.querySelector("#jet-plane > svg");

    const t1 = anime.timeline({
      easing: "easeInOutExpo",
      duration: 2000,
      autoplay: true,
    });

    const t2 = anime.timeline({
      easing: "easeInOutExpo",
      duration: 1000,
      autoplay: true,
    });

    const t3 = anime.timeline({
      easing: "easeInOutExpo",
      duration: 1500,
      autoplay: true,
    });

    const t4 = anime.timeline({
      easing: "easeInOutExpo",
      duration: 1500,
      autoplay: true,
    });

    t1.add({
      targets: `.${selector} > svg`,
      scale: transforms.scale,
      rotate: transforms.rotate,
      translateX: transforms.translate.x,
      translateY: transforms.translate.y,
      opacity: transforms.opacity,
    }).add(
      {
        targets: "#down-arrow",
        opacity: direction === "normal" ? 0 : 1,
      },
      0
    );

    t2.add({
      targets: [`#${selector}-section`],
      opacity: direction === "normal" ? 1 : 0,
    }).add({
      targets: ".revealing-soon",
      translateY: "30vh",
      easing: "easeOutBounce",
    });

    t3.add({
      targets: rest,
      opacity: direction === "normal" ? 0 : 1,
      complete: () => {
        if (direction === "normal") {
          rest.forEach((node) => {
            node.style.pointerEvents = "none";
          });
        } else {
          targetSection.style.display = "none";
          rest.forEach((node) => {
            node.style.pointerEvents = "auto";
          });
        }
      },
    });

    t4.add({
      targets: jet,
      opacity: direction === "normal" ? 0 : 0.18,
    });
  }

  render() {
    return (
      <>
        <div style={{ fontFamily: "Poppins", color: "white", background: "#030304" }} onScroll={() => { }}>
          <Container fluid style={{ fontFamily: "Blockletter", color: "white" }} className="mx-auto px-0">
            <div id="main-div" className="main-div">
              <h1 id="heading" style={{ textShadow: "0px 1px 6px #fff", zIndex: 1 }} className="text-center cod-title">
                code-off duty
             </h1>
              <Row className="justify-content-center" id="jet-plane">
                <JetPlane
                  id="jet"
                  style={{
                    top: window.innerHeight,
                    position: "absolute",
                    background: "transparent",
                  }} />
              </Row>
              <Row
                className="px-md-5 mx-5 bg-transparent" id="container"
                style={{ position: "absolute", top: 0 }}>
                <Row className="justify-content-between" id='first-row'>
                  {this.homeSections.firstRow.map((section, index) => (
                    <Col key={index} xl={2} className="p-4">
                      <Row
                        className={`justify-content-center ${section.class}`}
                        id="section"
                        style={{ opacity: 0 }}
                        onClick={() => section.onClick("normal")}>
                        {section.image}
                        <h2 className="mt-3" id={section.titleID}>
                          {section.title}
                        </h2>
                      </Row>
                    </Col>))}
                </Row>
                <Row className="justify-content-center mt-5 cod-register w-100" style={{ opacity: 0, pointerEvents: "none" }} id='btn'>
                  <ButtonHover label="apply with devfolio" onClick={() => {
                    this.devfolio.click()
                  }} />
                </Row>
                <Row>
                  <span id="devfolio-apply-now" style={{ opacity: 0 }} ref={(n) => {
                    this.devfolio = n
                  }} />
                </Row>
                <Row className="w-100 justify-content-center mt-5 px-5" style={{ zIndex: 1 }}>
                  <Col xl={1}>
                    <Arrow style={{ transform: "rotate(90deg)" }} fill="rgb(0, 255, 70)" id="down-arrow" strokeWidth={2} />
                  </Col>
                </Row>
                <Row className="justify-content-between" id="second-row">
                  {this.homeSections.secondRow.map((section, index) => (
                    <Col key={index} md={2} className="p-4">
                      <Row
                        className={`justify-content-center ${section.class}`}
                        id="section"
                        style={{ opacity: 0 }}
                        onClick={() => section.onClick("normal")}>
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

          <div id='mobile' className="mx-auto d-md-none">
            <div className='text-center'>
              <Col sm={10} className='mx-auto mb-5'><TracksMap className='img-svg tracks ' /><h2 className='title'>TRACKS</h2></Col>
              <Col sm={10} className='mx-auto mb-5'><FAQIcon className='img-svg' /><h2 className='title'>FAQS</h2></Col>
              <Col sm={10} className='mx-auto mb-4'><PrizesMedal className='img-svg' /><h2 className='title'>PRIZES</h2></Col>
              <Col sm={10} className='mx-auto'><InfoTent className='img-svg' /><h2 className='title'>WHAT IS COD ?</h2></Col>
            </div>
          </div>

          <div id="smj">
            <SmjComponent />
          </div>

          <Tracks
            style={{ opacity: 0, display: "none" }}
            goBack={(selector) => {
              this.goBack(selector, true);
            }}
          />
          <Prizes
            style={{ opacity: 0, display: "none" }}
            goBack={(selector) => {
              this.goBack(selector, true);
            }}
          />
          <FAQ
            style={{ opacity: 0, display: "none" }}
            goBack={(selector) => {
              this.goBack(selector, false);
            }}
          />
          <Information
            style={{ opacity: 0, display: "none" }}
            goBack={(selector) => {
              this.goBack(selector, false);
            }}
          />
        </div>
      </>
    );
  }
}

export default App;
