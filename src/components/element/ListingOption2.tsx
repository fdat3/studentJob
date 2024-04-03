'use client';

import Image from 'next/image';

import toggleStore from '@/store/toggleStore';

import ClearButton from '../button/ClearButton';
import SortOption1 from '../option/SortOption1';
import { useEffect, useState } from 'react';
import { handleGetJob } from '@/service/job.service';
import moment from 'moment';

interface ListingOption2Props {
  itemLength: number;
}
export default function ListingOption2({ itemLength }: ListingOption2Props) {
  const listingToggle = toggleStore((state) => state.listingToggleHandler);
  const [props, setProps] = useState<any>([]);
  const fetchJobs = async () => {
    const { data } = await handleGetJob();
    const jobs = data;
    console.log("🚀 ~ fetchJobs ListingOption2 ~ jobs:", jobs?.rows)
    setProps(jobs?.rows);
  };
  useEffect(() => {
    fetchJobs()
  }, []);
  console.log("🚀 ~ ManageServiceInfo ~ props:", props)

  const formatDate = moment(props?.created_at).format("MMM Do YY");
  const formatDateDeleted = moment(props?.deleted_at).format("MMM Do YY");
  return (
    <>
      <div className="row align-items-center mb20">
        <div className="col-md-6">
          <div className="text-center text-md-start">
            <p className="text mb-0 mb10-sm">
              <span className="fw500">{itemLength}</span> services available
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="page_control_shorting d-md-flex align-items-center justify-content-center justify-content-md-end">
            <div className="dropdown-lists d-block d-lg-none me-2 mb10-sm">
              <ul className="p-0 mb-0 text-center text-md-start">
                <li>
                  <button
                    onClick={listingToggle}
                    type="button"
                    className="open-btn filter-btn-left"
                  >
                    <Image
                      height={18}
                      width={18}
                      className="me-2"
                      src="/images/icon/all-filter-icon.svg"
                      alt="icon"
                    />
                    All Filter
                  </button>
                </li>
              </ul>
            </div>
            {/* <SortOption1 /> */}
          </div>
        </div>
      </div>
    </>
  );
}
