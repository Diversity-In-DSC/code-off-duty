import React from "react";
import PropTypes from "prop-types";
import "./ButtonStyles.css";

export const ButtonHover = props => {
  const {
    className, onClick, label, isDisabled
  } = props;
  return (
    <button onClick={onClick} disabled={isDisabled}>
      <span className={className} style={{borderRadius: 50, border: "2px solid green"}}>
        <span style={{fontFamily: 'Valorant', fontSize: 18}} id="label">{label}</span>
        <svg width="1.2rem" height="2em" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"/>
          <polyline points="8 1 12 5 8 9"/>
        </svg>
      </span>
    </button>
  )
};

ButtonHover.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  isDisabled: PropTypes.bool
};

ButtonHover.defaultProps = {
  className: "cta",
  onClick: null,
  label: "Click Me",
  isDisabled: false
};

export default ButtonHover;