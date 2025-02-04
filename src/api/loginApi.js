import apiClient from './index';

const loginApi = {
    login: (email, password) =>
        apiClient.post('/login', { email, password }),
};


export default loginApi;