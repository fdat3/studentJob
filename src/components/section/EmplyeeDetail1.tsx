'use client'

import { job1 } from "@/data/job";
import AboutMe1 from "../element/AboutMe1";
import EmployeeDetailSlider1 from "../element/EmployeeDetailSlider1";
import ServiceDetailComment1 from "../element/ServiceDetailComment1";
import ServiceDetailReviewInfo1 from "../element/ServiceDetailReviewInfo1";
import JobCard5 from "../card/JobCard5";
import { handleGetUserById } from "@/service/user.service";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { handleGetJobByOwnerId } from "@/service/job.service";
import moment from "moment";


interface OwnerPropsId {
  id?: string
}
export default function EmplyeeDetail1(props: OwnerPropsId) {

  const { id } = useParams();
  const [user, setUser] = useState<any>();
  const [job, setJob] = useState<any>();

  const fetchJobs = (props: any) => handleGetJobByOwnerId(props?.id).then((res: any) => {
    setJob(res)
  }).catch((error: any) => {
    console.log(error)
  })
  const formatDate = moment(user?.created_at).format("MMM Do YY");



  const fetchUser = (id: string) => handleGetUserById(id).then((res: any) => {
    setUser(res?.data)
  }).catch((error: any) => {
    console.log(error)
  })
  useEffect(() => {
    if (props?.id) {
      fetchUser(props?.id);
    }
    fetchJobs(props)
  }, []);

  const skills = user?.skills.map((data: any) => {
    return data
  })


  return (
    <>
      <section className="pt10 pb90 pb30-md">
        <div className="container">
          <div className="row wow fadeInUp">
            <div className="col-lg-8">
              <div className="px30 pt30 pb-0 mb30 bg-white bdrs12 wow fadeInUp default-box-shadow1 bdr1">
                <div className="position-relative overflow-hidden d-flex align-items-center pb30 mb30 bdrb1 ">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="position-relative">
                        <div className="list-meta d-sm-flex align-items-center">
                          <a
                            className="position-relative freelancer-single-style"
                            href="#"
                          >
                            <span className="online" />
                          </a>
                          <div className="ml20 ml0-xs">
                            <h5 className="title mb-1">
                              {user?.full_name ? user?.full_name : 'Leslie Alexander'}
                            </h5>
                            <p className="mb-0">{user?.major ? user?.major : 'UI/UX Designer'}</p>
                            <p className="mb-0 dark-color fz15 fw500 list-inline-item mb5-sm ml0-xs">
                              <i className="flaticon-place vam fz20 me-2" />{' '}
                              {user?.address ? user?.address : 'Ho Chi Minh City'}
                            </p>
                            <p className="mb-0 dark-color fz15 fw500 list-inline-item ml15 mb5-sm ml0-xs">
                              <i className="flaticon-30-days vam fz20 me-2" />{' '}
                              Member since {formatDate}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-about">
                <h4 className="mb20">About Employer</h4>
                <p className="text mb30">
                  {user?.bio}
                </p>
                <p className="text mb30">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
                <h5 className="mb20 mt60">Who are we?</h5>
                <p className="text mb30">
                  {user?.city}
                </p>
                <h5 className="mb20 mt60">What do we do?</h5>
                <p className="text mb30">
                  {skills}
                </p>
                <EmployeeDetailSlider1 />
                <div className="row">
                  <h4 className="mb25">Projects Created</h4>
                  {job?.map((item: any, i: any) => (
                    <div key={i} className="col-xl-6 col-lg-4 col-xl-3">
                      <JobCard5 data={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div >
          </div>
        </div>
      </section>
    </>
  );
}
