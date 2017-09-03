import axios from 'axios';

const settings = {
  // baseURL: 'https://jsonplaceholder.typicode.com',
  baseURL: 'http://localhost:3001',
};

const config = {
  headers: {
    Accept: 'application/json',
  },
};


export const fetch = url => (
  axios.get(`${settings.baseURL}${url}`, config)
);

export const post = (url, payload) => (
  axios.post(`${settings.baseURL}${url}`, payload, config)
);
