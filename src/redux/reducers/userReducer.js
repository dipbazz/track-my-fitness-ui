import {
  ERROR_LOGIN, ERROR_REGISTER, LOADING_LOGIN, LOADING_REGISTER,
  LOGOUT, STATUS, SUCCESS_LOGIN, SUCCESS_REGISTER,
} from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  status: STATUS.idle,
  user: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
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
    case SUCCESS_REGISTER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        status: STATUS.success,
        error: null,
      };
    case LOADING_REGISTER:
      return {
        ...state,
        isAuthenticated: false,
        status: STATUS.loading,
        user: null,
        error: null,
      };
    case ERROR_REGISTER:
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

export default userReducer;
