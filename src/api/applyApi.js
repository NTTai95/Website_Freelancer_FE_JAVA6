
import apiClient from './index';

const applyApi = {
    create: (data) => apiClient.post('/applies', data),
    getById: (id) => apiClient.get(`/applies/${id}`),
    getByFreelancerId: (id) => apiClient.get(`/applies/freelancer/${id}`),
    getByJobId: (id) => apiClient.get(`/applies/job/${id}`),
    update: (id, data) => apiClient.put(`/applies/${id}`, data),
    delete: (id) => apiClient.delete(`/applies/${id}`),
};

export default applyApi;
