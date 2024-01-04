import { TeamEntity } from '@/models';
import { CRUDService } from '@services/crud.service';

export class TeamService extends CRUDService<TeamEntity> {
  constructor() {
    super(TeamEntity);
  }
}
