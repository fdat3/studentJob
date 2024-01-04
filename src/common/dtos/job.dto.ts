import { IsString, IsOptional, IsUUID, IsNumber, Min, IsEnum, IsDate } from 'class-validator';
import {IJob} from '@/interfaces';
import { PriceType, RequiredLevel, WorkType } from '@/common/constants';

export class JobDto implements IJob {
    @IsUUID()
    public id: string;

    @IsUUID()
    public owner_id: string;

    @IsString()
    public title: string;

    @IsOptional()
    @IsString()
    public description: string;

    @IsString()
    public work_type: WorkType;

    @IsString()
    public location: string;

    @IsNumber()
    @Min(0)
    public proposal_count: number;

    @IsNumber()
    public price: number;

    @IsString()
    public price_type: PriceType;

    @IsEnum(RequiredLevel)
    public required_level: RequiredLevel;

    @IsString({each: true})
    public skills: string[];

    @IsDate()
    public created_at: Date;

    @IsDate()
    public updated_at: Date;

    @IsDate()
    public deleted_at: Date;
}
