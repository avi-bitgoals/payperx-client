/* eslint no-param-reassign: ["error", { "props": false }] */

import axios from 'axios';

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';

axios.interceptors.request.use((config) => {
  if (typeof window === 'undefined') {
    return config;
  }
  const token = window.localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

const appService = {
  login(credentials) {
    return new Promise((resolve, reject) => {
      axios.post('/auth/token', credentials)
        .then((response) => {
          resolve(response.data);
        })
        .catch((response) => {
          reject(response.status);
        });
    });
  },
};

export default appService;
