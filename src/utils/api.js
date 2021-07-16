import axios from 'axios';

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
  login: (body) => {
    requests.post('/users/login', body).then((data) => {
      window.localStorage.setItem('token', data.user.token);
      console.log(data);
      return data;
    }).catch((error) => error);
  },

  logout: () => {
    window.localStorage.removeItem('token');
    Promise.resolve({ user: null });
  },

  register: (body) => {
    requests.post('/users', body).then((data) => {
      window.localStorage.setItem('token', data.user.token);
      return data;
    }).catch((error) => error);
  },
};

export { auth, api };
