import axios from 'axios';

const baseUrl = "http://3.37.219.136:8080";

const api = axios.create({
	baseURL : baseUrl
});

export default api;