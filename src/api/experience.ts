import { axiosClient } from '@/utils/axiosClient';


export const reqCreateExp = async (
    params: Partial<any>,
) => {
    const url = `/experience/`;
    return await axiosClient.post(url, params);
};

export const reqUpdateExp = async (
    params: Partial<any>,
) => {
    const url = `/experience/${params.id}`;
    return await axiosClient.put(url, params);
};

export const reqGetExp = async (
    id: string,
) => {
    const url = `/experience/${id}`;
    return await axiosClient.get(url);
};

export const reqGetExpById = async (
    user_id: string,
) => {
    const url = `/experience/getExp/${user_id}`;
    return await axiosClient.get(url);
};

export const reqDeleteExp = async (
    expId: string
) => {
    const url = `/experience/${expId}`
    return await axiosClient.delete(url)
}