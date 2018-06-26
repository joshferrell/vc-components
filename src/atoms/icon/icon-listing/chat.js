import React from 'react';
import PropTypes from 'prop-types';

const Chat = ({ type }) => {
	switch (type) {
	case 'colored':
		return (
			<g>
				<path fill="#BADEFC" d="M47,29c0-7.168-7.626-13-17-13s-17,5.832-17,13s7.626,13,17,13c1.119,0,2.211-0.088,3.27-0.247l8.283,4.141 C41.694,45.965,41.847,46,42,46c0.183,0,0.365-0.05,0.526-0.149C42.82,45.668,43,45.347,43,45v-7.64C45.492,35.097,47,32.182,47,29z " />
				<path fill="#43A6DD" d="M22,2C10.42,2,1,9.626,1,19c0,3.603,1.381,7.038,4,9.96V39c0,0.347,0.18,0.668,0.474,0.851 C5.635,39.95,5.817,40,6,40c0.153,0,0.306-0.035,0.447-0.105l9.33-4.665C17.812,35.741,19.903,36,22,36c11.58,0,21-7.626,21-17 S33.58,2,22,2z" />
			</g>
		);
	case 'outline':
		return (
			<g fill="currentColor">
				<path
					data-color="color-2"
					fill="none"
					stroke="currentColor"
					strokeLinecap="square"
					strokeMiterlimit="10"
					d="
	M21.164,38.997C23.693,40.262,26.73,41,30,41c1.179,0,2.326-0.102,3.432-0.284L42,45v-8.081c2.482-2.114,4-4.881,4-7.919
	c0-1.038-0.176-2.042-0.506-2.999"
					strokeLinejoin="miter"
				/>
				<path
					fill="none"
					stroke="currentColor"
					strokeLinecap="square"
					strokeMiterlimit="10"
					d="M22,2
	C10.954,2,2,9.163,2,18c0,3.594,1.499,6.9,4,9.571V38l9.665-4.833C17.658,33.7,19.783,34,22,34c11.046,0,20-7.163,20-16
	S33.046,2,22,2z"
					strokeLinejoin="miter"
				/>
			</g>
		);
	default:
		return (
			<g fill="currentColor">
				<path data-color="color-2" fill="currentColor" d="M44.624,22.398C42.679,31.258,33.278,38,22,38c-1.599,0-3.195-0.146-4.769-0.423 c3.867,3.392,9.854,5.103,16.041,4.176l8.281,4.142C41.694,45.965,41.847,46,42,46c0.183,0,0.365-0.05,0.526-0.149 C42.82,45.669,43,45.347,43,45v-7.629c2.583-2.344,4-5.3,4-8.371C47,26.652,46.163,24.384,44.624,22.398z" />
				<path fill="currentColor" d="M22,2C10.42,2,1,9.626,1,19c0,3.603,1.381,7.038,4,9.96V39c0,0.347,0.18,0.668,0.474,0.851 C5.635,39.95,5.817,40,6,40c0.153,0,0.306-0.035,0.447-0.105l9.33-4.665C17.812,35.741,19.903,36,22,36c11.58,0,21-7.626,21-17 S33.58,2,22,2z" />
			</g>
		);
	}
};

Chat.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph', 'outline'])
};

Chat.defaultProps = {
	type: 'glyph'
};

export default Chat;
