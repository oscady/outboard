import {
  GET_TRACKS, ADD_TRACK, TRACKS_LOADING
} from '../actions/types';

const initialState = {
  tracks: [],
  loading: false
}
// export tracks in current state + changes
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TRACKS:
      return {
        ...state, // return state of tracks
        tracks: action.payload,
        loading: false
      };
      case ADD_TRACK:
      return {
        ...state,
        tracks: [
          action.payload, ...state.tracks
        ] // copy state and return with new image
      };
    case TRACKS_LOADING:
      return {
        ...state,
        loading: true
      };
      case TRACKS_LOADING:
      return {
        ...state,
        loading: false
      }
    default:
      return state;
  }
}