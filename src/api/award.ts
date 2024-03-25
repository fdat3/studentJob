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
