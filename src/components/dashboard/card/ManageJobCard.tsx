'use client';
'use strict'

import Image from 'next/image';
import { Tooltip } from 'react-tooltip';
import moment from "moment";
import type { ManageJobInterface } from '@/interface/job.interface';
import { handleGetJob, handleGetJobByOwnerId } from '@/service/job.service';
import { useEffect, useRef, useState } from 'react';
import { IUser } from '@/interface/entities/user.interface';
import parseJson from 'parse-json';
import { handleCreateProp, handleGetPros, handlePropsApplied } from '@/service/proposal.service';
import SelectInput from '../option/SelectInput';
import ProposalCard from './ProposalCard';
import { StrictMode } from 'react';

interface ManageJobCardProps {
  data: any;
}

export default function ManageJobCard({ data }: ManageJobCardProps) {
  const [jobs, setJobs] = useState([]);

  const [adminJobs, setAdminJobs] = useState([]);

  const [getIdJob, setGetIdJob] = useState("");

  const [props, setProps] = useState<any>();

  const [rerender, setRerender] = useState(false);

  const user: IUser = parseJson(window?.localStorage?.getItem('userInfo'));



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

  // const fetchJobs = async () => {
  //   const { data } = await handleGetJob();
  //   const jobs = data;
  //   setJobs(jobs?.rows);
  // };
  useEffect(() => {
    // fetchJobs();
    fetchJobApplied();
    fetchJobByOwner();
    setRerender(false)
    return () => console.log("Cleanup..");
  }, []);

  const ref: any = useRef(null);

  const handleClick = (event: any) => {
    setGetIdJob(event.currentTarget.id);
  };

  const formatDate = moment(data.created_at).format("MMM Do YY");
  const formatDateDeleted = moment(data.deleted_at).format("MMM Do YY");

  return (
    <StrictMode>
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
                      data-bs-toggle="modal"
                      data-bs-target="#deleteModal"
                    >
                      <Tooltip anchorSelect="#delete" className="ui-tooltip">
                        Delete
                      </Tooltip>
                      <span className="flaticon-delete" />
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
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                  >
                    <Tooltip anchorSelect="#delete" className="ui-tooltip">
                      Delete
                    </Tooltip>
                    <span className="flaticon-delete" />
                  </a>
                </div>
              </td>
            </tr>
          )
        })}</>

      }
    </StrictMode>
  );
}

