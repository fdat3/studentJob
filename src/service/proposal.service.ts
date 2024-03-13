import type { AxiosResponse } from 'axios';
import { reqCreateProp, reqGetPros } from '@/api/proposal';
export const handleCreateProp = async (params: any) => {
    try {
        const res: AxiosResponse = await reqCreateProp(params);
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};

export const handleGetPros = async () => {
    try {
        const res: AxiosResponse = await reqGetPros();
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};