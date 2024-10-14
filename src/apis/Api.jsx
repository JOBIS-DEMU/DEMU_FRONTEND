import axios from 'axios';

const baseUrl = import.meta.env.BASE_URL;

const api = axios.create({
	baseURL : baseUrl
});

export default api;