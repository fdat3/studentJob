'use client';

import { job1 } from '@/data/job';
import type { JobInterface } from '@/interface/job.interface';
import listingStore from '@/store/listingStore';
import priceStore from '@/store/priceStore';

import JobCard2 from '../card/JobCard2';
import JobCard4 from '../card/JobCard4';
import ListingOption2 from '../element/ListingOption2';
import ListingSidebarModal3 from '../modal/ListingSidebarModal3';
import ListingSidebar3 from '../sidebar/ListingSidebar3';
import Pagination1 from './Pagination1';

export default function Listing16() {
  const getCategory = listingStore((state) => state.getCategory);
  const priceRange = priceStore((state) => state.priceRange);
  const getJobType = listingStore((state) => state.getJobType);
  const getLevel = listingStore((state) => state.getLevel);
  const getBestSeller = listingStore((state) => state.getBestSeller);

  // category filter
  const categoryFilter = (item: JobInterface) =>
    getCategory?.length !== 0 ? getCategory.includes(item.category) : item;

  // salary filter
  const salaryFilter = (item: JobInterface) =>
    priceRange.min <= item.salary && priceRange.max >= item.salary;

  // job type filter
  const jobTypeFilter = (item: JobInterface) =>
    getJobType?.length !== 0 ? getJobType.includes(item.jobType) : item;

  // level filter
  const levelFilter = (item: JobInterface) =>
    getLevel?.length !== 0 ? getLevel.includes(item.level) : item;

  // sort by filter
  const sortByFilter = (item: JobInterface) =>
    getBestSeller === 'best-seller' ? item : item.sort === getBestSeller;

  const content = job1
    .slice(0, 12)
    .filter(categoryFilter)
    .filter(salaryFilter)
    .filter(jobTypeFilter)
    .filter(levelFilter)
    .filter(sortByFilter)
    .map((item, i) => (
      <div key={i} className="col-sm-6 col-xl-4">
        <JobCard4 data={item} />
      </div>
    ));

  return (
    <>
      <section className="pt30 pb90">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ListingSidebar3 />
            </div>
            <div className="col-lg-9">
              <ListingOption2 itemLength={content?.length} />
              <div className="row">{content}</div>
              <div className="row mt30">
                <Pagination1 />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ListingSidebarModal3 />
    </>
  );
}
