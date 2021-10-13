import axios from 'axios';
import { getAuthorizeToken, login, logout } from './helper';

const baseURL = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL,
});

const authorizeApi = axios.create({
  baseURL,
});

/* eslint-disable no-param-reassign */
authorizeApi.interceptors.request.use(
  (config) => {
    const token = getAuthorizeToken();
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

const getData = (res) => res.data;

const requests = {
  delete: (url) => api.delete(url).then(getData),
  get: (url) => api.get(url).then(getData),
  put: (url, body) => api.put(url, body).then(getData),
  post: (url, body) => api.post(url, body).then(getData),
};

const authorizeRequests = {
  delete: (url) => authorizeApi.delete(url).then(getData),
  get: (url) => authorizeApi.get(url).then(getData),
  put: (url, body) => authorizeApi.put(url, body).then(getData),
  post: (url, body) => authorizeApi.post(url, body).then(getData),
};

const auth = {
  login: (body) => requests.post('/users/login', body).then((data) => {
    login(data.user.token);
    return Promise.resolve(data.user);
  }),

  logout: () => {
    logout();
    return Promise.resolve({ user: null });
  },

  register: (body) => requests.post('/users', body).then((data) => {
    login(data.user.token);
    return Promise.resolve(data.user);
  }),

  user: () => authorizeRequests.get('/user'),
};

const exercise = {
  get: (id) => authorizeRequests.get(id ? `/exercises/${id}` : '/exercises'),
};

const measurement = {
  post: (body) => authorizeRequests.post('/measurements', body),
  get: (id) => authorizeRequests.get(id ? `/measurements/${id}` : '/measurements'),
};

export { auth, exercise, measurement };
