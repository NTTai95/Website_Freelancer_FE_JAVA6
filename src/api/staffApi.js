import apiClient from './index';

const staffApi = {
    getAll: () => apiClient.get('/staffs')
};

export default staffApi;
