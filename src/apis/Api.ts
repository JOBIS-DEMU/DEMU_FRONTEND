import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const baseUrl = process.env.BASE_URL;

const api = axios.create({
	baseURL : baseUrl
});

export default api;