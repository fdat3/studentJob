import { reqCreateEdu, reqDeleteEdu, reqGetEdu, reqGetEduById, reqUpdateEdu } from "@/api/education";
import { AxiosResponse } from "axios";

export const handleCreateEdu = async (params: any) => {
    try {
        const res: AxiosResponse = await reqCreateEdu(params);
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};

export const handleUpdateEdu = async (params: any) => {
    try {
        const res: AxiosResponse = await reqUpdateEdu(params);
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};

export const handleGetEduByUserId = async (params: any) => {
    try {
        const res: AxiosResponse = await reqGetEduById(params);
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};
export const handleGetEduById = async (params: any) => {
    try {
        const res: AxiosResponse = await reqGetEdu(params);
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};

export const handleDeleteEdu = async (params: any) => {
    try {
        const res: AxiosResponse = await reqDeleteEdu(params);
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};