'use client'

import Pagination1 from '@/components/section/Pagination1';
import { managejob } from '@/data/dashboard';

import ManageJobCard from '../card/ManageJobCard';
import DashboardNavigation from '../header/DashboardNavigation';
import DeleteModal from '../modal/DeleteModal';
import ProposalModal1 from '../modal/ProposalModal1';
import { useCallback, useState } from 'react';

export default function ManageJobInfo() {
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);


  const ITEMS_PER_PAGE: number = 10;
  const mockItems: number = 45;


  const calculateTotalPage = useCallback((totalItems: number) => {
    return Math.ceil(totalItems / ITEMS_PER_PAGE);
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
              <h2>Danh sách công việc</h2>
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
                      <th scope="col">Chức danh</th>
                      <th scope="col">Lương</th>
                      <th scope="col">Ngày tạo</th>
                      <th scope="col">Trạng thái ứng tuyển</th>
                      {/* <th scope="col">Action</th> */}
                    </tr>
                  </thead>
                  <tbody className="t-body">
                    {managejob.map((item, i) => (
                      <ManageJobCard key={i} data={item} />
                    ))}
                  </tbody>
                </table>
                <div className="mt30">
                  <Pagination1 currentPage={page} setPage={setPage} totalPage={totalPage} />
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
