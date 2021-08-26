import { setMeasurement } from '../actions';
import reducerHandler, { initialState } from './ReducerHandler';

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

  const data = Object.entries(items).map(([key, value]) => ({ date: key, data: value }));
  return data.sort((a, b) => ((a.date < b.date) ? 1 : -1));
};

const measurementReducer = (state = initialState, action) => {
  const response = reducerHandler(state, action, setMeasurement);

  switch (action.type) {
    case setMeasurement.SUCCESS:
      return {
        ...response,
        data: prepareData(action.data),
      };
    case setMeasurement.ERROR:
    case setMeasurement.REQUEST:
      return response;
    default:
      return state;
  }
};

export default measurementReducer;
