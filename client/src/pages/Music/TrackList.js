import React, { useEffect, useState } from 'react';
import { TracklistContainer } from './TrackList.styled';
import { FaPlay, FaPause } from 'react-icons/fa';
import { setAudioPlaying, setAudioPaused } from '../../actions/audioActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlaylist, PlaylistContext } from '../../data/playlist';
import styled from 'styled-components';
import { getTracks } from '../../actions/trackUploadActions';

const Tracklist = (props) => {
	const [ playlist, setPlaylist ] = useState([]);
	const [ currentTrack, setCurrentTrack ] = useState();

	const handleFetchData = () => {
		props.getTracks();
		const tracks = props.track.tracks;
		setPlaylist(props.track.tracks);
	};

	const handleChangeTrack = (id) => {
		setCurrentTrack(id);
	};

	const handleNextTrack = () => {
		if (currentTrack === playlist.length - 1) {
			setCurrentTrack(0);
			return;
		}
		setCurrentTrack(currentTrack + 1);
	};

	const handlePrevTrack = () => {
		if (currentTrack === 0) {
			setCurrentTrack(playlist.length - 1);
			return;
		}
		setCurrentTrack(currentTrack - 1);
	};

	const Loading = styled.div`
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	`;

	useEffect(() => {
		props.getTracks();
	}, []);

	useEffect(
		() => {
			const tracks = props.track.tracks;
			setPlaylist(tracks);
		},
		[ props.track.tracks ]
	);

	return (
		<PlaylistContext.Provider>
			{console.log(playlist)}
			<TracklistContainer>
				<h1>outboard 001</h1>
				<h2>feb 2020</h2>
				<h3>featured tracks</h3>
				<ul>
					{playlist.length === 0 ? (
						<Loading>loading</Loading>
					) : (
						playlist.map((track) => (
							<li>
								<p>
									{track.id !== currentTrack ? (
										<FaPlay
											onClick={handleChangeTrack(track.id)}
											style={{ cursor: 'pointer', marginRight: '10px' }}
										/>
									) : (
										<FaPause
											onClick={props.setAudioPaused}
											style={{ cursor: 'pointer', marginRight: '10px' }}
										/>
									)}
									{track.artistName + ' - ' + track.trackName}
								</p>
								<a>buy track</a>
							</li>
						))
					)}
				</ul>
			</TracklistContainer>
		</PlaylistContext.Provider>
	);
};

Tracklist.propTypes = {
	setAudioPlaing: PropTypes.func,
	setAudioPaused: PropTypes.func,
	getTracks: PropTypes.func.isRequired,
	track: PropTypes.object,
	audio: PropTypes.object,
	playing: PropTypes.bool,
	currentTrack: PropTypes.object
};

const mapStateToProps = (state) => ({ audio: state.audio, track: state.track });

export default connect(mapStateToProps, { setAudioPlaying, setAudioPaused, getTracks })(Tracklist);
