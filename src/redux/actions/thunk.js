import {
  exerciseError,
  exerciseLoading,
  exerciseSuccess,
  loginUser,
  logoutUser,
  measurementError,
  measurementLoading,
  measurementSuccess,
  registerUserError, registerUserLoading, registerUserSuccess,
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

export const getExerciseAsync = (id) => (dispatch) => {
  dispatch(exerciseLoading());
  exercise.get(id)
    .then((data) => dispatch(exerciseSuccess(data)))
    .catch((error) => dispatch(exerciseError(error.response.data)));
};

export const getMeasurementAsync = (id) => (dispatch) => {
  dispatch(measurementLoading());
  measurement.get(id)
    .then((data) => dispatch(measurementSuccess(data)))
    .catch((error) => dispatch(measurementError(error.response.data)));
};
