import apiClient from './index';

const profileApi = {
    getByAccount: (account) => apiClient.get(`/profile/account`, account),
    getByAccountId: (id) => apiClient.get(`/profile/account/${id}`),
};

export default profileApi;
