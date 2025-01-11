import axios from 'axios';

const API = axios.create({ baseURL: 'https://e0c21987-e955-4814-88fa-ee71c91177d0.mock.pstmn.io' });

export const fetchUsers = () => API.get("/users");
