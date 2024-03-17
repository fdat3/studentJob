import type { AxiosResponse } from 'axios';
import { reqCreateProp, reqGetPropsApplied, reqGetPros, reqAcceptStudent } from '@/api/proposal';
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

export const handlePropsApplied = async () => {
    try {
        const userInfo = localStorage.getItem('userInfo');
        const userId = userInfo ? JSON.parse(userInfo).id : null;
        if (!userId) {
            throw new Error('User not found');
        }
        const res: any = await reqGetPropsApplied(userId);
        const data = res?.data;
        console.log("🚀 ~ data:", data)
        return data
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
};

export const handleAcceptStudent = async (data: any) => {
    try {
        const res: AxiosResponse = await reqAcceptStudent(data);
        return res;
    } catch (error) {
        console.error('ERROR ==>', error);
        throw error;
    }
}