import { axiosClient } from '@/utils/axiosClient';


export const reqGetAllRoom = async (
    params: Partial<any>,
) => {
    const url = `/chat_member/findRoomWithUserId/${params}`;
    return await axiosClient.get(url);
};