import apiClient from './index';

const skillApi = {
    add: (recruiter) => apiClient.post('/recruiters', recruiter),
    getById: (id) => apiClient.get(`/recruiters/${id}`),
    update: (id, recruiter) => apiClient.put(`/recruiters/${id}`, recruiter),
    getByAccountId: (accountId) => apiClient.get(`/recruiters/account/${accountId}`),

};

export default skillApi;
