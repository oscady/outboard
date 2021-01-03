import { RECEIVE_CURRENT_SONG, PLAY_SONG, PAUSE_SONG } from './types';

export const receiveCurrentSong = (currentSong) => ({
	type: RECEIVE_CURRENT_SONG,
	currentSong
});

export const playSong = () => ({
	type: PLAY_SONG
});

export const pauseSong = () => ({
	type: PAUSE_SONG
});
