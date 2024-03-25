import { reqCreateEdu, reqGetEduById } from "@/api/education";
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

export const handleGetEduByUserId = async (params: any) => {
    try {
        const res: AxiosResponse = await reqGetEduById(params);
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};