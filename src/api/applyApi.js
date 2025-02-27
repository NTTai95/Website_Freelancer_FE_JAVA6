import apiClient from './index';

const applyApi = {
    create: (data) => apiClient.post('/applies', data),
    getById: (id) => apiClient.get(`/applies/${id}`),
    getByFreelancerId: (id) => apiClient.get(`/applies/freelancer/${id}`),
    getByJobId: (id) => apiClient.get(`/applies/job/${id}`),
    update: (id, data) => apiClient.put(`/applies/${id}`, data),
    delete: (id) => apiClient.delete(`/applies/${id}`),

    getAppliesByJobPost: ({ jobPostId, page = 1, size = 10, search }) =>
        apiClient.get(`/applies/jobpost/${jobPostId}`, {
            params: { page, size, search }
        }),
    
    selectApply: (id) => apiClient.put(`/applies/select/${id}`),
    
};

export default applyApi;
