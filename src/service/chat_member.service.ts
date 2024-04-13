import { reqGetAllRoom } from "@/api/chat_member";
import { AxiosResponse } from "axios";

export const handleGetAllUserInChat = async (params: any) => {
    try {
        const res: AxiosResponse = await reqGetAllRoom(params);
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};
