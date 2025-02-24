import { getPage } from '@cloudinary/url-gen/actions/extract';
import apiClient from './index';

const freelancerApi = {
  getAll: () => apiClient.get('/freelancers'),
  getById: (id) => apiClient.get(`/freelancers/${id}`),
  update: (id, freelancerDTO) => apiClient.put(`/freelancers/${id}`, freelancerDTO),
  create: (freelancerDTO) => apiClient.post('/freelancers', freelancerDTO),
  delete: (id) => apiClient.delete(`/freelancers/${id}`),
  search: (search) => apiClient.get('/freelancers/search', { params: { search } }),
  getByAccountId: (accountId) => apiClient.get(`/freelancers/account/${accountId}`),
};

export default freelancerApi;
