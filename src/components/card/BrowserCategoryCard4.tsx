import Link from 'next/link';

import type { BrowserCategoryInterface } from '@/interface/category.interface';
import type { ProjectInterface } from '@/interface/project.interface';

interface BrowserCategoryCard4Props {
  data: BrowserCategoryInterface;
}
export default function BrowserCategoryCard4({
  data,
}: BrowserCategoryCard4Props) {
  return (
    <>
      <div className="iconbox-style1 bdr1 default-box-shadow1">
        <div className="icon">
          <span className={data.icon} />
        </div>
        <div className="details mt20">
          <p className="text mb5">{data.skill} skills</p>
          <h5 className="title">
            <Link href="/job-1">{data.title}</Link>
          </h5>
        </div>
      </div>
    </>
  );
}
