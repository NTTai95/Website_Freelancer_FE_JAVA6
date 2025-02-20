import apiClient from './index';

const jobspostApi = {
    getPage: ({ page, size }) => apiClient.get('/jobposts', { params: { page, size } }),
    getById: (id) => apiClient.get(`/jobposts/${id}`),
    add: (jobpost) => apiClient.post('/jobposts', jobpost),
    update: (id, staff) => apiClient.put(`/jobposts/${id}`, staff),
    delete: (id) => apiClient.delete(`/jobposts/${id}`),
};

export default jobspostApi;