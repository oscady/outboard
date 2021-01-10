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
		if (props.audio.playing) {
			props.setAudioPaused();
		} else {
			props.setAudioPlaying();
		}
	};

	const handleMetadata = () => {
		const duration = Math.floor(audioPlayer.duration);
		setProgress(Math.floor(audioPlayer.duration));
		props.setCurrentTrackDuration(getSecondsToMinutesAndSeconds(duration));
	};

	const handleTimeupdate = (playNext) => {
		props.setCurrentTrackMoment(Math.floor(audioPlayer.currentTime));
		setProgressBarWidth(Math.abs(audioPlayer.currentTime / audioPlayer.duration * 100) + '%');
	};

	useEffect(() => {
		props.setCurrentTrackDuration(0);
		props.setCurrentTrackMoment(0);
		setProgressBarWidth('0');
	}, []);

	useEffect(
		() => {
			props.setCurrentTrackMoment(currentTrackMoment);
		},
		[ currentTrackMoment ]
	);

	useEffect(
		() => {
			if (!props.audio.playing) {
				audioPlayer.pause();
			} else {
				audioPlayer.play();
			}
		},
		[ props.audio.playing, props.audio.currentTrack ]
	);

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
							<Icon style={iconStyles} icon={props.playing ? ic_pause : ic_play_arrow} size={30} />
						</ButtonContainer>
						{/* <Icon size={30} style={iconStyles} icon={ic_stop} onClick={handleStop} />
						<Icon style={iconStyles} icon={ic_skip_next} onClick={value.handleNextTrack} size={30} /> */}
						{/* <Counter>{getSecondsToMinutesAndSeconds(currentTrackMoment)}</Counter> */}
						<ProgressBar progress={progressBarWidth} track={props.url} width={'100%'} />
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
	playing: state.audio.playing,
	currentTrackDuration: state.audio.currentTrackDuration,
	currentTrackMoment: state.audio.currentTrackMoment
});

export default connect(mapStateToProps, {
	setAudioPlaying,
	setAudioPaused,
	setCurrentTrackDuration,
	setCurrentTrackMoment
})(Audio);
