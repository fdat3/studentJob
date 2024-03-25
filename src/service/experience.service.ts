import { reqCreateExp, reqGetExpById } from "@/api/experience";
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

export const handleGetExpByUserId = async (params: any) => {
    try {
        const res: AxiosResponse = await reqGetExpById(params);
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};