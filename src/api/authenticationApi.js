import apiClient from './index';

const authenticationApi = {
    login: (email, password) =>
        apiClient.post('/login', { email, password }),
    register: (res) => apiClient.post('/register', res),
};


export default authenticationApi;