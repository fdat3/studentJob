import { ProposalEntity } from '@/models';
import { CRUDService } from '@services/crud.service';

export class ProposalService extends CRUDService<ProposalEntity> {
  constructor() {
    super(ProposalEntity);
  }
}
