'use client'


import Link from 'next/link';
import { job1 } from '@/data/job';

import JobCard5 from '../card/JobCard5';
import { handleGetJobById } from '@/service/job.service';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { usePathname } from 'next/navigation';
import ProposalCard from '../dashboard/card/ProposalCard';
import { IUser } from '@/interface/entities/user.interface';
import parseJson from 'parse-json';
import { handleCreateProp } from '@/service/proposal.service';

interface JobDetailProps {
  id?: string
}

export default function JobDetail1(props: JobDetailProps) {

  const [job, setJob] = useState<any>();
  const [loading, setLoading] = useState(true)
  const user: IUser = parseJson(window.localStorage?.getItem('userInfo'));


  const [profile, setProfile] = useState<IUser>(user);

  const fetchJobs = (id: string) => handleGetJobById(id).then((res: any) => {
    setJob(res.data)
    setLoading(false)
  }).catch((error: any) => {
    console.log(error)
    setLoading(false)
  })

  useEffect(() => {
    if (props.id) {
      fetchJobs(props.id)
    }
  }, []);

  const onSubmit = async (newPropData: any) => {
    const newProp: any = {
      user_id: profile?.id,
      job_id: newPropData.job_id,
      status: newPropData.status
    }
    await handleCreateProp(newProp)
    return newProp
  };


  const formatDate = moment(job?.created_at).format("MMM Do YY");

  return (

    <>
      {loading ? (<p>Loading</p>) :
        <section className="pt10 pb90 pb30-md">
          <div className="container">
            <div className="row wow fadeInUp">
              <div className="col-lg-8 mx-auto">
                <div className="row">
                  <div className="col-sm-6 col-xl-3">
                    <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                      <div className="icon flex-shrink-0">
                        <span className="flaticon-calendar" />
                      </div>
                      <div className="details">
                        <h5 className="title">Ngày đăng tải</h5>
                        <p className="mb-0 text">{formatDate}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                      <div className="icon flex-shrink-0">
                        <span className="flaticon-place" />
                      </div>
                      <div className="details">
                        <h5 className="title">Vị trí</h5>
                        <p className="mb-0 text">{job.location}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                      <div className="icon flex-shrink-0">
                        <span className="flaticon-fifteen" />
                      </div>
                      <div className="details">
                        <h5 className="title">Hours</h5>
                        <p className="mb-0 text">50h / week</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                      <div className="icon flex-shrink-0">
                        <span className="flaticon-pay-day" />
                      </div>
                      <div className="details">
                        <h5 className="title">Salary</h5>
                        <p className="mb-0 text">{job.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-about">
                  <ProposalCard jobId={job?.id} onSubmit={onSubmit} />
                  <h4 className="mb-4">Description</h4>
                  <p className="text mb30">
                    {job.description}
                  </p>
                  {/* <div className="row">
                    {job1.slice(0, 3).map((item, i) => (
                      <div key={i} className="col-sm-6 col-xl-12">
                        <JobCard5 data={item} />
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  );
}
