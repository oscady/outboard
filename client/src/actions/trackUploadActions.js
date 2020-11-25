import {GET_TRACKS, ADD_TRACK, TRACKS_LOADING, TRACKS_LOADED} from './types';
import axios from 'axios';

// get images action sent to reducer
export const getTracks = () => dispatch => {
  dispatch(setTracksLoading(console.log("Tracks are loading...")));
    axios
      .get('/api/tracks')
      .then(res => dispatch({
      type: GET_TRACKS,
      payload: res.data
      })
    )
};

// add new image sent to reducer
export const addTrack = track => (dispatch) => {
  axios
  .post('/api/Tracks', track)
  .then(res => 
    dispatch({ 
      type: ADD_TRACK,
      payload: res.data
    })).catch(err => console.log(err))
};

// loading images graphic sent to reducer
export const setTracksLoading = track => {
  return {
    type: TRACKS_LOADING
  };
};

// loading images graphic sent to reducer
export const setTracksLoaded = track => {
  return {
    type: TRACKS_LOADED
  };
};