import Image from 'next/image';
import Link from 'next/link';

import type { EmployeeInterface } from '@/interface/employee.interface';

interface EmployeeCard1Props {
  data: EmployeeInterface;
}
export default function EmployeeCard1({ data }: any) {
  return (
    <>
      <div className="job-list-style1 bdr1 pb10">
        <div className="icon d-flex align-items-center mb20">
          <Image
            height={60}
            width={60}
            className="wa"
            src={data.img ? data.img : '/images/team/fl-2.png'}
            alt="icon"
          />
          <h6 className="mb-0 ml20">
            <Link href={`/employee-single/${data.id}`}>{data.full_name}</Link>
          </h6>
          <span className="fav-icon flaticon-star" />
        </div>
        <div className="details">
          <p>
            <i className="fas fa-star fz10 review-color pr10" />
            <span className="dark-color">{data.city}</span>
          </p>
          <p className="list-inline-item mb-3">{data?.major}</p>
          <p className="list-inline-item mb-3 bdrl1 pl15">Open 29 Jobs</p>
        </div>
      </div>
    </>
  );
}
