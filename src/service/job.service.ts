import type { AxiosResponse } from 'axios';
import { reqCreateJob, reqGetJob, reqGetJobById } from '@/api/job';
export const handleCreateJob = async (params: any) => {
    try {
        const res: AxiosResponse = await reqCreateJob(params);
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};

export const handleGetJob = async () => {
    try {
        const res: AxiosResponse = await reqGetJob();
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};

export const handleGetJobById = async (params: any) => {
    try {
        const res: AxiosResponse = await reqGetJobById(params);
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};