'use client'


import Link from 'next/link';

import { IUser } from '@/interface/entities/user.interface';
import { handleGetJobById, handleGetListProps } from '@/service/job.service';
import { handleAcceptStudent, handleCreateProp } from '@/service/proposal.service';
import moment from 'moment';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import parseJson from 'parse-json';
import { useEffect, useState } from 'react';
import ProposalCard from '../dashboard/card/ProposalCard';
interface JobDetailProps {
  id?: string
}

export default function JobDetail1(props: JobDetailProps) {

  const [job, setJob] = useState<any>();
  const [listProps, setListProps] = useState<any>();
  const [loading, setLoading] = useState(true)
  const user: IUser = parseJson(window?.localStorage?.getItem('userInfo'));

  const router: AppRouterInstance = useRouter();
  const [profile, setProfile] = useState<IUser>(user);

  const reloadPage = () => {
    router.refresh();
  };

  const fetchJobs = (id: string) => handleGetJobById(id).then((res: any) => {
    setJob(res.data)
    setLoading(false)
  }).catch((error: any) => {
    console.log(error)
    setLoading(false)
  })

  const fetchProps = (id: string) => handleGetListProps(id).then((res: any) => {
    setListProps(res)
  }).catch((e: any) => {
    console.log(e)
  })


  useEffect(() => {
    if (props.id) {
      fetchJobs(props.id);
      fetchProps(props.id);
    }
  }, [reloadPage]);

  const onSubmit = async (newPropData: any) => {
    const newProp: any = {
      user_id: profile?.id,
      job_id: newPropData.job_id,
      price: newPropData.price,
      status: newPropData.status
    }
    await handleCreateProp(newProp)
  };

  const onSubmitAccept = async (user_id: string) => {
    const data = {
      job_id: job.id,
      user_id: user_id,
    };
    await handleAcceptStudent(data)
  }

  const formatDate = moment(job?.created_at).format("MMM Do YY");
  const price = (job?.price)?.toLocaleString({ minimumFractionDigits: 2 }
  );

  return (

    <>
      {loading ? (<p>Loading</p>) :
        <>
          <section className="breadcrumb-section pt-0">
            <div className="cta-job-v1 freelancer-single-style mx-auto maxw1700 pt120 pt60-sm pb120 pb60-sm bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg px30-lg">
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
                          <h5 className="title">DATE</h5>
                          <p className="mb-0 text">{formatDate}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                      <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                        <div className="icon flex-shrink-0">
                          <span className="flaticon-fifteen" />
                        </div>
                        <div className="details">
                          <h5 className="title">CONTRACT TYPE</h5>
                          {job?.work_type === 0 && <p>CONTRACT</p>}
                          {job?.work_type === 1 && <p>FULL TIME</p>}
                          {job?.work_type === 2 && <p>PART TIME</p>}
                          {job?.work_type === 3 && <p>TEMPORARY</p>}
                          {job?.work_type === 4 && <p>VOLUNTEER</p>}
                          {job?.work_type === 5 && <p>INTERNSHIP</p>}
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                      <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                        <div className="icon flex-shrink-0">
                          <span className="flaticon-pay-day" />
                        </div>
                        <div className="details">
                          <h5 className="title">SALARY</h5>
                          <p className="mb-0 text">{price} VND</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="service-about">
                    {user?.role != 1 ?
                      < h5 >
                        <Link href={`/employee-single/${job?.owner_id}`}>Contact to Employer !</Link>
                      </h5>
                      : ''
                    }
                    <h4 className="mb-4">Description</h4>
                    <p className="text mb30">
                      <p className="w-9/12" dangerouslySetInnerHTML={{ __html: job?.description }}></p>
                    </p>
                    {user?.role == 0 &&
                      <ProposalCard jobId={job?.id} onSubmit={onSubmit} />
                    }
                    {user?.role == 1 &&
                      <div className="ui-content">
                        <h5 className="title">List of Student was applied for this job</h5>
                        <div className="table-style1 table-responsive mb-4 mb-lg-5">
                          <table className="table table-borderless">
                            <thead className="thead-light">
                              <tr>
                                <th className="fz15 fw500" scope="col">
                                  Name
                                </th>
                                <th className="fz15 fw500" scope="col">
                                  Price Offer
                                </th>
                                <th className="fz15 fw500" scope="col">
                                  Status
                                </th>
                              </tr>
                            </thead>
                            {listProps?.map((data: any) => {
                              return (
                                <tbody key={data.user.id}>
                                  <tr key={data.user.id}>
                                    <td>{data?.user?.full_name || data?.user?.email}<br></br>
                                      <Link href={`/freelancer-single/${data?.user?.id}`}>Contact to Freelancer</Link>
                                    </td>
                                    <td>{data.price} VND</td>
                                    <td>
                                      {data.status == 1 &&
                                        <button className='ud-btn btn-thm add-joining'
                                          style={{
                                            textAlign: 'center',
                                            width: '150px',
                                            pointerEvents: 'none'
                                          }}
                                        >
                                          {data.status === 0 && <p style={{ color: 'white' }}>WAITING</p>}
                                          {data.status === 1 && <p style={{ color: 'white' }}>ACCEPT</p>}
                                          {data.status === 6 && <p style={{ color: 'white' }}>FINISH</p>}
                                        </button>
                                      }
                                      {data.status == 6 &&
                                        <button
                                          className='ud-btn btn-thm add-joining'
                                          style={{
                                            textAlign: 'center',
                                            width: '150px',
                                            backgroundColor: 'red',
                                            border: 'none',
                                            pointerEvents: 'none'
                                          }}
                                        >
                                          {data.status === 6 && <p style={{ color: 'white' }}>FINISH</p>}
                                        </button>
                                      }
                                      {data.status == 0 &&
                                        <button
                                          className='ud-btn btn-thm add-joining'
                                          style={{
                                            textAlign: 'center',
                                            width: '150px',
                                            backgroundColor: 'yellowgreen',
                                            border: 'none',
                                          }}
                                          onClick={() => onSubmitAccept(data.user.id)}
                                        >
                                          {data.status === 0 && <p style={{ color: 'white' }}>WAITING</p>}
                                        </button>
                                      }
                                    </td>
                                  </tr>
                                </tbody>
                              )
                            })}
                          </table>
                        </div>
                      </div>
                    }
                    {/* <div className="row">
                    {job1.slice(0, 3).map((item, i) => (
                      <div key={i} className="col-sm-6 col-xl-12">
                        <JobCard5 data={item} />
                      </div>
                    ))}
                  </div> */}
                  </div>
                </div >
              </div >
            </div >
          </section >
        </>
      }
    </>
  );
}
