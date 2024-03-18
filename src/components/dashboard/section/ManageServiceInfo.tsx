'use client';

import Link from 'next/link';
import { StrictMode, useEffect, useState } from 'react';

import Pagination1 from '@/components/section/Pagination1';
import { manageService } from '@/data/dashboard';
import parseJson from 'parse-json';
import ManageServiceCard1 from '../card/ManageServiceCard1';
import DashboardNavigation from '../header/DashboardNavigation';
import DeleteModal from '../modal/DeleteModal';
import ProposalModal1 from '../modal/ProposalModal1';
import { IUser } from '@/interface/entities/user.interface';
import { handlePropsApplied } from '@/service/proposal.service';
import { handleDeleteJob, handleGetJob } from '@/service/job.service';
import { Tooltip } from 'react-tooltip';
import moment from 'moment';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';

const tab = [
  'Active Services',
  'Pending Services',
  'Ongoing Services',
  'Completed Services',
  'Canceled Services',
];

export default function ManageServiceInfo() {
  const [selectedTab, setSelectedTab] = useState(0);
  const user: any = parseJson(window.localStorage?.getItem('userInfo'));
  const [profile, setProfile] = useState<IUser>(user);
  const [props, setProps] = useState<any>([]);
  const router: AppRouterInstance = useRouter();

  const fetchJobs = async () => {
    const { data } = await handleGetJob();
    const jobs = data;
    setProps(jobs?.rows);
  };
  useEffect(() => {
    fetchJobs()
  }, []);
  console.log("🚀 ~ ManageServiceInfo ~ props:", props)

  const formatDate = moment(props?.created_at).format("MMM Do YY");
  const formatDateDeleted = moment(props?.deleted_at).format("MMM Do YY");

  const onSubmitAccept = async (job_id: any) => {
    await handleDeleteJob(job_id)
    return router.push('/manage-jobs');
  }


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
                <h2>List Jobs</h2>
                <p className="text">All jobs publish.</p>
              </div>
            </div>
            {user?.role == 1 ?
              <div className="col-lg-3">
                <div className="text-lg-end">
                  <Link
                    href="/add-services"
                    className="ud-btn btn-dark default-box-shadow2"
                  >
                    Add Service
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
                <div className="navtab-style1">
                  <nav>
                  </nav>
                  <div className="packages_table table-responsive">
                    <table className="table-style3 table at-savesearch">
                      <thead className="t-head">
                        <tr>
                          <th scope="col">Title</th>
                          <th scope="col">Location</th>
                          <th scope="col">Salary</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="t-body">
                        {props?.map((data: any) => {
                          return (
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0">
                                      <Link href={'/job-single/' + data?.id}>{data?.title}</Link>
                                    </h6>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top">
                                <span className="fz15 fw400">{data?.location}</span>
                              </td>
                              <td className="align-top">
                                <span className="fz14 fw400">{data?.price} VND</span>
                              </td>
                              <td className="align-top">
                                <div className="d-flex">
                                  <a
                                    className="icon me-2"
                                    href={'/job-single/' + data?.id}
                                  >
                                    <span className="flaticon-chat" />
                                  </a>
                                  {/* <a
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
                                  </a> */}
                                </div>
                              </td>
                            </tr>
                          )
                        })}
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
        </div>
        <ProposalModal1 />
      </StrictMode>
    </>
  );
}
