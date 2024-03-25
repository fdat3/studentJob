import { reqCreateAward, reqGetAwardByUserId } from "@/api/award";
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