import React from 'react';
import PropTypes from 'prop-types';
import './ButtonStyles.css';

export class ButtonHover extends React.Component {
	componentDidMount() {}

	render() {
		const { className, onClick, label, isDisabled, style } = this.props;
		return (
			<React.Fragment>
				<button onClick={onClick} disabled={isDisabled} style={style} className="p-0 bg-transparent b">
					<span className={className} style={{ borderRadius: 50, border: '2px solid rgb(0, 255, 70)' }}>
						<span style={{ fontFamily: 'Blockletter' }} id="label" className="bg-transparent">
							{label}
						</span>
						<svg width="1.2em" height="2em" viewBox="0 0 13 10" className="arrow">
							<path d="M1,5 L11,5" />
							<polyline points="8 1 12 5 8 9" />
						</svg>
					</span>
				</button>
			</React.Fragment>
		);
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
	className: 'cta',
	onClick: null,
	label: 'Click Me',
	isDisabled: false,
	style: {}
};

export default ButtonHover;
