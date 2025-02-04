import apiClient from './index';

const skillApi = {
    getAll: () => apiClient.get('/skills'),
    add: () => apiClient.post('/skills'),
    getById(id) {
        return apiClient.get(`/skill/${id}`);
    }
};

export default skillApi;
