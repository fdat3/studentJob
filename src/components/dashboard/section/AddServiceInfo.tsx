import DashboardNavigation from '../header/DashboardNavigation';
import BasicInformation from './BasicInformation';
import ExtraService from './ExtraService';
import ServiceGallery from './ServiceGallery';
import ServicePackage from './ServicePackage';

export default function AddServiceInfo() {
  return (
    <>
      <div className="dashboard__content hover-bgc-color">
        <div className="row pb40">
          <div className="col-lg-12">
            <DashboardNavigation />
          </div>
          <div className="col-lg-9">
            <div className="dashboard_title_area">
              <h2>Đăng tin tuyển dụng</h2>
              <p className="text">Trang đăng tin tuyển dụng dành cho giảng viên | doanh nghiệp.</p>
            </div>
          </div>

        </div>
        <div className="row">
          <div className="col-xl-12">
            <BasicInformation />
            {/* <ServicePackage />
            <ExtraService /> */}
            {/* <ServiceGallery /> */}
          </div>
        </div>
      </div>
    </>
  );
}
