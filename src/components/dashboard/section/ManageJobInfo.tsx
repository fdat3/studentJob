import Pagination1 from '@/components/section/Pagination1';
import { managejob } from '@/data/dashboard';

import ManageJobCard from '../card/ManageJobCard';
import DashboardNavigation from '../header/DashboardNavigation';
import DeleteModal from '../modal/DeleteModal';
import ProposalModal1 from '../modal/ProposalModal1';

export default function ManageJobInfo() {
  return (
    <>
      <div className="dashboard__content hover-bgc-color">
        <div className="row pb40">
          <div className="col-lg-12">
            <DashboardNavigation />
          </div>
          <div className="col-lg-12">
            <div className="dashboard_title_area">
              <h2>Quản lý công việc</h2>
              <p className="text">Trang quản lý các công việc đã ứng tuyển.</p>
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
                      <th scope="col">Ngày ứng tuyển &amp; Ngày hết hạn</th>
                      <th scope="col">Trạng thái công việc</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody className="t-body">
                    {managejob.map((item, i) => (
                      <ManageJobCard key={i} data={item} />
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
