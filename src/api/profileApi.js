import apiClient from './index';

const profileApi = {
    getByAccount: (account) => apiClient.get(`/profiles/account`, account),
    getByAccountId: (id) => apiClient.get(`/profiles/account/${id}`),
    getByRecruiterId: (id) => apiClient.get(`/profiles/recruiter/${id}`),
    getById: (id) => apiClient.get(`/profiles/${id}`),
    getPageFreelancerNotNull: ({page, size}) => apiClient.get(`/profiles/freelancers`, {params: {page, size}}),
    uploadImage: (id, image) => apiClient.patch(`/profiles/${id}/image`, image, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }),
    update: (id, profile) => apiClient.put(`/profiles/${id}`, profile),
};

export default profileApi;
