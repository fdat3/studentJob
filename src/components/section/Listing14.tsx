'use client';

import { freelancer1 } from '@/data/product';
import type { FreelancerInterface } from '@/interface/freelancer.interface';
import listingStore from '@/store/listingStore';
import priceStore from '@/store/priceStore';

import FreelancerCard2 from '../card/FreelancerCard2';
import ListingOption2 from '../element/ListingOption2';
import ListingSidebarModal5 from '../modal/ListingSidebarModal5';
import ListingSidebar5 from '../sidebar/ListingSidebar5';
import Pagination1 from './Pagination1';
import { useEffect, useState } from 'react';
import { handleGetAllUser } from '@/service/user.service';

export default function Listing14() {
  const getCategory = listingStore((state) => state.getCategory);
  const priceRange = priceStore((state) => state.priceRange);
  const getLocation = listingStore((state) => state.getLocation);
  const getSearch = listingStore((state) => state.getSearch);
  const getLevel = listingStore((state) => state.getLevel);
  const getSpeak = listingStore((state) => state.getSpeak);
  const getBestSeller = listingStore((state) => state.getBestSeller);

  const [props, setProps] = useState<any>([]);
  const fetchUsers = async () => {
    const { data } = await handleGetAllUser();
    const users = data;
    setProps(users?.object);
  };
  useEffect(() => {
    fetchUsers()
  }, []);


  // category filter
  const categoryFilter = (item: any) =>
    getCategory?.length !== 0 ? getCategory.includes(item?.major) : item;

  // salary filter
  const priceFilter = (item: FreelancerInterface) =>
    priceRange.min <= item.price && priceRange.max >= item.price;

  // location filter
  const locationFilter = (item: any) =>
    getLocation?.length !== 0
      ? getLocation.includes(item.city.split(' ').join('-').toLowerCase())
      : item;

  const searchFilter = (item: any) =>
    getSearch !== ''
      ? item.address.split('-').join(' ').includes(getSearch.toLowerCase())
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

  const content = props
    // .slice(0, 9)
    .filter(categoryFilter)
    // .filter(priceFilter)
    .filter(locationFilter)
    // .filter(searchFilter)
    // .filter(levelFilter)
    // .filter(languageFilter)
    // .filter(sortByFilter)
    .map((item: any, i: any) => (
      <div key={i} className="col-sm-6 col-xl-4">
        <FreelancerCard2 data={item} />
      </div>
    ));

  return (
    <>
      <section className="pt30 pb90">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ListingSidebar5 />
            </div>
            <div className="col-lg-9">
              <ListingOption2 itemLength={content?.length} />
              <div className="row">
                {content?.length !== 0 ? content : 'Data not found!'}
              </div>
              <div className="row mt30">
                <Pagination1 />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ListingSidebarModal5 />
    </>
  );
}
