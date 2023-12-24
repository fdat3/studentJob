import { JobEntity } from '@/models';
import { CRUDService } from '@services/crud.service';

export class JobService extends CRUDService<JobEntity> {
  constructor() {
    super(JobEntity);
  }
}
