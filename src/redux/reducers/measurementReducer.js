import {
  ERROR_MEASUREMENT,
  LOADING_MEASUREMENT,
  STATUS, SUCCESS_MEASUREMENT,
} from '../actions/actionTypes';

const initialState = {
  status: STATUS.idle,
  measurements: [],
  error: null,
};

const measurementReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_MEASUREMENT:
      return {
        ...state,
        measurements: action.payload,
        status: STATUS.success,
        error: null,
      };
    case LOADING_MEASUREMENT:
      return {
        ...state,
        status: STATUS.loading,
        error: null,
      };
    case ERROR_MEASUREMENT:
      return {
        ...state,
        status: STATUS.error,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default measurementReducer;
