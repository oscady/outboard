import { SET_AUDIO_PLAYING, SET_AUDIO_PAUSED, AUDIO_PLAYING, AUDIO_PAUSED, TRACKS_LOADING, GET_TRACKS } from './types';
import axios from 'axios';

// get items action sent to reducer
export const getTracks = () => (dispatch) => {
	dispatch(setTracksLoading(console.log('items are loading...')));
	axios.get('/api/playlists').then((res) =>
		dispatch({
			type: GET_TRACKS,
			payload: res.data
		})
	);
};

// get single project
// export const getSingleTrack = (id) => (dispatch) => {
// 	dispatch(setItemsLoading());
// 	axios
// 		.get(`/data/playlist`)
// 		.then((res) => dispatch({ type: GET_SINGLE_ITEM, payload: res.data }))
// 		.catch((err) => console.error("Can't get item", err));
// };

// // add new item sent to reducer
// export const addItem = (item) => (dispatch) => {
// 	dispatch(setItemsLoading(console.log('items are loading...')));
// 	axios.post('/api/items', item).then((res) =>
// 		dispatch({
// 			type: ADD_ITEM,
// 			payload: res.data
// 		})
// 	);
// };

// // delete item by id request sent to reducer
// export const deleteItem = (id) => (dispatch) => {
// 	axios.delete(`/api/items/${id}`).then((res) =>
// 		dispatch({
// 			type: DELETE_ITEM,
// 			payload: id
// 		})
// 	);
// };

// loading items graphic sent to reducer
export const setTracksLoading = (item) => {
	return {
		type: TRACKS_LOADING
	};
};

// loading items graphic sent to reducer
export const setAudioPlaying = (id) => {
	return {
		type: SET_AUDIO_PLAYING,
		payload: id
	};
};

// loading items graphic sent to reducer
export const setAudioPaused = () => {
	return {
		type: SET_AUDIO_PAUSED
	};
};

// get current player time
export const getSecondsToMinutesAndSeconds = (time) => {
	if (time === 0) {
		return '0 : 00';
	}
	const minutes = Math.floor(time / 60);
	const seconds = time - minutes * 60;
	return `${minutes} : 0${seconds}`;
};
