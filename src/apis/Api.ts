import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { Cookies } from 'react-cookie';

const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;
const cookies = new Cookies();

const api: AxiosInstance = axios.create({
	baseURL: baseUrl
});

const saveToken = (
	data: {
		access_token: string;
		refresh_token?: string;
	}
) => {
	cookies.set('access_token', data.access_token);
	if (data.refresh_token) {
		cookies.set('refresh_token', data.refresh_token);
	}
};

const removeToken = () => {
	cookies.remove('access_token', { path: '/' });
	cookies.remove('refresh_token', { path: '/' });
	delete api.defaults.headers.common['Authorization'];
};

const getAuthToken = () => {
	return cookies.get('access_token');
}

const getRefreshToken = () => {
	return cookies.get('refresh_token');
};

api.interceptors.request.use(
  (config) => {
		const token = getAuthToken();
		if (token) {
			config.headers['Authorization'] = 'Bearer ' + token;
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
				const refreshToken = getRefreshToken();
				const { data } = await api.post('/public/token/reissue', { refreshToken: refreshToken });
				saveToken(data);
				return api(originalRequest);
			} catch (refreshError) {
				removeToken();
				return Promise.reject(refreshError);
			}
		}
		return Promise.reject(error);
	}
);

export { saveToken, removeToken };

export default api;
