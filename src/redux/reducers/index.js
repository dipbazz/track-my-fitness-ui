import { combineReducers } from 'redux';
import exerciseReducer from './exerciseReducer';
import measurementReducer from './measurementReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  currentUser: userReducer,
  exercise: exerciseReducer,
  measurement: measurementReducer,
});

export default rootReducer;
