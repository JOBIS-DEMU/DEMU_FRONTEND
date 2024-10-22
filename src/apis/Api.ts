import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { useNavigate } from 'react-router-dom';

const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;

const api = axios.create({
	baseURL: baseUrl
});

const setTokens = (accessToken: string, refreshToken: string) => {
	localStorage.setItem('accessToken', accessToken);
	localStorage.setItem('refreshToken', refreshToken);
	api.defaults.headers.common['Authorization'] = accessToken;
};

const removeTokens = () => {
	localStorage.removeItem('accessToken');
	localStorage.removeItem('refreshToken');
	delete api.defaults.headers.common['Authorization'];
};

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
				removeTokens();
				useNavigate()('/');
				return Promise.reject(refreshError);
			}
		}
		return Promise.reject(error);
	}
);

export { setTokens, removeTokens };

export default api;