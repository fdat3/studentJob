'use client';

import { job1 } from '@/data/job';
import type { JobInterface } from '@/interface/job.interface';
import listingStore from '@/store/listingStore';
import priceStore from '@/store/priceStore';

import JobCard4 from '../card/JobCard4';
import ListingOption4 from '../element/ListingOption4';
import ListingSidebarModal3 from '../modal/ListingSidebarModal3';
import Pagination1 from './Pagination1';

export default function Listing9() {
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

  return (
    <>
      <section className="pt40 pb90">
        <div className="container">
          <ListingOption4 />
          <div className="row">
            {job1
              .slice(0, 16)
              .filter(categoryFilter)
              .filter(salaryFilter)
              .filter(jobTypeFilter)
              .filter(levelFilter)
              .filter(sortByFilter)
              .map((item, i) => (
                <div key={i} className="col-sm-6 col-lg-4 col-xl-3">
                  <JobCard4 data={item} />
                </div>
              ))}
          </div>
          <div className="mt30">
            <Pagination1 />
          </div>
        </div>
      </section>
      <ListingSidebarModal3 />
    </>
  );
}
