import React, { useEffect, useState } from 'react';
import { TracklistContainer } from './TrackList.styled';
import { FaPlay, FaPause } from 'react-icons/fa';
import { setAudioPlaying, setAudioPaused, setCurrentTrack } from '../../actions/audioActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlaylist, PlaylistContext } from '../../data/playlist';
import styled from 'styled-components';
import { getTracks } from '../../actions/trackUploadActions';
import { getReleases } from '../../actions/releaseActions';

const Loading = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const Tracklist = (props) => {
	const [ currentList, setCurrentList ] = useState([]);

	// const handleFetchData = () => {
	// 	props.getReleases();
	// 	const tracks = props.release.releases;
	// };

	// send current track id to audio reducer
	const handleChangeTrack = (id) => {
		props.setCurrentTrack(id);
	};

	const handleNextTrack = () => {
		if (props.currentTrack === currentList.length - 1) {
			props.setCurrentTrack(0);
			return;
		}
		props.setCurrentTrack(props.currentTrack + 1);
	};

	const handlePrevTrack = () => {
		if (props.currentTrack === 0) {
			props.setCurrentTrack(currentList.length - 1);
			return;
		}
		props.setCurrentTrack(props.currentTrack - 1);
	};

	useEffect(
		() => {
			setCurrentList(props.playlist.tracks);
		},
		[ props.playlist ]
	);

	return (
		<PlaylistContext.Provider>
			<TracklistContainer>
				<h1>{props.playlist.name}</h1>
				<h2>feb 2020</h2>
				<h3>featured tracks</h3>
				<ul>
					{currentList ? (
						currentList.map((track, index) => (
							<li key={track._id}>
								{track._id === props.currentTrack._id ? (
									<FaPause onClick={() => props.setAudioPaused() && props.playing === false} />
								) : (
									<FaPlay onClick={() => handleChangeTrack(track._id)} />
								)}
								<p>
									{track.artistName} - {track.trackName}
								</p>
								<a> BUY</a>
							</li>
						))
					) : (
						<div> cunt</div>
					)}
				</ul>
			</TracklistContainer>
		</PlaylistContext.Provider>
	);
};

Tracklist.propTypes = {
	setAudioPlaing: PropTypes.func,
	setAudioPaused: PropTypes.func,
	setCurrentTrack: PropTypes.func.isRequired,
	track: PropTypes.object,
	getReleases: PropTypes.func.isRequired,
	release: PropTypes.object,
	audio: PropTypes.object,
	playing: PropTypes.bool,
	currentTrack: PropTypes.array
};

const mapStateToProps = (state) => ({
	audio: state.audio,
	playing: state.audio.playing,
	track: state.track,
	release: state.release,
	currentTrack: state.audio.currentTrack
});

export default connect(mapStateToProps, { setAudioPlaying, setAudioPaused, getReleases, getTracks, setCurrentTrack })(
	Tracklist
);
