import React from 'react';
import PropTypes from 'prop-types';

const Mail = ({ type }) => {
	switch (type) {
	case 'colored':
		return (
			<g>
				<path d="M46,41H2c-0.55228,0-1-0.44772-1-1V8c0-0.55228,0.44772-1,1-1h44c0.55228,0,1,0.44772,1,1v32 C47,40.55228,46.55228,41,46,41z" fill="#A67C52" />
				<path d="M24,19c0.24121,0,0.48193,0.08691,0.67285,0.25977l22,20c0.30566,0.27832,0.40869,0.71582,0.25977,1.10059 C46.78369,40.74609,46.41309,41,46,41H2c-0.41309,0-0.78369-0.25391-0.93262-0.63965 c-0.14893-0.38477-0.0459-0.82227,0.25977-1.10059l22-20C23.51807,19.08691,23.75879,19,24,19z" fill="#B28F77" />
				<path d="M24,29c-0.24121,0-0.48193-0.08691-0.67285-0.25977l-22-20C1.02148,8.46191,0.91846,8.02441,1.06738,7.63965 C1.21631,7.25391,1.58691,7,2,7h44c0.41309,0,0.78369,0.25391,0.93262,0.63965c0.14893,0.38477,0.0459,0.82227-0.25977,1.10059 l-22,20C24.48193,28.91309,24.24121,29,24,29z" fill="#C19F85" />
			</g>
		);
	case 'outline':
		return (
			<g stroke="currentColor" strokeLinecap="square">
				<polyline fill="none" points="2,6 24,26 46,6 " strokeLinecap="butt" />
				<rect height="36" width="44" fill="none" stroke="currentColor" x="2" y="6" />
			</g>
		);
	default:
		return (
			<g fill="currentColor">
				<path d="M45,5H3C1.895,5,1,5.895,1,7v34c0,1.105,0.895,2,2,2h42c1.105,0,2-0.895,2-2V7C47,5.895,46.105,5,45,5z M41.662,11.75l-17,15C24.473,26.917,24.236,27,24,27s-0.473-0.083-0.662-0.25l-17-15c-0.414-0.365-0.454-0.997-0.088-1.411 c0.366-0.415,0.997-0.455,1.412-0.089L24,24.666L40.338,10.25c0.414-0.366,1.046-0.326,1.412,0.089 C42.115,10.753,42.076,11.385,41.662,11.75z" fill="currentColor" />
			</g>
		);
	}
};

Mail.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph', 'outline'])
};

Mail.defaultProps = {
	type: 'glyph'
};

export default Mail;
