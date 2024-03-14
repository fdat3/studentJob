'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Sticky, StickyContainer } from 'react-sticky';

import { freelancer1, product1 } from '@/data/product';
import useScreen from '@/hook/useScreen';

import FreelancerFutureCard1 from '../card/FreelancerFutureCard1';
import FreelancerAbout1 from '../element/FreelancerAbout1';
import FreelancerSkill1 from '../element/FreelancerSkill1';
import ServiceDetailComment1 from '../element/ServiceDetailComment1';
import ServiceDetailReviewInfo1 from '../element/ServiceDetailReviewInfo1';
import { IUser } from '@/interface/entities/user.interface';
import parseJson from 'parse-json';
import { useState } from 'react';

export default function FreelancerDetail3() {
  const user: IUser = parseJson(localStorage.getItem('userInfo'));
  const [profile, setProfile] = useState<IUser>(user);
  const isMatchedScreen = useScreen(1216);
  const { id } = useParams();

  const data = freelancer1.find((item) => String(item.id) == id);
  return (
    <>
      <StickyContainer>
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
                            {/* <a
                              className="position-relative freelancer-single-style"
                              href="#"
                            >
                              <span className="online" />
                              <Image
                                width={90}
                                height={90}
                                className="rounded-circle w-100 wa-sm mb15-sm"
                                src={
                                  data?.img ? data.img : '/images/team/fl-1.png'
                                }
                                alt="Freelancer Photo"
                              />
                            </a> */}
                            <div className="ml20 ml0-xs">
                              <h5 className="title mb-1">
                                {user?.full_name ? user?.full_name : 'Leslie Alexander'}
                              </h5>
                              <p className="mb-0">{user.major}</p>
                              <p className="mb-0 dark-color fz15 fw500 list-inline-item ml15 mb5-sm ml0-xs">
                                <i className="flaticon-place vam fz20 me-2" />{' '}
                                {user.address}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-about">
                  <div className="px30 pt30 pb-0 mb30 bg-white bdrs12 wow fadeInUp default-box-shadow1 bdr1">
                    <h4>Description</h4>
                    <p className="text mb30">
                      {user.bio}
                    </p>
                  </div>
                  {/* <hr className="opacity-100 mb60 mt60" /> */}
                  <div className="px30 pt30 pb-0 mb30 bg-white bdrs12 wow fadeInUp default-box-shadow1 bdr1">
                    <h4 className="mb30">Education</h4>
                    <div className="educational-quality">
                      <div className="m-circle before-none text-thm">M</div>
                      <div className="wrapper mb60">
                        <span className="tag">2020 - 2024</span>
                        <h5 className="mt15">{user.major}</h5>
                        <h6 className="text-thm">Ton Duc Thang University</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </StickyContainer>
    </>
  );
}
