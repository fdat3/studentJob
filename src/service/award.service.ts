import { reqCreateAward, reqDeleteAward, reqGetAward, reqGetAwardByUserId, reqUpdateAward } from "@/api/award";
import { AxiosResponse } from "axios";

export const handleCreateAward = async (params: any) => {
    try {
        const res: AxiosResponse = await reqCreateAward(params);
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};

export const handleGetAwardByUserId = async (params: any) => {
    try {
        const res: AxiosResponse = await reqGetAwardByUserId(params);
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};

export const handleUpdateAward = async (params: any) => {
    try {
        const res: AxiosResponse = await reqUpdateAward(params);
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};

export const handleGetAwardById = async (params: any) => {
    try {
        const res: AxiosResponse = await reqGetAward(params);
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};

export const handleDelAward = async (params: any) => {
    try {
        const res: AxiosResponse = await reqDeleteAward(params);
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};