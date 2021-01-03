import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Playlist } from './Playlist';
import { Top } from './Top';
import { fetchPlaylist, PlaylistContext } from '../../data/playlist';

const Container = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100vw;
	height: 60px;
	margin: 0 auto;
	border-radius: 5px;
	box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
	z-index: 10;
`;

const Loading = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const Player = (props) => {
	const [ playlist, setPlaylist ] = useState([]);
	const [ currentTrack, setCurrentTrack ] = useState(0);

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

	const handleFetchData = async () => {
		const playlist = await fetchPlaylist();
		setPlaylist(playlist);
	};

	useEffect(() => {
		handleFetchData();
	}, []);

	if (playlist.length === 0) {
		return (
			<Container>
				<Loading>loading...</Loading>
			</Container>
		);
	}

	return (
		<Container>
			<PlaylistContext.Provider value={{ handleNextTrack, handlePrevTrack }}>
				<Top track={playlist[currentTrack]} />
				{/* <Playlist onChangeTrack={handleChangeTrack} playlist={playlist} /> */}
			</PlaylistContext.Provider>
		</Container>
	);
};
