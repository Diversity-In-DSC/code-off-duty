import React from "react";
import PropTypes from "prop-types";
import { Row } from 'react-bootstrap'
import "./ButtonStyles.css";

export class ButtonHover extends React.Component {
  componentDidMount() {
  }

  render() {
    const {
      className, onClick, label, isDisabled, style
    } = this.props;
    return (
      <React.Fragment>
        {/* <Row> */}
        <button onClick={onClick} disabled={isDisabled} style={style} className='p-0'>
          <span className={className} style={{ borderRadius: 50, border: "2px solid rgb(0, 255, 70)" }}>
            <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.46 123.46"><path
              d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z" /><path
                d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z" /></svg>
            <span style={{ fontFamily: 'Blockletter' }} id="label" className="bg-transparent">{label}</span>
            <svg width="1.2em" height="2em" viewBox="0 0 13 10" className="arrow">
              <path d="M1,5 L11,5" />
              <polyline points="8 1 12 5 8 9" />
            </svg>
          </span>
        </button>
        {/* </Row> */}
      </React.Fragment>
    )
  }
}

ButtonHover.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
  style: PropTypes.object
};

ButtonHover.defaultProps = {
  className: "cta",
  onClick: null,
  label: "Click Me",
  isDisabled: false,
  // style: {}
};

export default ButtonHover;