'use client'

import Image from 'next/image';

import type { JobInterface } from '@/interface/job.interface';
import { useState } from 'react';

interface JobCard5Props {
  data: JobInterface;
}
export default function JobCard5({ data }: any) {

  return (
    <>
      <div className="job-list-style1 bdr1 d-xl-flex align-items-start">
        {/* <div className="icon d-flex align-items-center mb20">
          <Image
            height={60}
            width={60}
            className="wa"
            src={data.img}
            alt="icon"
          />
          <span className="fav-icon flaticon-star" />
        </div> */}
        <div className="details ml20 ml0-xl">
          <h5>{data.title}</h5>
          <h6 className="mb-3 text-thm">{data?.price} VND</h6>
          <p className="list-inline-item mb-0">
            {data?.price_type === 0 && <p>FIXED</p>}
            {data?.price_type === 1 && <p>HOURLY</p>}
          </p>
          <p className="list-inline-item mb-0 bdrl1 pl15">1-5 Days</p>
          <p className="list-inline-item mb-0 bdrl1 pl15">
            {data?.required_level == 0 && 'ENTRY'}
            {data?.required_level == 1 && 'INTERMEDIATE'}
            {data?.required_level == 2 && 'EXPERT'}</p>
          <p className="list-inline-item mb-0 bdrl1 pl15">
            {data?.work_type === 0 && <p>CONTRACT</p>}
            {data?.work_type === 1 && <p>FULL TIME</p>}
            {data?.work_type === 2 && <p>PART TIME</p>}
            {data?.work_type === 3 && <p>TEMPORARY</p>}
            {data?.work_type === 4 && <p>VOLUNTEER</p>}
            {data?.work_type === 5 && <p>INTERNSHIP</p>}
          </p>
        </div>
      </div>
    </>
  );
}
