import apiClient from './index';

const staffApi = {
    getAll: () => apiClient.get('/staffs'),
    getById: (id) => apiClient.get(`/staffs/${id}`),
    add: (staff) => apiClient.post('/staffs', staff),
    update: (id, staff) => apiClient.put(`/staffs/${id}`, staff),
    delete: (id) => apiClient.delete(`/staffs/${id}`),
};

export default staffApi;
