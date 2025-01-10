import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080/demo' });

export const fetchHello = () => API.get();
