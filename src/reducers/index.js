import formVisibleReducer from './form-visible-reducer';
import profileListReducer from './profile-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterProfileList: profileListReducer
});

export default rootReducer;