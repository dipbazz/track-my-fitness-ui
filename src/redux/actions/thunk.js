import { loginUser, logoutUser } from '.';
import { auth } from '../../utils/api';

export const loginUserAsync = (email, password) => (dispatch) => auth.login({
  user: {
    email,
    password,
  },
}).then((data) => dispatch(loginUser(data)));

export const logoutUserAsync = () => (dispatch) => auth.logout()
  .then(() => dispatch(logoutUser()));
