'use client';

import Pagination1 from '@/components/section/Pagination1';
import { project1 } from '@/data/product';

import ProposalCard1 from '../card/ProposalCard1';
import DashboardNavigation from '../header/DashboardNavigation';
import DeleteModal from '../modal/DeleteModal';
import ProposalModal1 from '../modal/ProposalModal1';
import parseJson from 'parse-json';
import { useEffect, useState } from 'react';
import { handlePropsApplied } from '@/service/proposal.service';

export default function ProposalInfo() {
  const user: any = parseJson(window?.localStorage?.getItem('userInfo'));
  const [props, setProps] = useState([]);

  const fetchProps = () => handlePropsApplied().then((res: any) => {
    setProps(res)
  }).catch((error: any) => {
    console.log(error)
  })

  useEffect(() => {
    if (props) {
      fetchProps()
    }
  }, []);
  return (
    <>
      <div className="dashboard__content hover-bgc-color">
        <div className="row pb40">
          <div className="col-lg-12">
            <DashboardNavigation />
          </div>
          <div className="col-lg-12">
            <div className="dashboard_title_area">
              <h2>Các công việc đã ứng tuyển</h2>
              <p className="text">Trang quản lý các công việc đã ứng tuyển</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
              <div className="packages_table table-responsive">
                <table className="table-style3 table at-savesearch">
                  <thead className="t-head">
                    <tr>
                      <th scope="col">Job Title</th>
                      <th scope="col">Salary</th>
                      <th scope="col">Your Offer</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody className="t-body">
                    {props.slice(0, 7).map((item, i) => (
                      <ProposalCard1 key={i} data={item} />
                    ))}
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
    </>
  );
}
