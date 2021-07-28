import {
  loginUserError, loginUserLoading, loginUserSuccess, logoutUser,
  registerUserError, registerUserLoading, registerUserSuccess,
} from '.';
import { auth } from '../../utils/api';

export const loginUserAsync = (email, password) => (dispatch) => {
  dispatch(loginUserLoading());
  auth.login({
    user: {
      email,
      password,
    },
  })
    .then((data) => dispatch(loginUserSuccess(data)))
    .catch((error) => dispatch(loginUserError(error.response.data)));
};

export const registerUserAsync = (email, password) => (dispatch) => {
  dispatch(registerUserLoading());
  auth.register({
    user: {
      email,
      password,
    },
  })
    .then((data) => dispatch(registerUserSuccess(data)))
    .catch((error) => dispatch(registerUserError(error.response.data)));
};

export const logoutUserAsync = () => (dispatch) => auth.logout()
  .then(() => dispatch(logoutUser()));
