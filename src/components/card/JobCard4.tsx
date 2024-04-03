import Image from 'next/image';
import Link from 'next/link';

import type { JobInterface } from '@/interface/job.interface';

interface JobCard4Props {
  data: any;
}
export default function JobCard4({ data }: JobCard4Props) {
  return (
    <>
      <div className="job-list-style1 bdr1"
        style={{ minHeight: '145px' }}
      >
        <div className="icon d-flex align-items-center mb20">
          {/* <Image
            height={60}
            width={60}
            className="wa"
            src={data.img}
            alt="img"
          /> */}
          <h6 className="mb-0 text-thm">{data?.location}</h6>
          <span className="fav-icon flaticon-star" />
        </div>
        <div className="details">
          <h5 className="mb20">
            <Link href={`/job-single/${data.id}`}>{data.title}</Link>
            <br></br>
            <div>
              <span style={{
                fontSize: '13px',
                color: 'gray'
              }}>{data?.price} VND</span>
              <span style={{
                padding: '0 5px',
                fontSize: '13px',
                color: 'gray'
              }}>| {data?.price_type == 0 ? 'FIXED' : 'HOURLY'}</span>
              <span style={{
                padding: '0 5px',
                fontSize: '13px',
                color: 'gray'
              }}>| {data?.recruit_type == 0 ? 'USER' : 'TEAM'}</span>
              <br></br>
              <span style={{
                fontSize: '13px',
                color: 'gray'
              }}>
                {data?.required_level == 0 && 'ENTRY'}
                {data?.required_level == 1 && 'INTERMEDIATE'}
                {data?.required_level == 2 && 'EXPERT'}
              </span>
            </div>
          </h5>
          {/* {data.map((item: any, index: any) => (
            <p
              key={index}
              className={`list-inline-item c ${index !== 0 ? 'bdrl1 pl10' : ''
                }`}
            >
              {item}
            </p>
          ))} */}
        </div>
      </div>
    </>
  );
}
