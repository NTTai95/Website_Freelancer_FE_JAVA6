import apiClient from './index';

const skillApi = {
    getAll: ({ page, size, search }) => apiClient.get('/skills', { params: { page, size, search: `name,${search || ""}` } }),
    add: (skill) => apiClient.post('/skills', skill),
    getById(id) {
        return apiClient.get(`/skills/${id}`);
    },
    update: (id, skill) => apiClient.put(`/skills/${id}`, skill) 

};

export default skillApi;
