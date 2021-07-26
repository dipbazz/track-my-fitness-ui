import { loginUser } from '.';
import { auth } from '../../utils/api';

export const loginUserAsync = (email, password) => (dispatch) => {
  console.log(dispatch, '###########3');
  return auth.login({
    user: {
      email,
      password,
    },
  }).then((data) => dispatch(loginUser(data)));
};

export const logoutUserAsync = () => (dispatch) => auth.logout()
  .then((data) => dispatch(loginUser(data)));
