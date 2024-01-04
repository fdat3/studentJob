import { Request, Response, NextFunction } from 'express';
import { CRUDController } from '@controllers/crud.controller';
import { proposalService } from '@/services';
import { ProposalDto } from '@/common/dtos';

export class ProposalController extends CRUDController<typeof proposalService> {
  constructor() {
    super(proposalService);
  }

  public findMany = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const proposals: { rows: ProposalDto[]; count: number } = await this.service.getList();
      res.status(200).json(proposals);
    } catch (error) {
      next(error);
    }
  };

  public findOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      req.queryInfo.filter.id = id;
      const proposal: ProposalDto = await this.service.getItem(req.queryInfo);
      res.status(200).json(proposal);
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const proposalData: ProposalDto = req.body;
      const createdProposal: ProposalDto = await this.service.create(proposalData);
      res.status(201).json(createdProposal);
    } catch (error) {
      next(error);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body.id = req.params.id;
      const proposalData: ProposalDto = req.body;
      const updatedProposal: ProposalDto = await this.service.update(proposalData);
      res.status(200).json(updatedProposal);
    } catch (error) {
      next(error);
    }
  };

  public delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.queryInfo.filter.id = req.params.id;
      const deletedProposal: number | void = await this.service.delete(req.queryInfo);
      res.status(200).json(deletedProposal);
    } catch (error) {
      next(error);
    }
  };
}
