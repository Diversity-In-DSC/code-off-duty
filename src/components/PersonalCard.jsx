import React, {Component} from 'react';
import {Card} from "react-bootstrap";
import {ReactComponent as PersonalImg} from "../assets/img/032-soldier.svg";
import {ReactComponent as LinkedIn} from "../assets/img/linkedin.svg";
import "../css/PersonalCard.css"

class PersonalCard extends Component {
    constructor(props) {
        super(props);
        this.data = props.data
    }

    render() {
        return (
            <div className="team-info">
                <Card className="m-3 align-items-center bg-transparent" style={{
                    borderColor: "rgba(0, 200, 70, 1)",
                    borderWidth: "5px",
                    borderStyle: "dashed",
                }}>
                    <div className="my-card">
                        {
                            this.data.img ?
                                <Card.Img src={this.data.img} className="bg-transparent"/>
                                :
                                <PersonalImg style={{ width: "100%", height: "auto" }} />
                        }
                    </div>
                    <Card.Footer className="bg-transparent">
                        <h4>{this.data.name}</h4>
                    </Card.Footer>
                </Card>
                <div className="team-links w-100 h-75" >
                    <a href={this.data.linkedIn} target="blank" className="mx-auto my-auto">
                        <LinkedIn style={{
                            width: "4em",
                            height: "4em",
                            backgroundColor: "#fff",
                            borderRadius: 9
                        }} />
                    </a>
                </div>
            </div>
        );
    }
}

export default PersonalCard;