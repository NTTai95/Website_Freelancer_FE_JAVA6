import apiClient from './index';

const permissionApi = {
  getAll: () => apiClient.get('/permissions'),
};

export default permissionApi;
