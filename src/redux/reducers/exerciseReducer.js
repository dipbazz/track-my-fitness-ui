import { setExercise } from '../actions';
import reducerHandler, { initialState } from './ReducerHandler';

const exerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case setExercise.SUCCESS:
    case setExercise.ERROR:
    case setExercise.REQUEST:
      return reducerHandler(state, action, setExercise);
    default:
      return state;
  }
};

export default exerciseReducer;
