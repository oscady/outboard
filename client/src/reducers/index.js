import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import imageUploadReducer from './imageUploadReducer';
import videoReducer from './videoUploadReducer';


export default combineReducers({
  item: itemReducer,
  image: imageUploadReducer,
  video:  videoReducer
}) 