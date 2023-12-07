import Link from 'next/link';

import type { BrowserCategoryInterface } from '@/interface/category.interface';

interface BrowserCategoryCard6Props {
  data: BrowserCategoryInterface;
}
export default function BrowserCategoryCard6({
  data,
}: BrowserCategoryCard6Props) {
  return (
    <>
      <div className="iconbox-style1 at-home7 bdr1 d-flex align-items-start mb30">
        <div className="icon flex-shrink-0">
          <span className={data.icon} />
        </div>
        <div className="details ml40">
          <p className="mb-0 text">{data.skill} skills</p>
          <h5 className="title">
            <Link href="/service-2">{data.title}</Link>
          </h5>
        </div>
      </div>
    </>
  );
}
