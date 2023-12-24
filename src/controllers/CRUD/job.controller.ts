import { JobDto } from '@/common/dtos';
import { Request, Response, NextFunction } from 'express';
import { CRUDController } from '@controllers/crud.controller';
import { jobService } from '@/services';

export class JobController extends CRUDController<typeof jobService> {
  constructor() {
    super(jobService);
  }

  public getExperiences = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const jobs: { rows: JobDto[]; count: number } = await this.service.getList();
      res.status(200).json(jobs);
    } catch (error) {
      next(error);
    }
  };

  public getExperienceById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      req.queryInfo.filter.id = id;
      const product: JobDto = await this.service.getItem(req.queryInfo);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  };

  public createExperience = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productData: JobDto = req.body;
      const createdExperience: JobDto = await this.service.create(productData);
      res.status(201).json(createdExperience);
    } catch (error) {
      next(error);
    }
  };

  public updateExperience = async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body.id = req.params.id;
      const productData: JobDto = req.body;
      const updatedExperience: [number, JobDto[]] = await this.service.update(productData);
      res.status(200).json(updatedExperience);
    } catch (error) {
      next(error);
    }
  };

  public deleteExperience = async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.queryInfo.filter.id = req.params.id;
      const deletedExperience: number | void = await this.service.delete(req.queryInfo);
      res.status(200).json(deletedExperience);
    } catch (error) {
      next(error);
    }
  };
}
