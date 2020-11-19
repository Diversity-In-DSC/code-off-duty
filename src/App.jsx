import React from "react";
import "./App.css"
import {ReactComponent as JetPlane} from "./assets/img/jet.svg";
import {ReactComponent as TracksMap} from "./assets/img/tracks.svg";
import {ReactComponent as FAQIcon} from "./assets/img/faq.svg";
import {ReactComponent as Prizes} from "./assets/img/prizes.svg";
import {ReactComponent as InfoTent} from "./assets/img/home.svg";

import {Col, Container, Row} from "react-bootstrap";

import anime from "animejs/lib/anime.es";
import ButtonHover from "./components/Button";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.showSection = this.showSection.bind(this)

    this.homeSections = {
      firstRow: [
        {
          onClick: () => {
            this.showSection("tracks", "0deg", {x: "25%", y: "23%"}, 10, 0.8)
          },
          title: "Tracks",
          class: "tracks",
          titleID: "tracks-title",
          image: <TracksMap style={{background: "none", width: "100%", height: "100%", transform: "rotate(-30deg)"}}/>
        },
        {
          onClick: () => {
            this.showSection("prizes", "0deg", {x: "-7%", y: "20%"}, 3, 1.0)
          },
          title: "Prizes",
          class: "prizes",
          titleID: "prizes-title",
          image: <Prizes style={{background: "none", width: "100%", height: "100%"}}/>
        }
      ],
      secondRow: [
        {
          onClick: () => {
            this.showSection("faq", "0deg", {x: "28%", y: "-37%"}, 3, 1.0)
          },
          title: "FAQs",
          class: "faq",
          titleID: "faq-title",
          image: <FAQIcon style={{background: "none", width: "100%", height: "100%", transform: "rotate(-30deg)"}}/>
        },
        {
          onClick: () => {
            this.showSection("info", "0deg", {x: "-15%", y: "-5%"}, 20, 0.3)
          },
          title: "What is COD?",
          class: "info",
          titleID: "info-title",
          image: <InfoTent style={{background: "none", width: "100%", height: "100%"}}/>
        }
      ]
    }
  }

  componentDidMount() {
    const sections = document.querySelectorAll("#section")
    const t1 = anime.timeline({
      easing: "easeInOutExpo",
      duration: 1500,
      autoplay: true
    })
    const t2 = anime.timeline({
      easing: "easeInOutExpo",
      duration: 1500,
      autoplay: true
    })

    t1.add({
      targets: "#jet-plane > svg",
      opacity: 0.18,
      top: 50
    })

    t2.add({
      targets: sections,
      opacity: 1
    })

  }

  getOtherSections(selector) {
    const rest = Array.prototype.filter.call(document.querySelectorAll("#section"), (node) => {
      return !node.classList.contains(selector)
    })
    Array.prototype.push.apply(rest, [document.querySelector("#jet-plane > svg"),
      document.querySelector(".cod-title"),
      document.querySelector(".cod-register")])
    return rest;
  }

  showSection(selector, rotate, translate, scale, opacity) {
    const rest = this.getOtherSections(selector)

    const t1 = anime.timeline({
      easing: "easeInOutExpo",
      duration: 2000,
      autoplay: true
    })

    const t2 = anime.timeline({
      easing: "easeInOutExpo",
      duration: 1500,
      autoplay: true
    })

    const t3 = anime.timeline({
      easing: "easeInOutExpo",
      duration: 1500,
      autoplay: true
    })

    t1.add({
      targets: `.${selector} > svg`,
      scale,
      rotate,
      translateX: translate.x,
      translateY: translate.y,
      opacity
    })

    t2.add({
      targets: rest,
      opacity: 0
    })

    t3.add({
      targets: `.${selector} > h2`,
      opacity: 0
    })
  }

  render() {
    return (
      <Container fluid style={{fontFamily: "Blockletter", color: "white", background: "#030304"}}>
        <Row className="justify-content-center cod-title" style={{marginTop: "18%"}}>
          <h1 style={{fontSize: 100, textShadow: "0px 1px 6px #fff", zIndex: 1}} className="m-0">code-off duty</h1>
        </Row>
        <Row className="justify-content-center mt-5 cod-register">
          <ButtonHover label="register now"/>
        </Row>
        <Row className="justify-content-center" id="jet-plane">
          <JetPlane
            style={{top: window.innerHeight, position: "fixed", background: "transparent"}}/>
        </Row>
        <Row className="px-5 mx-5 bg-transparent h-100 fixed-top align-content-between">
          <Row className="justify-content-between">
            {this.homeSections.firstRow.map((section, index) => <Col key={index} xl={2}
                                                                     className="p-4 d-flex flex-column">
              <Row className={`justify-content-center ${section.class}`} id="section" style={{opacity: 0}}
                   onClick={section.onClick}
              >
                {section.image}
                <h2 className="mt-3" id={section.titleID}>{section.title}</h2>
              </Row>
            </Col>)}
          </Row>
          <Row className="justify-content-between">
            {this.homeSections.secondRow.map((section, index) => <Col key={index} xl={2}
                                                                      className="p-4 d-flex flex-column">
              <Row className={`justify-content-center ${section.class}`} id="section" style={{opacity: 0}}
                   onClick={section.onClick}
              >
                {section.image}
                <h2 className="mt-3" id={section.titleID}>{section.title}</h2>
              </Row>
            </Col>)}
          </Row>
        </Row>
      </Container>
    );
  }
}

export default App;
