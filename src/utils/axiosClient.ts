import type {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import axios from 'axios';

const baseURL: string = process.env.BASE_API || 'http://localhost:1511';

export const axiosClient: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true,
  paramsSerializer: (params) => JSON.stringify(params),
});

axiosClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  try {
    const userInfoItem = localStorage.getItem('userInfo');
    const token = localStorage.getItem('ACCESS_TOKEN');
    const userInfo = userInfoItem ? JSON.parse(userInfoItem) : null;

    if (userInfo) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  } catch (e) {
    console.log(e);
    throw e;
  }
});

axiosClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error) => {
    throw error.response?.data;
  },
);
