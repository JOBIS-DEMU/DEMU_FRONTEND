import axios from 'axios';

const baseUrl = import.meta.env.VITE_SERVER_BASE_URL

const api = axios.create({
	baseURL : baseUrl
});

export default api;