import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { motion, AnimatePresence, useSpring, useMotionValue, animate } from 'framer-motion';

const Container = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	background-color: black;
	border-radius: 5px;
	z-index: 100;
	display: flex;
	align-items: center;

	h3 {
		font-size: 1.1rem;
		font-weight: bold;
		position: relative;
		color: white;
		width: fit-content;
		white-space: nowrap;
		left: 100px;
		margin: 0;
	}
`;

const Point = styled(motion.div)`
		position: absolute;
		left: ${(props) => props.progressPercent};
		top: 50%;
		transform: translate(-50%, -50%);
		bottom: 10px;
		height: 100%;
		width: 8px;
		background-color: black;
		border-radius: 50%;
	`;
const Progress = styled(motion.div)`
		position: absolute;
		left: 0;
		top: 0;
		bottom: 10px;
		height: inherit;
		background-color: whitesmoke;
		overflow:hidden;
		z-index: 101;
		display: flex;
	align-items: center;

		h3 {
			font-size:1.1rem;
			font-weight: bold;
			position: relative;
			width: fit-content;
			white-space:nowrap;
			left: 100px;
			color: black;
			margin: 0;
		}
	`;

const ProgressBar = (props) => {
	const [ progressValue, setProgressValue ] = useState(0);

	useEffect(
		() => {
			setProgressValue(props.duration);
		},
		[ props.duration ]
	);
	return (
		<Container>
			<h3>
				{props.currentTrack.artistName} - {props.currentTrack.trackName}
			</h3>
			<AnimatePresence>
				<Progress
					progressPercent={props.progressPercent}
					initial={{ width: '0%' }}
					animate={{ width: props.currentTrackMoment / 100 * props.duration.toFixed(3) + '%' }}
					exit={{ width: '0%' }}
					transition={{ stiffness: 1 }}>
					<h3>
						{props.currentTrack.artistName} - {props.currentTrack.trackName}
					</h3>
				</Progress>
			</AnimatePresence>
		</Container>
	);
};

ProgressBar.propTypes = {
	progressPercent: PropTypes.string,
	duration: PropTypes.number.isRequired,
	width: PropTypes.string,
	audio: PropTypes.object,
	currentTrack: PropTypes.array
};

const mapStateToProps = (state) => ({
	audio: state.audio,
	track: state.track,
	release: state.release,
	currentTrack: state.audio.currentTrack
});

export default connect(mapStateToProps)(ProgressBar);
