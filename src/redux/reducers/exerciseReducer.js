import {
  ERROR_EXERCISE, LOADING_EXERCISE, STATUS, SUCCESS_EXERCISE,
} from '../actions/actionTypes';

const initialState = {
  status: STATUS.idle,
  exercises: [],
  error: null,
};

const exerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_EXERCISE:
      return {
        ...state,
        exercises: action.payload,
        status: STATUS.success,
        error: null,
      };
    case LOADING_EXERCISE:
      return {
        ...state,
        status: STATUS.loading,
        error: null,
      };
    case ERROR_EXERCISE:
      return {
        ...state,
        status: STATUS.error,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default exerciseReducer;
