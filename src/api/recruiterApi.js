import apiClient from './index';

const skillApi = {
    add: (skill) => apiClient.post('/skills', skill),
    getById: (id) => apiClient.get(`/recruiters/${id}`),
    update: (id, skill) => apiClient.put(`/skills/${id}`, skill) 

};

export default skillApi;
