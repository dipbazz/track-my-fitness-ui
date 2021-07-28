import {
  ERROR_LOGIN, LOADING_LOGIN, LOGOUT, STATUS, SUCCESS_LOGIN,
} from '../actions/actionTypes';

const isAuthenticated = Boolean(window.localStorage.getItem('token'));

const initialState = {
  isAuthenticated,
  status: STATUS.idle,
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        status: STATUS.success,
        error: null,
      };
    case LOADING_LOGIN:
      return {
        ...state,
        isAuthenticated: false,
        status: STATUS.loading,
        user: null,
        error: null,
      };
    case ERROR_LOGIN:
      return {
        ...state,
        isAuthenticated: false,
        status: STATUS.error,
        user: null,
        error: action.payload.errors,
      };
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

export default authReducer;
