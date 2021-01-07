import {
	SET_AUDIO_PLAYING,
	SET_AUDIO_PAUSED,
	AUDIO_PLAYING,
	AUDIO_PAUSED,
	TRACKS_LOADING,
	TRACKS_LOADED,
	GET_PLAYLIST,
	NEXT_TRACK,
	PREV_TRACK,
	SET_CURRENT_TRACK,
	SET_CURRENT_TRACK_MOMENT,
	SET_CURRENT_TRACK_DURATION,
	SET_PLAYLIST_LOADING,
	SET_PLAYLIST_LOADED
} from './types';
import axios from 'axios';

// get items action sent to reducer
export const getPlaylist = (id) => async (dispatch) => {
	dispatch(setPlaylistLoading(console.log('playlist is loading...')));
	await axios
		.get(`/api/release/${id}`)
		.then((res) =>
			dispatch({
				type: GET_PLAYLIST,
				payload: res.data
			})
		)
		.catch((err) => console.error("Can't get playlist", err));
};

// set current track duration
export const setCurrentTrackDuration = (duration) => (dispatch) => {
	dispatch({
		type: SET_CURRENT_TRACK_DURATION,
		payload: duration
	});
};

// set time elapsed on current track
export const setCurrentTrackMoment = (elapsed) => (dispatch) => {
	dispatch({
		type: SET_CURRENT_TRACK_MOMENT,
		payload: elapsed
	});
};

//get curren track
export const setCurrentTrack = (id) => async (dispatch) => {
	dispatch(setTracksLoading());
	await axios
		.get(`/api/tracks/${id}`)
		.then((res) =>
			dispatch({
				type: SET_CURRENT_TRACK,
				payload: res.data
			})
		)
		.catch((err) => console.error("Can't get current track - ", err));
	setTracksLoaded();
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
export const setPlaylistLoading = () => {
	return {
		type: SET_PLAYLIST_LOADING
	};
};

// loading items graphic sent to reducer
export const setPlaylistLoaded = () => {
	return {
		type: SET_PLAYLIST_LOADED
	};
};

// loading items graphic sent to reducer
export const setAudioPlaying = () => {
	return {
		type: SET_AUDIO_PLAYING
	};
};

// loading items graphic sent to reducer
export const setAudioPaused = () => {
	return {
		type: SET_AUDIO_PAUSED
	};
};

// loading images graphic sent to reducer
export const setTracksLoading = () => {
	return {
		type: TRACKS_LOADING
	};
};

// loading images graphic sent to reducer
export const setTracksLoaded = () => {
	return {
		type: TRACKS_LOADED
	};
};
