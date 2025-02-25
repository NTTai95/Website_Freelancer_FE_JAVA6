
import apiClient from './index';

const forgetPasswordApi = {
    create: (email) => apiClient.get(`/forgetpassword/create/${email}`),
};
export default forgetPasswordApi;
