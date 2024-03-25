import { axiosClient } from '@/utils/axiosClient';


export const reqCreateEdu = async (
    params: Partial<any>,
) => {
    const url = `/education/`;
    return await axiosClient.post(url, params);
};


export const reqGetEduById = async (
    user_id: string,
) => {
    const url = `/education/getEdu/${user_id}`;
    return await axiosClient.get(url);
};
