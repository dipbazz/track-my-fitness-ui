import {
  loginUserError, loginUserLoading, loginUserSuccess, logoutUser,
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

export const logoutUserAsync = () => (dispatch) => auth.logout()
  .then(() => dispatch(logoutUser()));
