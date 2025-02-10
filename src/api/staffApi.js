import apiClient from './index';

const staffApi = {
    getAll: ({ page, size, fullName, email, phone, sort }) => apiClient.get('/staffs', { params: { page, size, search: `fullName,${fullName || ""},email,${email || ""},phone,${phone || ""}`, sort } }),
    getById: (id) => apiClient.get(`/staffs/${id}`),
    add: (staff) => apiClient.post('/staffs', staff),
    update: (id, staff) => apiClient.put(`/staffs/${id}`, staff),
    delete: (id) => apiClient.delete(`/staffs/${id}`),
};

export default staffApi;
