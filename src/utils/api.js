import axios from 'axios';
import { login, logout } from './helper';

const baseURL = 'http://localhost:3000/api';
// const token = window.localStorage.getItem('token');
// let token;

const api = axios.create({
  baseURL,
});

// api.defaults.headers.common.Authorization = token;

const getData = (res) => res.data;

const requests = {
  delete: (url) => api.delete(url).then(getData),
  get: (url) => api.get(url).then(getData),
  put: (url, body) => api.put(url, body).then(getData),
  post: (url, body) => api.post(url, body).then(getData),
};

const auth = {
  login: (body) => requests.post('/users/login', body).then((data) => {
    login(data.user.token);
    return Promise.resolve(data);
  }),

  logout: () => {
    logout();
    return Promise.resolve({ user: null });
  },

  register: (body) => requests.post('/users', body).then((data) => {
    login(data.user.token);
    return Promise.resolve(data);
  }),
};

export { auth, api };
