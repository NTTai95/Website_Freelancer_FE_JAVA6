import apiClient from './index';

const loginApi = {
    login: (email, password) =>
        apiClient.post('/login', { email, password }),
    register: (email, password) => apiClient.post('/register', { email, password }),
};


export default loginApi;