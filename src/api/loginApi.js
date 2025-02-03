import apiClient from './index';

const loginApi = {
    login: (email, password) =>
        apiClient.post('/login', null, { params: { email, password } }),
};


export default loginApi;