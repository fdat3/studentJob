import { IProposal } from '@/interface/entities/proposal';
import { axiosClient } from '@/utils/axiosClient';

export const reqCreateProp = async (
    params: Partial<IProposal>,
) => {
    const url = `/proposals/`;
    return await axiosClient.post(url, params);
};


export const reqGetPros = async () => {
    const url = `/proposals/`;
    return await axiosClient.get(url);
};

export const reqGetPropsApplied = async (
    userId: string,
) => {
    const url = `proposals/findUser/${userId}`;
    return await axiosClient.get(url);
};
export const reqGetListProps = async (
    jobId: string,
) => {
    const url = `proposals/findJob/${jobId}`;
    return await axiosClient.get(url);
};