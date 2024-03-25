import { axiosClient } from '@/utils/axiosClient';


export const reqCreateExp = async (
    params: Partial<any>,
) => {
    const url = `/experience/`;
    return await axiosClient.post(url, params);
};


export const reqGetExpById = async (
    user_id: string,
) => {
    const url = `/experience/getExp/${user_id}`;
    return await axiosClient.get(url);
};
