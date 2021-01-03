import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import imageUploadReducer from './imageUploadReducer';
import audioReducer from './audioReducer';
import trackUploadReducer from './trackUploadReducer';
import releaseReducer from './releaseReducer';

export default combineReducers({
	item: itemReducer,
	image: imageUploadReducer,
	audio: audioReducer,
	track: trackUploadReducer,
	release: releaseReducer
});
