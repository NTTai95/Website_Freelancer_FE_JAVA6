import apiClient from './index';

const profileApi = {
    getByAccount: (account) => apiClient.get(`/profile/account`, account),
    getByAccountId: (id) => apiClient.get(`/profile/account/${id}`),
    uploadImage: (id, image) => apiClient.patch(`/profile/${id}/image`, image, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }),
};

export default profileApi;
