'use client';

import { IUser } from '@/interface/entities/user.interface';
import DashboardNavigation from '../header/DashboardNavigation';
import ProposalModal1 from '../modal/ProposalModal1';
import Award from './Award';
import ChangePassword from './ChangePassword';
import ConfirmPassword from './ConfirmPassword';
import Education from './Education';
import ProfileDetails from './ProfileDetails';
// import Skill from './Skill';
import parseJson from 'parse-json';
import WorkExperience from './WorkExperience';



export default function MyProfileInfo() {



  return (
    <>
      <div className="dashboard__content hover-bgc-color">
        <div className="row pb40">
          <div className="col-lg-12">
            <DashboardNavigation />
          </div>
          <div className="col-lg-9">
            <div className="dashboard_title_area">
              <h2>Trang cá nhân</h2>
              {/* <p className="text">Lorem ipsum dolor sit amet, consectetur.</p> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <ProfileDetails />
            <Education />
            <WorkExperience />
            <Award />
            <ChangePassword />
          </div>
        </div>
      </div>
    </>
  );
}
