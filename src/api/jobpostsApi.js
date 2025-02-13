import apiClient from './index';

const jobpostsApi = {
  getAll: () => apiClient.get('/jobposts'),
};

export default jobpostsApi;

