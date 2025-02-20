import apiClient from './index';

const profileApi = {
    getByAccount: (account) => apiClient.get(`/profiles/account`, account),
    getByAccountId: (id) => apiClient.get(`/profiles/account/${id}`),
    uploadImage: (id, image) => apiClient.patch(`/profiles/${id}/image`, image, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }),
    getById: (id) =>apiClient.get(`/profiles/${id}`),
    update: (id, profile) => apiClient.put(`/profiles/${id}`, profile),
};

export default profileApi;
