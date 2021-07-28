import { SUCCESS_LOGIN, LOGOUT } from './actionTypes';

export const loginUserSuccess = (user) => ({
  type: SUCCESS_LOGIN,
  payload: user,
});

export const logoutUser = () => ({
  type: LOGOUT,
});
