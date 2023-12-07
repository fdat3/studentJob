'use client';

import { freelancer1 } from '@/data/product';
import type { FreelancerInterface } from '@/interface/freelancer.interface';
import listingStore from '@/store/listingStore';
import priceStore from '@/store/priceStore';

import FreelancerCard1 from '../card/FreelancerCard1';
import ListingOption6 from '../element/ListingOption6';
import ListingSidebarModal5 from '../modal/ListingSidebarModal5';
import Pagination1 from './Pagination1';

export default function Listing13() {
  const getCategory = listingStore((state) => state.getCategory);
  const priceRange = priceStore((state) => state.priceRange);
  const getLocation = listingStore((state) => state.getLocation);
  const getSearch = listingStore((state) => state.getSearch);
  const getLevel = listingStore((state) => state.getLevel);
  const getSpeak = listingStore((state) => state.getSpeak);
  const getBestSeller = listingStore((state) => state.getBestSeller);

  // category filter
  const categoryFilter = (item: FreelancerInterface) =>
    getCategory?.length !== 0 ? getCategory.includes(item.skill) : item;

  // salary filter
  const priceFilter = (item: FreelancerInterface) =>
    priceRange.min <= item.price && priceRange.max >= item.price;

  // location filter
  const locationFilter = (item: FreelancerInterface) =>
    getLocation?.length !== 0
      ? getLocation.includes(item.location.split(' ').join('-').toLowerCase())
      : item;

  const searchFilter = (item: FreelancerInterface) =>
    getSearch !== ''
      ? item.location.split('-').join(' ').includes(getSearch.toLowerCase())
      : item;

  // level filter
  const levelFilter = (item: FreelancerInterface) =>
    getLevel?.length !== 0 ? getLevel.includes(item.level) : item;

  // speak filter
  const languageFilter = (item: FreelancerInterface) =>
    getSpeak?.length !== 0
      ? getSpeak.includes(item.language.toLowerCase())
      : item;

  // sort by filter
  const sortByFilter = (item: FreelancerInterface) =>
    getBestSeller === 'best-seller' ? item : item.sort === getBestSeller;

  return (
    <>
      <section className="pt30 pb90">
        <div className="container">
          <ListingOption6 />
          <div className="row">
            {freelancer1
              .slice(0, 12)
              .filter(categoryFilter)
              .filter(priceFilter)
              .filter(locationFilter)
              .filter(searchFilter)
              .filter(levelFilter)
              .filter(languageFilter)
              .filter(sortByFilter)
              .map((item, i) => (
                <div key={i} className="col-md-6 col-lg-4 col-xl-3">
                  <FreelancerCard1 data={item} />
                </div>
              ))}
          </div>
          <div className="row mt30">
            <Pagination1 />
          </div>
        </div>
      </section>
      <ListingSidebarModal5 />
    </>
  );
}
