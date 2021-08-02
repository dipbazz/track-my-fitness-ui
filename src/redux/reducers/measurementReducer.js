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

const prepareData = (measurements) => {
  const items = {};
  measurements.forEach((measurement) => {
    const key = measurement.created_at.split('T')[0];
    const value = items[key];
    if (value) {
      value.push(measurement);
    } else {
      items[key] = [measurement];
    }
  });

  return Object.entries(items).map(([key, value]) => ({ date: key, data: value }));
};

const measurementReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_MEASUREMENT:
      return {
        ...state,
        measurements: prepareData(action.payload),
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
