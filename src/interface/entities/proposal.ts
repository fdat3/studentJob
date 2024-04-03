
export interface IProposal {
    id: string;
    user_id: string;
    job_id: string;
    price: number;
    status: number;
    cover_letter: string;
    created_at: Date;
    updated_at: Date;
}
