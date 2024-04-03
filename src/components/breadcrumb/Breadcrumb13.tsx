'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { job1 } from '@/data/job';
import { useEffect, useState } from 'react';
import { handleGetJobById } from '@/service/job.service';
import { ManageJobInterface } from '@/interface/job.interface';


export default function Breadcrumb13(props: any) {
  console.log("🚀 ~ Breadcrumb13 ~ props:", props)
  const [job, setJob] = useState<any>();
  const [loading, setLoading] = useState(true)

  const fetchJobs = (props: any) => handleGetJobById(props).then((res: any) => {
    setJob(res.data)
    setLoading(false)
  }).catch((error: any) => {
    console.log(error)
    setLoading(false)
  })

  useEffect(() => {
    if (props) {
      fetchJobs(props)
    }
  }, []);

  return (
    <>
      <section className="breadcrumb-section pt-0">
        <div className="cta-job-v1 freelancer-single-style mx-auto maxw1700 pt120 pt60-sm pb120 pb60-sm bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg px30-lg">
          <Image
            height={226}
            width={198}
            className="left-top-img wow zoomIn"
            src="/images/vector-img/left-top.png"
            alt="left-top"
          />
          <Image
            height={181}
            width={255}
            className="right-bottom-img wow zoomIn"
            src="/images/vector-img/right-bottom.png"
            alt="right-bottom"
          />
          <div className="container">
            <div className="row wow fadeInUp">
              <div className="col-xl-8 mx-auto">
                <div className="position-relative">
                  <div className="list-meta d-lg-flex align-items-end justify-content-between">
                    <div className="wrapper d-sm-flex align-items-center mb20-md">
                      <div className="ml20 ml0-xs mt15-sm">
                        {job ? (
                          <h4 className="title">{job?.title}</h4>
                        ) : (
                          <h4 className="title">UX/UI Designer</h4>
                        )}
                        {/* <h6 className="mb-3 text-thm">Medium</h6> */}
                        <h6 className="list-inline-item mb-0">
                          {job?.work_type === 0 && <p>CONTRACT</p>}
                          {job?.work_type === 1 && <p>FULL TIME</p>}
                          {job?.work_type === 2 && <p>PART TIME</p>}
                          {job?.work_type === 3 && <p>TEMPORARY</p>}
                          {job?.work_type === 4 && <p>VOLUNTEER</p>}
                          {job?.work_type === 5 && <p>INTERNSHIP</p>}

                        </h6>
                        <h6 className="list-inline-item mb-0 bdrl-eunry pl15">
                          {job?.price_type === 0 && <p>FIXED</p>}
                          {job?.price_type === 1 && <p>HOURLY</p>}
                        </h6>
                        <h6 className="list-inline-item mb-0 bdrl-eunry pl15">
                          {job?.required_level === 0 && <p>ENTRY</p>}
                          {job?.required_level === 1 && <p>INTERMEDIATE</p>}
                          {job?.required_level === 2 && <p>EXPERT</p>}
                        </h6>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
