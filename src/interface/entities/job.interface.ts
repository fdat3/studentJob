
export interface IJob {
    id: string,
    required_level: string
    skills: string[]
    owner_id: string
    title: string
    description: string
    work_type: number
    proposal_count: number
    price: number
    price_type: number
    location: string
}
