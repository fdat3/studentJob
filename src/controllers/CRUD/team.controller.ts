import { Request, Response, NextFunction } from 'express';
import { CRUDController } from '@controllers/crud.controller';
import { teamService } from '@/services';
import { TeamDto } from '@/common/dtos';

export class TeamController extends CRUDController<typeof teamService> {
  constructor() {
    super(teamService);
  }

  public findMany = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teams: { rows: TeamDto[]; count: number } = await this.service.getList();
      res.status(200).json(teams);
    } catch (error) {
      next(error);
    }
  };

  public findOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      req.queryInfo.filter.id = id;
      const team: TeamDto = await this.service.getItem(req.queryInfo);
      res.status(200).json(team);
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teamData: TeamDto = req.body;
      const createdTeam: TeamDto = await this.service.create(teamData);
      res.status(201).json(createdTeam);
    } catch (error) {
      next(error);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body.id = req.params.id;
      const teamData: TeamDto = req.body;
      const updatedTeam: TeamDto = await this.service.update(teamData);
      res.status(200).json(updatedTeam);
    } catch (error) {
      next(error);
    }
  };

  public delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.queryInfo.filter.id = req.params.id;
      const deletedTeam: number | void = await this.service.delete(req.queryInfo);
      res.status(200).json(deletedTeam);
    } catch (error) {
      next(error);
    }
  };
}
