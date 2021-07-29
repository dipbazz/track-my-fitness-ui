import { combineReducers } from 'redux';
import exerciseReducer from './exerciseReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  exercise: exerciseReducer,
});

export default rootReducer;
