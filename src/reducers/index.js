import { combineReducers } from 'redux';
//
import libraryReducer from './LibraryReducer';

export default combineReducers({
  libraries: libraryReducer
});
