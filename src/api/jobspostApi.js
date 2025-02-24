import apiClient from './index';

const jobspostApi = {
    getPage: ({ page, size, search }) => apiClient.get('/jobposts', { params: { page, size, search } }),
    getById: (id) => apiClient.get(`/jobposts/${id}`),
    getByAccountId: (accountId) => apiClient.get(`/jobposts/account/${accountId}`),
    add: (jobpost) => apiClient.post('/jobposts', jobpost),
    update: (id, staff) => apiClient.put(`/jobposts/${id}`, staff),
    delete: (id) => apiClient.delete(`/jobposts/${id}`),
    getStatusById: (id) => apiClient.get(`/jobposts/${id}/status`),
    post: (id) => apiClient.post(`/jobposts/${id}/post`),
};

export default jobspostApi;