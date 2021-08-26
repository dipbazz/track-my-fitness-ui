import {
  loginUser,
  logoutUser,
  measurementError,
  measurementLoading,
  measurementSuccess,
  registerUser,
  setExercise,
} from '.';
import { auth, exercise, measurement } from '../../utils/api';

export const loginUserAsync = (email, password) => (dispatch) => {
  dispatch(loginUser.request());
  auth.login({
    user: {
      email,
      password,
    },
  })
    .then((data) => dispatch(loginUser.success(data)))
    .catch((error) => dispatch(loginUser.error(error.response.data)));
};

export const registerUserAsync = (email, password) => (dispatch) => {
  dispatch(registerUser.request());
  auth.register({
    user: {
      email,
      password,
    },
  })
    .then((data) => dispatch(registerUser.success(data)))
    .catch((error) => dispatch(registerUser.error(error.response.data)));
};

export const logoutUserAsync = () => (dispatch) => auth.logout()
  .then(() => dispatch(logoutUser()));

export const getExerciseAsync = (id) => (dispatch) => {
  dispatch(setExercise.request());
  exercise.get(id)
    .then((data) => dispatch(setExercise.success(data)))
    .catch((error) => dispatch(setExercise.error(error.response.data)));
};

export const getMeasurementAsync = (id) => (dispatch) => {
  dispatch(measurementLoading());
  measurement.get(id)
    .then((data) => dispatch(measurementSuccess(data)))
    .catch((error) => dispatch(measurementError(error.response.data)));
};
