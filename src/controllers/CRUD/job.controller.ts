import { JobDto } from '@/common/dtos';
import { Request, Response, NextFunction } from 'express';
import { CRUDController } from '@controllers/crud.controller';
import { jobService } from '@/services';

export class JobController extends CRUDController<typeof jobService> {
  constructor() {
    super(jobService);
  }

  public findMany = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const jobs: { rows: JobDto[]; count: number } = await this.service.getList();
      res.status(200).json(jobs);
    } catch (error) {
      next(error);
    }
  };

  public findOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      req.queryInfo.filter.id = id;
      const job: JobDto = await this.service.getItem(req.queryInfo);
      res.status(200).json(job);
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const jobData: JobDto = req.body;
      const createdJob: JobDto = await this.service.create(jobData);
      res.status(201).json(createdJob);
    } catch (error) {
      next(error);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body.id = req.params.id;
      const jobData: JobDto = req.body;
      const updatedJob: JobDto = await this.service.update(jobData);
      res.status(200).json(updatedJob);
    } catch (error) {
      next(error);
    }
  };

  public delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.queryInfo.filter.id = req.params.id;
      const deletedJob: number | void = await this.service.delete(req.queryInfo);
      res.status(200).json(deletedJob);
    } catch (error) {
      next(error);
    }
  };
}
