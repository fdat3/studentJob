'use client'


import Link from 'next/link';
import { job1 } from '@/data/job';

import JobCard5 from '../card/JobCard5';
import { handleGetJobById, handleGetListProps } from '@/service/job.service';
import { FormEvent, useEffect, useState } from 'react';
import moment from 'moment';
import { usePathname } from 'next/navigation';
import ProposalCard from '../dashboard/card/ProposalCard';
import { IUser } from '@/interface/entities/user.interface';
import parseJson from 'parse-json';
import { handleAcceptStudent, handleCreateProp } from '@/service/proposal.service';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { redirect, useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import TrendingServiceCard1 from '../card/TrendingServiceCard1';
import { Navigation } from 'swiper';
interface JobDetailProps {
  id?: string
}

export default function JobDetail1(props: JobDetailProps) {

  const [job, setJob] = useState<any>();
  const [listProps, setListProps] = useState<any>();
  const [loading, setLoading] = useState(true)
  const user: IUser = parseJson(window?.localStorage?.getItem('userInfo'));
  const [showSwiper, setShowSwiper] = useState(false);

  // TODO: gắn API here= 
  /**
   * listProps = Danh sách các user đã apply vào công việc này
   * Bảng hiện thị gồm có username, price offer và status
   * 
   */


  const router: AppRouterInstance = useRouter();
  const [profile, setProfile] = useState<IUser>(user);


  const fetchJobs = (id: string) => handleGetJobById(id).then((res: any) => {
    setJob(res.data)
    setLoading(false)
  }).catch((error: any) => {
    console.log(error)
    setLoading(false)
  })

  const fetchProps = (id: string) => handleGetListProps(id).then((res: any) => {
    setListProps(res)
    console.log("🚀 ~ fetchProps ~ res:", res)
  }).catch((e: any) => {
    console.log(e)
  })


  useEffect(() => {
    if (props.id) {
      fetchJobs(props.id);
      fetchProps(props.id);
    }
  }, []);

  const onSubmit = async (newPropData: any) => {
    const newProp: any = {
      user_id: profile?.id,
      job_id: newPropData.job_id,
      price: newPropData.price,
      status: newPropData.status
    }
    await handleCreateProp(newProp)
    return router.push('/proposal');
  };

  const onSubmitAccept = async (user_id: string) => {
    const data = {
      job_id: job.id,
      user_id: user_id,
    };
    await handleAcceptStudent(data)
    return router.push('/');
  }




  const formatDate = moment(job?.created_at).format("MMM Do YY");
  const price = (job?.price)?.toLocaleString({ minimumFractionDigits: 2 }
  );

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
                  {user?.role == 0 &&
                    <ProposalCard jobId={job?.id} onSubmit={onSubmit} />
                  }
                  {user?.role == 1 &&
                    <div className="ui-content">
                      <h5 className="title">Danh sách các ứng viên đã ứng tuyển</h5>
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
                              <tbody>
                                <tr key={data.user.id}>
                                  <td>{data.user.full_name}</td>
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

                  {/* <h4 className="mb-4">Description</h4>
                  <p className="text mb30">
                    {job?.description}
                  </p> */}
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
      }
    </>
  );
}
