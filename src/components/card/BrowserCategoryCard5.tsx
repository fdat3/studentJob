import Image from 'next/image';

import type { BrowserCategoryInterface } from '@/interface/category.interface';
import type { ProjectInterface } from '@/interface/project.interface';

interface BrowserCategoryCard5Props {
  data: BrowserCategoryInterface;
}
export default function BrowserCategoryCard5({
  data,
}: BrowserCategoryCard5Props) {
  return (
    <>
      <div className="position-relative mb50 mb20-md d-flex align-items-center">
        <div className="city-img flex-shrink-0">
          <Image
            height={80}
            width={80}
            className="bdrs4 object-fit-cover"
            src={data.img}
            alt="category img"
          />
        </div>
        <div className="flex-shrink-1 ms-3">
          <h6 className="mb-1">{data.title}</h6>
          <p className="mb-0">{data.skill} skills</p>
        </div>
      </div>
    </>
  );
}
