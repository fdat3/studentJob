import type { AxiosResponse } from 'axios';
import { reqCreateProp, reqGetPropsApplied, reqGetPros } from '@/api/proposal';
import { IProposal } from '@/interface/entities/proposal';
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

export const handlePropsApplied = async (
    params: Partial<any>,
): Promise<IProposal> => {
    try {
        const userInfo = localStorage.getItem('userInfo');
        const userId = userInfo ? JSON.parse(userInfo).id : null;
        if (!userId) {
            throw new Error('User not found');
        }
        const res: any = await reqGetPropsApplied(userId);
        console.log("🚀 ~ res:", res)
        const data = res?.data?.rows;

        return data
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};