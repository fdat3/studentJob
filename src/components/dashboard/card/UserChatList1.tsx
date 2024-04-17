import Image from 'next/image';

import type { MessageListInterface } from '@/interface/message.interface';

interface UserChatList1Props {
  data: MessageListInterface;
}
export default function UserChatList1({ data }: any) {
  return (
    <>
      <div className="d-flex align-items-center position-relative">
        <Image
          height={50}
          width={50}
          className="img-fluid float-start rounded-circle mr10"
          src={data.img ? data.img : '/images/team/fl-2.png'}
          alt="ms1.png"
        />
        <div className="d-sm-flex">
          <div className="d-inline-block">
            <div className="fz15 fw500 dark-color ff-heading mb-0">
              {data["user.full_name"]}
            </div>
            <p className="preview">{data.title}</p>
          </div>
          <div className="iul_notific">
            {/* <small>35 mins</small> */}
            {data.status && <div className={`m_notif ${data.status}`}>2</div>}
          </div>
        </div>
      </div>
    </>
  );
}
