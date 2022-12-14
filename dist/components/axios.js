"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const baseURL = 'https://www.bestnfttrade.com/api/'; // const baseURL = 'http://127.0.0.1:8000/api/';

const axiosInstance = _axios.default.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    Authorization: localStorage.getItem('access_token') ? 'JWT ' + localStorage.getItem('access_token') : null,
    'Content-Type': 'application/json',
    accept: 'application/json'
  }
});

axiosInstance.interceptors.response.use(response => {
  return response;
}, async function (error) {
  const originalRequest = error.config;
  console.log(error.response);

  if (typeof error.response === 'undefined') {
    alert('A server/network error occurred. ' + 'Looks like CORS might be the problem. ' + 'Sorry about this - we will get it fixed shortly.');
    return Promise.reject(error);
  }

  if (error.response.status === 401 && originalRequest.url === baseURL + 'token/refresh/') {
    window.location.href = '/';
    return Promise.reject(error);
  }

  if (error.response.data.code === 'token_not_valid' && error.response.status === 401 && error.response.statusText === 'Unauthorized') {
    const refreshToken = localStorage.getItem('refresh_token');

    if (refreshToken) {
      const tokenParts = JSON.parse(atob(refreshToken.split('.')[1])); // exp date in token is expressed in seconds, while now() returns milliseconds:

      const now = Math.ceil(Date.now() / 1000);
      console.log(tokenParts.exp);

      if (tokenParts.exp > now) {
        return axiosInstance.post('/token/refresh/', {
          refresh: refreshToken
        }).then(response => {
          localStorage.setItem('access_token', response.data.access);
          localStorage.setItem('refresh_token', response.data.refresh);
          axiosInstance.defaults.headers['Authorization'] = 'JWT ' + response.data.access;
          originalRequest.headers['Authorization'] = 'JWT ' + response.data.access;
          return axiosInstance(originalRequest);
        }).catch(err => {
          console.log(err);
        });
      } else {
        console.log('Refresh token is expired', tokenParts.exp, now);
        window.location.href = '/';
      }
    } else {
      console.log('Refresh token not available.');
      window.location.href = '/';
    }
  } // specific error handling done elsewhere


  return Promise.reject(error);
});
var _default = axiosInstance;
exports.default = _default;