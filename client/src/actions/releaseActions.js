import { GET_RELEASES, ADD_RELEASE, DELETE_RELEASE, RELEASES_LOADING, GET_SINGLE_RELEASE } from './types';
import axios from 'axios';

// get releases action sent to reducer
export const getReleases = () => (dispatch) => {
	dispatch(setReleasesLoading(console.log('releases are loading...')));
	axios.get('/api/releases').then((res) =>
		dispatch({
			type: GET_RELEASES,
			payload: res.data
		})
	);
};

// get single project
export const getSingleRelease = (id) => (dispatch) => {
	dispatch(setReleasesLoading());
	axios
		.get(`/api/releases/${id}`)
		.then((res) => dispatch({ type: GET_SINGLE_RELEASE, payload: res.data }))
		.catch((err) => console.error("Can't get release", err));
};

// add new release sent to reducer
export const addRelease = (release) => (dispatch) => {
	dispatch(setReleasesLoading(console.log('releases are loading...')));
	axios.post('/api/releases', release).then((res) =>
		dispatch({
			type: ADD_RELEASE,
			payload: res.data
		})
	);
};

// delete release by id request sent to reducer
export const deleteRelease = (id) => (dispatch) => {
	axios.delete(`/api/releases/${id}`).then((res) =>
		dispatch({
			type: DELETE_RELEASE,
			payload: id
		})
	);
};

// loading releases graphic sent to reducer
export const setReleasesLoading = (release) => {
	return {
		type: RELEASES_LOADING
	};
};
