import { job1 } from '@/data/job';
import { product1 } from '@/data/product';

import MostViewServiceCard1 from '../card/MostViewServiceCard1';
import RecentServiceCard1 from '../card/RecentServiceCard1';
import DoughnutChart from '../chart/DoughnutChart';
import LineChart from '../chart/LineChart';
import DashboardNavigation from '../header/DashboardNavigation';

export default function DashboardInfo() {
  return (
    <>
      <div className="dashboard__content hover-bgc-color">
        <div className="row pb40">
          <div className="col-lg-12">
            <DashboardNavigation />
          </div>
          <div className="col-lg-12">
            <div className="dashboard_title_area">
              <h2>Dashboard</h2>
              <p className="text">Your Stats.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-xxl-3">
            <div className="d-flex align-items-center justify-content-between statistics_funfact">
              <div className="details">
                <div className="fz15">Services Offered</div>
                <div className="title">25</div>
                <div className="text fz14">
                  <span className="text-thm">10</span> New Offered
                </div>
              </div>
              <div className="icon text-center">
                <i className="flaticon-contract" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xxl-3">
            <div className="d-flex align-items-center justify-content-between statistics_funfact">
              <div className="details">
                <div className="fz15">Completed Services</div>
                <div className="title">1292</div>
                <div className="text fz14">
                  <span className="text-thm">80+</span> New Completed
                </div>
              </div>
              <div className="icon text-center">
                <i className="flaticon-success" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xxl-3">
            <div className="d-flex align-items-center justify-content-between statistics_funfact">
              <div className="details">
                <div className="fz15">in Queue Services</div>
                <div className="title">182</div>
                <div className="text fz14">
                  <span className="text-thm">35+</span> New Queue
                </div>
              </div>
              <div className="icon text-center">
                <i className="flaticon-review" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xxl-3">
            <div className="d-flex align-items-center justify-content-between statistics_funfact">
              <div className="details">
                <div className="fz15">Total Review</div>
                <div className="title">22,786</div>
                <div className="text fz14">
                  <span className="text-thm">290+</span> New Review
                </div>
              </div>
              <div className="icon text-center">
                <i className="flaticon-review-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8">
            <LineChart />
          </div>
          <div className="col-xl-4">
            <DoughnutChart />
          </div>
        </div>
      </div>
    </>
  );
}
