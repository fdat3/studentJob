import { axiosClient } from '@/utils/axiosClient';


export const reqCreateMessage = async (
    params: Partial<any>,
) => {
    const url = `/message/`;
    return await axiosClient.post(url, params);
};

export const reqGetAllMessage = async (
    params: Partial<any>,
) => {
    const url = `/message/${params}`;
    return await axiosClient.get(url);
};