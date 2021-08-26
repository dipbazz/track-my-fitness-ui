import reducerHandler, { initialState } from './ReducerHandler';
import { loginUser } from '../actions';
import {
  LOGOUT, STATUS,
} from '../actions/actionTypes';

const isAuthenticated = Boolean(window.localStorage.getItem('token'));

const userState = {
  ...initialState,
  isAuthenticated,
};

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case loginUser.SUCCESS:
    case loginUser.ERROR:
    case loginUser.REQUEST:
      return reducerHandler(state, action, loginUser);
    case LOGOUT:
      return {
        isAuthenticated: false,
        user: null,
        status: STATUS.idle,
      };
    default:
      return state;
  }
};

export default userReducer;
