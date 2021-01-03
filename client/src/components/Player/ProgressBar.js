import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion, AnimatePresence, useSpring, useMotionValue, animate } from 'framer-motion';

const Container = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	background-color: black;
	border-radius: 5px;
	z-index: 100;

	h3 {
		position: relative;
		color: white;
		width: fit-content;
		white-space: nowrap;
		left: 100px;
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

		h3 {
			position: relative;
			width: fit-content;
			white-space:nowrap;
			left: 100px;
			color: black;
		}
	`;

export function ProgressBar(props) {
	const [ progressValue, setProgressValue ] = useState(0);

	useEffect(
		() => {
			setProgressValue(props.duration);
		},
		[ props.duration ]
	);
	return (
		<Container>
			{console.log((props.duration / 1000 * props.currentTrackMoment).toFixed(1))}
			<h3>TRANSIENT BEING - TRACK 4 (DUB MIX)</h3>
			<AnimatePresence>
				<Progress
					progressPercent={props.progressPercent}
					initial={{ width: '0%' }}
					animate={{ width: props.currentTrackMoment / 1000 * props.duration.toFixed(1) + '%' }}
					exit={{ width: '0%' }}
					transition={{ type: 'inertia', stiffness: 1 }}>
					<h3>TRANSIENT BEING - TRACK 4 (DUB MIX)</h3>
				</Progress>
			</AnimatePresence>
		</Container>
	);
}

ProgressBar.propTypes = {
	progressPercent: PropTypes.string,
	duration: PropTypes.number.isRequired,
	width: PropTypes.string
};
