import * as api from 'services/api';

const endpoints = {
  collection: '/posts',
  detail: id => `/posts/${id}`,
};

export const fetchCollection = () => (
  api.fetch(endpoints.collection)
);

export const fetchOne = (id) => (
  api.fetch(endpoints.detail(id))
);
