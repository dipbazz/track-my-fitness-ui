import { loginUserSuccess, logoutUser } from '.';
import { auth } from '../../utils/api';

export const loginUserAsync = (email, password) => (dispatch) => {
  console.log('start loading ...');
  auth.login({
    user: {
      email,
      password,
    },
  })
    .then((data) => dispatch(loginUserSuccess(data)))
    .catch((error) => console.log(error.response));
};

export const logoutUserAsync = () => (dispatch) => auth.logout()
  .then(() => dispatch(logoutUser()));
