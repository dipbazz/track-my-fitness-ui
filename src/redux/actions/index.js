import { LOGOUT } from './actionTypes';

const actionCreator = (action) => {
  const values = ['SUCCESS', 'ERROR', 'REQUEST'];
  const types = values.reduce((acc, value) => {
    const type = `${action}_${value}`;
    acc[value] = type;
    acc[value.toLowerCase()] = (data) => ({
      type,
      data,
    });
    return acc;
  }, {});
  return types;
};

export const loginUser = actionCreator('LOGIN_USER');
export const registerUser = actionCreator('REGISTER_USER');
export const setExercise = actionCreator('EXERCISE');
export const setMeasurement = actionCreator('MEASUREMENT');
export const logoutUser = () => ({
  type: LOGOUT,
});

console.log(setMeasurement);

// export const measurementLoading = () => ({
//   type: LOADING_MEASUREMENT,
// });

// export const measurementSuccess = (data) => ({
//   type: SUCCESS_MEASUREMENT,
//   payload: data,
// });

// export const measurementError = (error) => ({
//   type: ERROR_MEASUREMENT,
//   payload: error,
// });
