import type {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';

const baseURL: string = 'https://api.studentjobs.flason.pro';



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
  } catch (error: any) {
    enqueueSnackbar(error.message, { variant: 'error' });
    throw error;
  }
});

axiosClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error) => {
    enqueueSnackbar(error.message, { variant: 'error' });
    throw error.response?.data;
  },
);
