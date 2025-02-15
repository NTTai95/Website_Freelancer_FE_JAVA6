import apiClient from './index';

const jobspostApi = {
    getPage: ({ page, size }) => apiClient.get('/jobposts', { params: { page, size } }),
    getById: (id) => apiClient.get(`/staffs/${id}`),
    add: (staff) => apiClient.post('/staffs', staff),
    update: (id, staff) => apiClient.put(`/staffs/${id}`, staff),
    delete: (id) => apiClient.delete(`/staffs/${id}`),
};

export default jobspostApi;