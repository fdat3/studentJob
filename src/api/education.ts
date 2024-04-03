import { axiosClient } from '@/utils/axiosClient';


export const reqCreateEdu = async (
    params: Partial<any>,
) => {
    const url = `/education/`;
    return await axiosClient.post(url, params);
};

export const reqUpdateEdu = async (
    params: Partial<any>,
) => {
    const url = `/education/${params.id}`;
    return await axiosClient.put(url, params);
};


export const reqGetEduById = async (
    user_id: string,
) => {
    const url = `/education/getEdu/${user_id}`;
    return await axiosClient.get(url);
};

export const reqGetEdu = async (
    id: string,
) => {
    const url = `/education/${id}`;
    return await axiosClient.get(url);
};


export const reqDeleteEdu = async (
    eduId: string
) => {
    const url = `/education/${eduId}`
    return await axiosClient.delete(url)
}