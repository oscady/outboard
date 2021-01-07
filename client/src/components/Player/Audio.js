import React, { useState, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { ic_play_arrow, ic_pause, ic_stop, ic_skip_next, ic_skip_previous } from 'react-icons-kit/md/';
import {
	setAudioPlaying,
	setAudioPaused,
	setCurrentTrackDuration,
	setCurrentTrackMoment
} from '../../actions/audioActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProgressBar from './ProgressBar';
import { PlaylistContext } from '../../data/playlist';

const getSecondsToMinutesAndSeconds = (time) => {
	if (time === 0) {
		return '0:00';
	}
	const minutes = Math.floor(time / 60);
	const seconds = time - minutes * 60;
	const actual = seconds < 10 ? '0' + seconds : seconds;
	return `${minutes}:${actual}`;
};

const iconStyles = {
	display: 'flex',
	cursor: 'pointer',
	color: 'white',
	width: '60px',
	height: '100%',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: 'black'
};

const Counter = styled.p`
	font-size: 1rem;
	width: 100px;
	color: white;
	font-weight: bold;
	background-color: black;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0;
`;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	width: 100%;
`;

const ButtonContainer = styled.div`
	height: 100%;
	width: auto;
`;

const BuyButton = styled.div`
	height: 100%;
	width: 130px;
	display: flex;
	align-items: center;
	justify-content: center;

	color: white;
	a {
		font-weight: bold;
		font-size: 1rem;
	}
`;

function Audio(props) {
	let audioPlayer;

	const [ currentTrackDuration, setCurrentTrackDuration ] = useState(0);
	const [ currentTrackMoment, setCurrentTrackMoment ] = useState(0);
	const [ progressBarWidth, setProgressBarWidth ] = useState('0');
	const [ isPlaying, setIsPlaying ] = useState(false);
	const [ progress, setProgress ] = useState(0);

	const initPlayer = () => {
		audioPlayer = document.getElementById('audioPlayer');
	};

	const handleStop = () => {
		audioPlayer.pause();
		audioPlayer.currentTime = 0.0;
		setIsPlaying(false);
		setCurrentTrackMoment(0);
	};

	const handlePlay = () => {
		if (audioPlayer.paused || audioPlayer.ended) {
			audioPlayer.play();
			setIsPlaying(true);
		} else {
			audioPlayer.pause();
			setIsPlaying(false);
		}
	};

	const handleMetadata = () => {
		const duration = Math.floor(audioPlayer.duration);
		setProgress(Math.floor(audioPlayer.duration));
		setCurrentTrackDuration(getSecondsToMinutesAndSeconds(duration));
	};

	const handleTimeupdate = (playNext) => {
		setCurrentTrackMoment(Math.floor(audioPlayer.currentTime));
		setProgressBarWidth(Math.floor(audioPlayer.currentTime / audioPlayer.duration * 100) + '%');
		if (audioPlayer.currentTime === audioPlayer.duration) {
			playNext();
		}
	};

	useEffect(() => {
		setCurrentTrackDuration(0);
		setCurrentTrackMoment(0);
		setProgressBarWidth('0');
		handlePlay();
	}, []);

	useEffect(
		() => {
			props.setCurrentTrackMoment(currentTrackMoment);
		},
		[ currentTrackDuration, currentTrackMoment ]
	);

	useEffect(() => {
		audioPlayer.play();
		setIsPlaying(true);
	}, props.currentTrack);

	useLayoutEffect(() => {
		initPlayer();
	});

	return (
		<PlaylistContext.Consumer>
			{(value) => (
				<div
					style={{
						width: '100%',
						height: '100%',
						alignItems: 'center'
					}}
					key={props.url}>
					<audio
						id='audioPlayer'
						preload='metadata'
						onLoadedMetadata={handleMetadata}
						onTimeUpdate={() => handleTimeupdate(value.handleNextTrack)}>
						<source src={props.url} type='audio/mp3' />
						Ooops, your browser is sooo old.
					</audio>
					<Container>
						{/* <Icon style={iconStyles} icon={ic_skip_previous} onClick={value.handlePrevTrack} size={30} /> */}
						<ButtonContainer onClick={handlePlay}>
							<Icon style={iconStyles} icon={isPlaying ? ic_pause : ic_play_arrow} size={30} />
						</ButtonContainer>
						{/* <Icon size={30} style={iconStyles} icon={ic_stop} onClick={handleStop} />
						<Icon style={iconStyles} icon={ic_skip_next} onClick={value.handleNextTrack} size={30} /> */}
						{/* <Counter>{getSecondsToMinutesAndSeconds(currentTrackMoment)}</Counter> */}
						<ProgressBar
							track={props.url}
							progressPercent={progressBarWidth}
							currentTrackMoment={props.currentTrackMoment}
							width={'100%'}
							duration={progress}
						/>
						<Counter>{props.currentTrackDuration || '0 : 00'}</Counter>
						<BuyButton>
							<a>BUY</a>
						</BuyButton>
					</Container>
				</div>
			)}
		</PlaylistContext.Consumer>
	);
}

Audio.propTypes = {
	setAudioPlaying: PropTypes.func,
	setAudioPaused: PropTypes.func,
	setCurrentTrackDuration: PropTypes.func,
	setCurrentTrackMoment: PropTypes.func,
	playing: PropTypes.bool,
	currentTrackMoment: PropTypes.number,
	currentTrackDuration: PropTypes.number
};

const mapStateToProps = (state) => ({
	audio: state.audio,
	currentTrackDuration: state.audio.currentTrackDuration,
	currentTrackMoment: state.audio.currentTrackMoment
});

export default connect(mapStateToProps, {
	setAudioPlaying,
	setAudioPaused,
	setCurrentTrackDuration,
	setCurrentTrackMoment
})(Audio);
