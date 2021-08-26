import reducerHandler, { initialState } from './ReducerHandler';
import { loginUser, LOGOUT, registerUser } from '../actions';

const isAuthenticated = Boolean(window.localStorage.getItem('token'));

const userState = {
  ...initialState,
  isAuthenticated,
};

const userReducer = (state = userState, action) => {
  const loginResponse = reducerHandler(state, action, loginUser);
  const registerResponse = reducerHandler(state, action, registerUser);

  switch (action.type) {
    case loginUser.SUCCESS:
      return {
        ...loginResponse,
        isAuthenticated: true,
      };
    case loginUser.ERROR:
      return {
        ...loginResponse,
        isAuthenticated: false,
      };
    case loginUser.REQUEST:
      return {
        ...loginResponse,
        isAuthenticated: false,
      };
    case registerUser.SUCCESS:
      return {
        ...registerResponse,
        isAuthenticated: true,
      };
    case registerUser.ERROR:
      return {
        ...registerResponse,
        isAuthenticated: false,
      };
    case registerUser.REQUEST:
      return {
        ...registerResponse,
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
