import {
	GET_RELEASES,
	ADD_RELEASE,
	DELETE_RELEASE,
	SET_RELEASES_LOADING,
	SET_RELEASES_LOADED,
	GET_SINGLE_RELEASE,
	SET_RELEASE_PLAYLIST
} from './types';
import axios from 'axios';

// get releases action sent to reducer
export const getReleases = () => async (dispatch) => {
	dispatch(setReleasesLoading(console.log('releases are loading...')));
	await axios.get('/api/release').then((res) =>
		dispatch({
			type: GET_RELEASES,
			payload: res.data
		})
	);
	dispatch(setReleasesLoaded(console.log('releases are loaded...')));
};

// get single project
export const getSingleRelease = (id) => (dispatch) => {
	dispatch(setReleasesLoading());
	axios
		.get(`/api/release/${id}`)
		.then((res) => dispatch({ type: GET_SINGLE_RELEASE, payload: res.data }))
		.catch((err) => console.error("Can't get release", err));
};

// get single project
export const setReleasePlaylist = (id) => (dispatch) => {
	dispatch(setReleasesLoading());
	axios
		.get(`/api/release/${id}`)
		.then((res) => dispatch({ type: SET_RELEASE_PLAYLIST, payload: res.data }))
		.catch((err) => console.error("Can't get release", err));
	dispatch(setReleasesLoaded(console.log('releases are loaded...')));
};
// add new release sent to reducer
export const addRelease = (release) => (dispatch) => {
	dispatch(setReleasesLoading(console.log('releases are loading...')));
	axios.post('/api/release', release).then((res) =>
		dispatch({
			type: ADD_RELEASE,
			payload: res.data
		})
	);
};

// delete release by id request sent to reducer
export const deleteRelease = (id) => (dispatch) => {
	axios.delete(`/api/release/${id}`).then((res) =>
		dispatch({
			type: DELETE_RELEASE,
			payload: id
		})
	);
};

// loading releases graphic sent to reducer
export const setReleasesLoading = () => {
	return {
		type: SET_RELEASES_LOADING
	};
};
// loaded releases graphic sent to reducer
export const setReleasesLoaded = () => {
	return {
		type: SET_RELEASES_LOADED
	};
};
