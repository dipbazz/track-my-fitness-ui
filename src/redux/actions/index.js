import {
  SUCCESS_LOGIN, LOGOUT, LOADING_LOGIN, ERROR_LOGIN,
} from './actionTypes';

export const loginUserLoading = () => ({
  type: LOADING_LOGIN,
});

export const loginUserSuccess = (user) => ({
  type: SUCCESS_LOGIN,
  payload: user,
});

export const loginUserError = (error) => ({
  type: ERROR_LOGIN,
  payload: error,
});

export const logoutUser = () => ({
  type: LOGOUT,
});
