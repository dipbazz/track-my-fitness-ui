export const LOGOUT = 'LOGOUT';
export const RESET_USER = 'RESET_USER';

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
export const resetUser = () => ({
  type: RESET_USER,
});
