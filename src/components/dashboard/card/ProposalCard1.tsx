'use client';

import Image from 'next/image';
import { Tooltip } from 'react-tooltip';
import parseJson from 'parse-json';
import type { ProjectInterface } from '@/interface/project.interface';
import { IUser } from '@/interface/entities/user.interface';
import { handlePropsApplied } from '@/service/proposal.service';
import { useEffect, useState } from 'react';
import moment from 'moment';
interface ProposalCard1Props {
  data: any;
}


export default function ProposalCard1({ data }: ProposalCard1Props) {


  // const user: any = parseJson(window?.localStorage?.getItem('userInfo'));
  // const [props, setProps] = useState([]);

  // const fetchProps = () => handlePropsApplied().then((res: any) => {
  //   setProps(res)
  // }).catch((error: any) => {
  //   console.log(error)
  // })

  // useEffect(() => {
  //   if (props) {
  //     fetchProps()
  //   }
  // }, []);

  const formatDate = moment(data?.job?.created_at).format("MMM Do YY");
  const price = (data?.job?.price)?.toLocaleString({ minimumFractionDigits: 2 })
  const offer = (data?.price)?.toLocaleString({ minimumFractionDigits: 2 })

  return (

    <>
      <tr>
        <th className="ps-0" scope="row">
          <div className="freelancer-style1 p-0 mb-0 box-shadow-none">
            <div className="d-lg-flex align-items-lg-center">
              {/* <div className="thumb w60 position-relative rounded-circle mb15-md">
                <Image
                  height={60}
                  width={60}
                  className="rounded-circle mx-auto"
                  src={data.img}
                  alt="thumb"
                />
                <span className="online-badge2" />
              </div> */}
              <div className="details ml15 ml0-md mb15-md">
                <h5 className="title mb-2">{data?.job?.title}</h5>
                <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                  <i className="flaticon-place fz16 vam text-thm2 me-1" />{' '}
                  {data?.job?.location}
                </p>
                <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                  <i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{' '}
                  {formatDate}
                </p>
                <p className="mb-0 fz14 list-inline-item mb5-sm">
                  <i className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{' '}
                  {data?.job?.proposal_count}
                </p>
              </div>
            </div>
          </div>
        </th>
        <td className="vam">
          <h5 className="mb-0">
            {price}
            <span className="fz14 fw400"> VND</span>
          </h5>
        </td>
        <td className="vam">
          <h5 className="mb-0">
            {offer}
            <span className="fz14 fw400"> VND</span>
          </h5>
        </td>
        <td>
          <div style={{ padding: "10px 0 0 0" }}>
            {data?.status == 0 && <p>WAITING</p>}
            {data?.status == 1 && <p>RESPONDED</p>}
            {data?.status == 2 && <p>DISCUSS</p>}
            {data?.status == 3 && <p>WORKING</p>}
            {data?.status == 4 && <p>TESTING</p>}
            {data?.status == 5 && <p>READY</p>}
            {data?.status == 6 && <p>FINISH</p>}
            {data?.status == 7 && <p>CANCELED</p>}
            {data?.status == 8 && <p>ACCEPTED</p>}
          </div>
        </td>
      </tr>
    </>
  );
}
