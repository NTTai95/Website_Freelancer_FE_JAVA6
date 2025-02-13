import apiClient from './index';

const staffApi = {
    getAll: () => apiClient.get('/staffs'),
    getById: (id) => apiClient.get(`/staffs/${id}`),
    add: (staffDTO) => apiClient.post('/staffs', staffDTO),
    update: (id, staffDTO) => apiClient.put(`/staffs/${id}`, staffDTO),
    delete: (id) => apiClient.delete(`/staffs/${id}`),
};

export default staffApi;
