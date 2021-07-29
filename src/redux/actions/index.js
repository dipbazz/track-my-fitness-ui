import {
  SUCCESS_LOGIN, LOGOUT, LOADING_LOGIN, ERROR_LOGIN, LOADING_REGISTER,
  SUCCESS_REGISTER, ERROR_REGISTER, LOADING_EXERCISE, SUCCESS_EXERCISE,
  ERROR_EXERCISE,
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

export const registerUserLoading = () => ({
  type: LOADING_REGISTER,
});

export const registerUserSuccess = (user) => ({
  type: SUCCESS_REGISTER,
  payload: user,
});

export const registerUserError = (error) => ({
  type: ERROR_REGISTER,
  payload: error,
});

export const logoutUser = () => ({
  type: LOGOUT,
});

export const exerciseLoading = () => ({
  type: LOADING_EXERCISE,
});

export const exerciseSuccess = (user) => ({
  type: SUCCESS_EXERCISE,
  payload: user,
});

export const exerciseError = (error) => ({
  type: ERROR_EXERCISE,
  payload: error,
});
