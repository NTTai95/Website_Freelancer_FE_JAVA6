import apiClient from './index';

const staffApi = {
    getPage: ({ page, size, fullName, email, phone, sort }) => apiClient.get('/staffs', { params: { page, size, search: `fullName,${fullName || ""},email,${email || ""},phone,${phone || ""}`, sort } }),
    getById: (id) => apiClient.get(`/staffs/${id}`),
    add: (staffDTO) => apiClient.post('/staffs', staffDTO),
    update: (id, staffDTO) => apiClient.put(`/staffs/${id}`, staffDTO),
    delete: (id) => apiClient.delete(`/staffs/${id}`),
};

export default staffApi;
