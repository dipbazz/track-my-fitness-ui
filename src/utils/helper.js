export const login = (token) => {
  window.localStorage.setItem('token', token);
};

export const logout = () => {
  window.localStorage.removeItem('token');
};

export const getAuthorizeToken = () => {
  const token = window.localStorage.getItem('token');
  return token ? `Token ${token}` : undefined;
};

export const calculateProgress = (measurements, exercises) => {
  const sum = measurements.reduce((result, item) => {
    const exercise = exercises.find((exercise) => exercise.id === item.exercise_id);
    return result + ((item.quantity / exercise.target) * 100);
  }, 0);
  return parseFloat((sum / measurements.length).toFixed(2));
};
