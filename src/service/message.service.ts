import { reqCreateMessage, reqGetAllMessage } from "@/api/message";
import { AxiosResponse } from "axios";

export const handleCreateMessage = async (params: any) => {
    try {
        const res: AxiosResponse = await reqCreateMessage(params);
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};

export const handleGetAllMessage = async (params: any) => {
    try {
        const res: AxiosResponse = await reqGetAllMessage(params);
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};
