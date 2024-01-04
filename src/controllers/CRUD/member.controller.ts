import { Request, Response, NextFunction } from 'express';
import { CRUDController } from '@controllers/crud.controller';
import { memberService } from '@/services';
import { MemberDto } from '@/common/dtos';

export class MemberController extends CRUDController<typeof memberService> {
  constructor() {
    super(memberService);
  }

  public findMany = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const members: { rows: MemberDto[]; count: number } = await this.service.getList();
      res.status(200).json(members);
    } catch (error) {
      next(error);
    }
  };

  public findOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const member: MemberDto = await this.service.getItem(req.queryInfo);
      res.status(200).json(member);
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const member: MemberDto = await this.service.create(req.body);
      res.status(201).json(member);
    } catch (error) {
      next(error);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body.id = req.params.id;
      const member: MemberDto = await this.service.update(req.body);
      res.status(200).json(member);
    } catch (error) {
      next(error);
    }
  };

  public delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.queryInfo.where.id = req.params.id;
      const deleted: number | void = await this.service.delete(req.queryInfo);
      res.status(200).json(deleted);
    } catch (error) {
      next(error);
    }
  };
}
