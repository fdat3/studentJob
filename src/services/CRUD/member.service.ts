import { MemberEntity } from '@/models';
import { CRUDService } from '@services/crud.service';

export class MemberService extends CRUDService<MemberEntity> {
  constructor() {
    super(MemberEntity);
  }
}
