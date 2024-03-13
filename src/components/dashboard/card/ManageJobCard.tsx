'use client';

import Image from 'next/image';
import { Tooltip } from 'react-tooltip';
import moment from "moment";
import type { ManageJobInterface } from '@/interface/job.interface';
import { handleGetJob } from '@/service/job.service';
import { useEffect, useRef, useState } from 'react';
import { IUser } from '@/interface/entities/user.interface';
import parseJson from 'parse-json';
import { handleCreateProp, handleGetPros } from '@/service/proposal.service';
import SelectInput from '../option/SelectInput';
import ProposalCard from './ProposalCard';


interface ManageJobCardProps {
  data: ManageJobInterface;
}

export default function ManageJobCard({ data }: ManageJobCardProps) {
  const [jobs, setJobs] = useState([]);

  const [getIdJob, setGetIdJob] = useState("");


  const fetchJobs = async () => {
    const { data } = await handleGetJob();
    const jobs = data;
    setJobs(jobs?.rows);
    console.log(jobs);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  const ref: any = useRef(null);

  const handleClick = (event: any) => {
    setGetIdJob(event.currentTarget.id);
  };



  return (
    <>
      {jobs?.map((data: any) => {
        const formatDate = moment(data.created_at).format("MMM Do YY");
        return (
          <tr>
            <th scope="row">
              <div className="freelancer-style1 p-0 mb-0 box-shadow-none">
                <div className="d-lg-flex align-items-lg-center">
                  {/* <div className="thumb w60 position-relative rounded-circle mb15-md">
                    <Image
                      height={60}
                      width={60}
                      className="rounded-circle mx-auto"
                      src={data.img}
                      alt="rounded"
                    />
                    <span className="online-badge2" />
                  </div> */}
                  <div className="details ml15 ml0-md mb15-md">
                    <h5 className="title mb-2">{data.title}</h5>
                    <h6 className="mb-0 text-thm">{data.server}</h6>
                  </div>
                </div>
              </div>
            </th>
            <td className="vam">
              <span className="fz15 fw400">{data.price} + VND</span>
            </td>
            <td className="vam">
              <span>{formatDate}</span>
              <br />
              {/* <span className="fz14 fw400">{data.expired}</span> */}
            </td>
            {/* <td className="vam">
              {data.status === 'Active' && <span className="pending-style style6">{data.status}</span>}
              {data.status === 'Pending' && <span className="pending-style style4">{data.status}</span>}
              {data.status === 'Expired' && <span className="pending-style style5">{data.status}</span>}
            </td> */}
            <td>
              <a href={'/job-single/' + data.id} >Xem chi tiet</a>
            </td>
          </tr >
        )

      })}
    </>
  );
}

