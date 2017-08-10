import { combineReducers } from 'redux';
//
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

/*
  Reducers in application:
    1. libraries
    2. selection
*/
export default combineReducers({
  libraries: LibraryReducer,     // state : reducer
  selectedLibraryId: SelectionReducer
});
