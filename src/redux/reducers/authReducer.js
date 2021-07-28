import { LOGOUT, SUCCESS_LOGIN } from '../actions/actionTypes';

const isAuthenticated = Boolean(window.localStorage.getItem('token'));

const initialState = {
  isAuthenticated,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
