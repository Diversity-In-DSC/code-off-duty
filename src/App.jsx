import React from "react";
import "./App.css"
import {ReactComponent as JetPlane} from "./assets/img/jet.svg";
import {ReactComponent as TracksMap} from "./assets/img/tracks.svg";
import {ReactComponent as FAQIcon} from "./assets/img/faq.svg";
import {ReactComponent as PrizesMedal} from "./assets/img/prizes.svg";
import {ReactComponent as InfoTent} from "./assets/img/home.svg";

import {Col, Container, Row} from "react-bootstrap";

import anime from "animejs/lib/anime.es";
import ButtonHover from "./components/Button";
import Tracks from "./sections/Tracks";
import Prizes from "./sections/Prizes";
import FAQ from "./sections/FAQ";
import Information from "./sections/Information";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.showSection = this.showSection.bind(this)
    this.goBack = this.goBack.bind(this)

    this.homeSections = {
      firstRow: [
        {
          reverseAnimation: (direction) => {
            this.showSection("tracks", {
              rotate: "-30deg", translate: {x: "0%", y: "0%"}, scale: 1, opacity: 1
            }, direction)
          },
          onClick: (direction) => {
            this.showSection("tracks", {
              rotate: "0deg", translate: {x: "25%", y: "23%"}, scale: 10, opacity: 0.8
            }, direction)
          },
          title: "Tracks",
          class: "tracks",
          titleID: "tracks-title",
          image: <TracksMap style={{background: "none", width: "100%", height: "100%", transform: "rotate(-30deg)"}}/>
        },
        {
          reverseAnimation: (direction) => {
            this.showSection("prizes", {
              rotate: "0deg", translate: {x: "0%", y: "0%"}, scale: 1, opacity: 1
            }, direction)
          },
          onClick: (direction) => {
            this.showSection("prizes", {
              rotate: "0deg", translate: {x: "-7%", y: "20%"}, scale: 3, opacity: 1.0
            }, direction)
          },
          title: "Prizes",
          class: "prizes",
          titleID: "prizes-title",
          image: <PrizesMedal style={{background: "none", width: "100%", height: "100%"}} className="ml-4"/>
        }
      ],
      secondRow: [
        {
          reverseAnimation: (direction) => {
            this.showSection("faq", {
              rotate: "30deg", translate: {x: "0%", y: "0%"}, scale: 1, opacity: 1
            }, direction)
          },
          onClick: (direction) => {
            this.showSection("faq", {
              rotate: "0deg", translate: {x: "28%", y: "-37%"}, scale: 3, opacity: 1.0
            }, direction)
          },
          title: "FAQs",
          class: "faq",
          titleID: "faq-title",
          image: <FAQIcon style={{background: "none", width: "100%", height: "100%", transform: "rotate(-30deg)"}}/>
        },
        {
          reverseAnimation: (direction) => {
            this.showSection("info", {
              rotate: "0deg", translate: {x: "0%", y: "0%"}, scale: 1, opacity: 1
            }, direction)
          },
          onClick: (direction) => {
            this.showSection("info", {
              rotate: "0deg", translate: {x: "-15%", y: "-20%"}, scale: 18, opacity: 0.3
            }, direction)
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
    Array.prototype.push.apply(rest,
      [
        document.querySelector(".cod-title"),
        document.querySelector(".cod-register"),
        document.querySelector(`.${selector} > h2`),
      ])
    return rest;
  }

  goBack(selector, firstRow) {
    console.log(selector)
    if (firstRow) {
      const section = this.homeSections.firstRow.filter((s) => s.class === selector)[0];
      section.reverseAnimation("reverse");
    } else {
      const section = this.homeSections.secondRow.filter((s) => s.class === selector)[0];
      section.reverseAnimation("reverse");
    }
  }

  showSection(selector, transforms, direction) {
    console.log(direction)
    const rest = this.getOtherSections(selector)
    const target = document.querySelector(`.${selector} > svg`);
    const targetSection = document.querySelector(`#${selector}-section`);
    targetSection.style.display = "block"
    target.style.cursor = direction === "normal" ? "default" : "pointer"
    const jet = document.querySelector("#jet-plane > svg")

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

    const t4 = anime.timeline({
      easing: "easeInOutExpo",
      duration: 1500,
      autoplay: true
    })

    t1.add({
      targets: `.${selector} > svg`,
      scale: transforms.scale,
      rotate: transforms.rotate,
      translateX: transforms.translate.x,
      translateY: transforms.translate.y,
      opacity: transforms.opacity
    })

    t2.add({
      targets: [`#${selector}-section`],
      opacity: direction === "normal" ? 1 : 0,
    })

    t3.add({
      targets: rest,
      opacity: direction === "normal" ? 0 : 1,
      complete: (anim) => {
        if (direction === "normal") {
          rest.forEach(node => {
            node.style.pointerEvents = "none";
          })
        } else {
          targetSection.style.display = "none"
          rest.forEach(node => {
            node.style.pointerEvents = "auto";
          })
        }
      }
    })

    t4.add({
      targets: jet,
      opacity: direction === "normal" ? 0 : 0.18
    })
  }

  render() {
    return (
      <div style={{fontFamily: "Poppins", color: "white", background: "#030304"}}>
        <Container fluid style={{fontFamily: "Blockletter", color: "white"}}>
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
                                                                       className="p-4">
                <Row className={`justify-content-center ${section.class}`} id="section" style={{opacity: 0}}
                     onClick={() => section.onClick("normal")}
                >
                  {section.image}
                  <h2 className="mt-3 ml-4" id={section.titleID}>{section.title}</h2>
                </Row>
              </Col>)}
            </Row>
            <Row className="justify-content-between">
              {this.homeSections.secondRow.map((section, index) => <Col key={index} xl={2}
                                                                        className="p-4">
                <Row className={`justify-content-center ${section.class}`} id="section" style={{opacity: 0}}
                     onClick={() => section.onClick("normal")}
                >
                  {section.image}
                  <h2 className="mt-3" id={section.titleID}>{section.title}</h2>
                </Row>
              </Col>)}
            </Row>
          </Row>
        </Container>
        <Tracks style={{opacity: 0, display: "none"}} goBack={(selector) => {
          this.goBack(selector, true)
        }}/>
        <Prizes style={{opacity: 0, display: "none"}} goBack={(selector) => {
          this.goBack(selector, true)
        }}/>
        <FAQ style={{opacity: 0, display: "none"}} goBack={(selector) => {
          this.goBack(selector, false)
        }}/>
        <Information style={{opacity: 0, display: "none"}} goBack={(selector) => {
          this.goBack(selector, false)
        }}/>
      </div>
    );
  }
}

export default App;
