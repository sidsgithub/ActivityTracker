import { configure } from 'axios-hooks';
import LRU from 'lru-cache';
import Axios from 'axios';

const getToken = () => {
  return localStorage.getItem('token');
};

const axios = Axios.create({
  baseURL: process.env.REACT_APP_BASEURL
});

axios.interceptors.request.use(
  config => {
    const customConfig = config;
    const token = getToken();

    customConfig.headers = {
      'Content-Type': 'application/json'
    };

    if (token) {
      customConfig.headers.Authorization = token;
    }

    return customConfig;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error?.response?.status === 401) {
      // todo (harsh) delete token
      // todo (harsh) redirect user to login
    }

    console.log(error);
    return Promise.reject(error);
  }
);

const cache = new LRU({ max: 0 });

configure({ axios, cache });
