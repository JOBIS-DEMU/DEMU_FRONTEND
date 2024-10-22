import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { useNavigate } from 'react-router-dom';

const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;

const api = axios.create({
	baseURL: baseUrl
});

api.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		const accessToken = localStorage.getItem('accessToken');
		if (accessToken) {
			config.headers['Authorization'] = accessToken;
		}
		return config;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	}
);

api.interceptors.response.use(
	(response) => response,
	async (error: AxiosError) => {
		const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			try {
				const refreshToken = localStorage.getItem('refreshToken');
				const { data } = await axios.post('/public/token', { token: refreshToken });
				localStorage.setItem('accessToken', data.accessToken);
				api.defaults.headers.common['Authorization'] = data.accessToken;
				return api(originalRequest);
			} catch (refreshError) {
				localStorage.removeItem('accessToken');
				localStorage.removeItem('refreshToken');
				useNavigate()('/');
				return Promise.reject(refreshError);
			}
		}
		return Promise.reject(error);
	}
);

export default api;