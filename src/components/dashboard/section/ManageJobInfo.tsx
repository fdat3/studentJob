'use client'

import Pagination1 from '@/components/section/Pagination1';
import { managejob } from '@/data/dashboard';

import ManageJobCard from '../card/ManageJobCard';
import DashboardNavigation from '../header/DashboardNavigation';
import DeleteModal from '../modal/DeleteModal';
import ProposalModal1 from '../modal/ProposalModal1';
import { StrictMode, useCallback, useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import moment from 'moment';
import parseJson from 'parse-json';
import { IUser } from '@/interface/entities/user.interface';
import { handlePropsApplied } from '@/service/proposal.service';
import { handleDeleteJob, handleGetJobByOwnerId } from '@/service/job.service';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ManageJobInfo() {
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [jobs, setJobs] = useState([]);


  const [adminJobs, setAdminJobs] = useState([]);

  const [getIdJob, setGetIdJob] = useState("");

  const [props, setProps] = useState<any>();

  const [rerender, setRerender] = useState(false);

  const user: IUser = parseJson(window?.localStorage?.getItem('userInfo'));

  const router: AppRouterInstance = useRouter();

  const fetchJobApplied = () => handlePropsApplied().then((res: any) => {
    setProps(res)
  }).catch((error: any) => {
    console.log(error)
  })

  const fetchJobByOwner = () => handleGetJobByOwnerId(user?.id).then((res: any) => {
    setAdminJobs(res)
  }).catch((error: any) => {
    console.log(error)
  })

  useEffect(() => {
    fetchJobApplied();
    fetchJobByOwner();
    setRerender(false)
    return () => console.log("Cleanup..");
  }, []);


  const handleClick = (event: any) => {
    setGetIdJob(event.currentTarget.id);
  };
  const onSubmitAccept = async (job_id: any) => {
    await handleDeleteJob(job_id)
    return router.push('/manage-jobs');
  }
  const formatDate = moment(props?.created_at).format("MMM Do YY");
  const formatDateDeleted = moment(props?.deleted_at).format("MMM Do YY");


  const ITEMS_PER_PAGE: number = 10;
  const mockItems: number = 45;


  const calculateTotalPage = useCallback((totalItems: number) => {
    return Math.ceil(totalItems / ITEMS_PER_PAGE);
  }, []);

  return (

    <>
      <StrictMode>
        <div className="dashboard__content hover-bgc-color">
          <div className="row pb40">
            <div className="col-lg-12">
              <DashboardNavigation />
            </div>
            <div className="col-lg-9">
              <div className="dashboard_title_area">
                <h2>Manage Jobs</h2>
                <p className="text">Manage Your Job</p>
              </div>
            </div>
            {user?.role == 1 ?
              <div className="col-lg-3">
                <div className="text-lg-end">
                  <Link
                    href="/add-services"
                    className="ud-btn btn-dark default-box-shadow2"
                  >
                    Add Job
                    <i className="fal fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
              : ''
            }
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                <div className="packages_table table-responsive">
                  <table className="table-style3 table at-savesearch">
                    <thead className="t-head">
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Applications</th>
                        <th scope="col">Created &amp; Expired</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody className="t-body">
                      {user?.role === 1 ?
                        <>
                          {adminJobs?.map((data: any) => {
                            return (
                              < tr key={data.id} >
                                <th scope="row">
                                  <div className="freelancer-style1 p-0 mb-0 box-shadow-none">
                                    <div className="d-lg-flex align-items-lg-center">
                                      <div className="details ml15 ml0-md mb15-md">
                                        <h5 className="title mb-2">{data?.title}</h5>
                                        <h6 className="mb-0 text-thm">{data?.server}</h6>
                                      </div>
                                    </div>
                                  </div>
                                </th>
                                <td className="vam">
                                  <span className="fz15 fw400">{data?.proposal_count}+ Applied</span>
                                </td>
                                <td className="vam">
                                  <span>{formatDate}</span>
                                </td>
                                <td className="vam">
                                  {data?.deleted_at == null || undefined
                                    ? <span className="pending-style style6">Active</span>
                                    : <span className="pending-style style6">Expired</span>
                                  }
                                </td>
                                <td>
                                  <div className="d-flex">
                                    <a
                                      className="icon me-2"
                                      href={'/job-single/' + data.id}
                                    >
                                      <span className="flaticon-chat" />
                                    </a>
                                    <a
                                      className="icon"
                                      id="delete"
                                    >
                                      <button
                                        style={{
                                          padding: "0px",
                                          backgroundColor: "transparent",
                                          border: "none"
                                        }}
                                        onClick={() => onSubmitAccept(data?.id)}
                                      >
                                        <span className="flaticon-delete" ></span>
                                      </button>
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            )
                          })}
                        </>
                        : <>{props?.map((applied: any) => {
                          return (
                            < tr key={applied.id} >
                              <th scope="row">
                                <div className="freelancer-style1 p-0 mb-0 box-shadow-none">
                                  <div className="d-lg-flex align-items-lg-center">
                                    <div className="details ml15 ml0-md mb15-md">
                                      <h5 className="title mb-2">{applied?.job?.title}</h5>
                                      <h6 className="mb-0 text-thm">{applied?.server}</h6>
                                    </div>
                                  </div>
                                </div>
                              </th>
                              <td className="vam">
                                <span className="fz15 fw400">{applied?.proposal_count}+ Applied</span>
                              </td>
                              <td className="vam">
                                <span>{formatDate}</span>
                              </td>
                              <td className="vam">
                                {applied?.status == 0 && <span className="pending-style style1">WAITING</span>}
                                {applied?.status == 1 && <span className="pending-style style6">ACCEPT</span>}
                                {applied?.status == 6 && <span className="pending-style style4" style={{
                                  padding: "10px 25px"
                                }}>FINISH</span>}
                              </td>
                              <td>
                                <div className="d-flex">
                                  <a
                                    className="icon me-2"
                                    href={'/job-single/' + applied?.job?.id}
                                  >
                                    <span className="flaticon-chat" />
                                  </a>
                                  <a
                                    className="icon"
                                    id="delete"
                                  >
                                    <button
                                      style={{
                                        padding: "0px",
                                        backgroundColor: "transparent",
                                        border: "none"
                                      }}
                                      onClick={() => onSubmitAccept(applied?.job?.id)}
                                    >
                                      <span className="flaticon-delete" ></span>
                                    </button>
                                  </a>
                                </div>
                              </td>
                            </tr>
                          )
                        })}</>

                      }
                    </tbody>
                  </table>
                  <div className="mt30">
                    <Pagination1 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProposalModal1 />
        <DeleteModal />
      </StrictMode>
    </>
  );
}
