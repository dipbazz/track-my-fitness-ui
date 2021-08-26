import reducerHandler, { initialState } from './ReducerHandler';
import { loginUser } from '../actions';
import {
  LOGOUT,
} from '../actions/actionTypes';

const isAuthenticated = Boolean(window.localStorage.getItem('token'));

const userState = {
  ...initialState,
  isAuthenticated,
};

const userReducer = (state = userState, action) => {
  const response = reducerHandler(state, action, loginUser);

  switch (action.type) {
    case loginUser.SUCCESS:
      return {
        ...response,
        isAuthenticated: true,
      };
    case loginUser.ERROR:
      return {
        ...response,
        isAuthenticated: false,
      };
    case loginUser.REQUEST:
      return {
        ...response,
        isAuthenticated: false,
      };
    case LOGOUT:
      return {
        ...state,
        data: null,
        error: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default userReducer;
