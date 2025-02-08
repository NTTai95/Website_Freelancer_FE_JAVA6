import apiClient from './index';

const skillApi = {
    getAll: () => apiClient.get('/skills'),
    add: (skill) => apiClient.post('/skills', skill),
    getById(id) {
        return apiClient.get(`/skills/${id}`);
    },
    update: (id, skill) => apiClient.put(`/skills/${id}`, skill) 

};

export default skillApi;
