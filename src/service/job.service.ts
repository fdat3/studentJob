import type { AxiosResponse } from 'axios';
import { reqCreateJob, reqDeleteJob, reqGetJob, reqGetJobById, reqGetJobByOwner, reqGetJobHiring } from '@/api/job';
import { reqGetListProps, reqGetPropsApplied } from '@/api/proposal';
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

export const handleDeleteJob = async (params: any) => {
    try {
        const res: AxiosResponse = await reqDeleteJob(params);
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

export const handleGetJobByOwnerId = async (params: any) => {
    try {
        const res: AxiosResponse = await reqGetJobByOwner(params);
        return res?.data;
    } catch (error) {
        console.log("🚀 ~ handleGetJobByOwnerId ~ error:", error)
        throw error;
    }
};

export const handleGetHiringJob = async (params: any) => {
    try {
        const res: AxiosResponse = await reqGetJobHiring(params);
        return res?.data;
    } catch (error) {
        throw error;
    }
};


export const handleGetListProps = async (params: any) => {
    try {
        const res: AxiosResponse = await reqGetListProps(params);
        return res?.data;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};