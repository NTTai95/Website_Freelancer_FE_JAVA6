import apiClient from './index';

const accountApi = {
  getById: () => apiClient.get('/staffs/${id}'),
};

export default accountApi;
