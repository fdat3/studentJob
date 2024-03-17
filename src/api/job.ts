import type { IJob } from '@/interface/entities/job.interface';
import { axiosClient } from '@/utils/axiosClient';

export const reqCreateJob = async (
    params: Partial<IJob>,
) => {
    const url = `/jobs/`;
    return await axiosClient.post(url, params);
};


export const reqGetJob = async () => {
    const url = `/jobs/`;
    return await axiosClient.get(url);
};

export const reqGetJobById = async (
    jobId: string,
) => {
    const url = `/jobs/${jobId}`;
    return await axiosClient.get(url);
};
