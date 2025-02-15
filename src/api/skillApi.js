import apiClient from './index';

const skillApi = {
    getPage: ({ page, size, search }) => apiClient.get('/skills', { params: { page, size, search: `name,${search || ""}` } }),
    add: (skill) => apiClient.post('/skills', skill),
    getById: (id) => apiClient.get(`/skills/${id}`),
    getByIds: (ids) => apiClient.get(`/skills/list`, { params: { ids: ids.join(',') } }),
    update: (id, skill) => apiClient.put(`/skills/${id}`, skill)

};


export default skillApi;
