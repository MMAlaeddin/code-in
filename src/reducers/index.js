import formVisibleReducer from './form-visible-reducer';
import profileListReducer from './profile-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';


const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterProfileList: profileListReducer,
  firestore: firestoreReducer

});

export default rootReducer;