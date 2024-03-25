import { axiosClient } from '@/utils/axiosClient';


export const reqCreateAward = async (
    params: Partial<any>,
) => {
    const url = `/awards/`;
    return await axiosClient.post(url, params);
};


export const reqGetAwardByUserId = async (
    user_id: string,
) => {
    const url = `/awards/getAwards/${user_id}`;
    return await axiosClient.get(url);
};

export const reqUpdateAward = async (
    params: Partial<any>,
) => {
    const url = `/awards/${params.id}`;
    return await axiosClient.put(url, params);
};

export const reqGetAward = async (
    id: string,
) => {
    const url = `/awards/${id}`;
    return await axiosClient.get(url);
};

export const reqDeleteAward = async (
    expId: string
) => {
    const url = `/awards/${expId}`
    return await axiosClient.delete(url)
}