import moment from 'moment';

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

const flaten = (data) => {
  const result = [];
  data.forEach((item) => {
    result.push(...item.data);
  });
  return result;
};

export const monthlyMeasurements = (measurements) => {
  const today = moment();
  const lastMonth = moment().subtract(1, 'months');
  const oneMonthMeasurements = measurements.filter((measurement) => (
    measurement.date <= today.format('YYYY-MM-DD') && measurement.date > lastMonth.format('YYYY-MM-DD')));
  return flaten(oneMonthMeasurements);
};

export const weeklyMeasurements = (measurements, week = 0) => {
  const weekFirst = moment().subtract(7 * week, 'days');
  const weekSecond = moment().subtract(7 * (week + 1), 'days');
  const weekMeasurements = measurements.filter((measurement) => (
    measurement.date <= weekFirst.format('YYYY-MM-DD') && measurement.date > weekSecond.format('YYYY-MM-DD')));
  return flaten(weekMeasurements);
};
