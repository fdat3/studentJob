import { reqCreateExp, reqDeleteExp, reqGetExp, reqGetExpById, reqUpdateExp } from "@/api/experience";
import { AxiosResponse } from "axios";

export const handleCreateExp = async (params: any) => {
    try {
        const res: AxiosResponse = await reqCreateExp(params);
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};

export const handleUpdateExp = async (params: any) => {
    try {
        const res: AxiosResponse = await reqUpdateExp(params);
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};

export const handleGetExpById = async (params: any) => {
    try {
        const res: AxiosResponse = await reqGetExp(params);
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};

export const handleGetExpByUserId = async (params: any) => {
    try {
        const res: AxiosResponse = await reqGetExpById(params);
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};

export const handleDelExp = async (params: any) => {
    try {
        const res: AxiosResponse = await reqDeleteExp(params);
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};