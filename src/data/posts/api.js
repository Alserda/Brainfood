import * as api from 'services/api';

const endpoints = {
  fetch: '/posts',
};

export const fetch = () => api.fetch(endpoints.fetch);
