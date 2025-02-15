import apiClient from './index';

const freelancerApi = {
  getAll: () => apiClient.get('/freelancers'),
  getById: (id) => apiClient.get(`/freelancers/${id}`),
  update: (id, freelancer) => apiClient.put(`/freelancers/${id}`, freelancer),
  delete: (id) => apiClient.delete(`/freelancers/${id}`),
  search: (search) => apiClient.get('/freelancers/search', { params: { search } }),
};

export default freelancerApi;