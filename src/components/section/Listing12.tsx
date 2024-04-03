'use client';

import { employee } from '@/data/product';
import type { EmployeeInterface } from '@/interface/employee.interface';
import listingStore from '@/store/listingStore';

import EmployeeCard1 from '../card/EmployeeCard1';
import ListingOption2 from '../element/ListingOption2';
import ListingSidebarModal4 from '../modal/ListingSidebarModal4';
import Pagination1 from './Pagination1';
import { useEffect, useState } from 'react';
import { handleGetOwnerUser } from '@/service/user.service';
import ListingSidebar5 from '../sidebar/ListingSidebar5';

export default function Listing12() {
  const getLocation = listingStore((state) => state.getLocation);
  const getCategory = listingStore((state) => state.getCategory);


  const [props, setProps] = useState<any>([]);
  const fetchUsers = async () => {
    const { data } = await handleGetOwnerUser();
    const users = data;
    setProps(users?.object);
  };
  useEffect(() => {
    fetchUsers()
  }, []);

  // category filter
  const categoryFilter = (item: any) =>
    getCategory?.length !== 0 ? getCategory.includes(item?.major) : item;

  // sort by location
  const locationFilter = (item: any) =>
    getLocation?.length !== 0
      ? getLocation.includes(item.city.split(' ').join('-').toLowerCase())
      : item;

  // content
  const content = props
    // .slice(0, 12)
    .filter(categoryFilter)
    // .filter(noOfEmployeeFilter)
    .filter(locationFilter)
    .map((item: any, i: any) => (
      <div key={i} className="col-sm-6 col-xl-4">
        <EmployeeCard1 data={item} />
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
              <div className="row">{content}</div>
              <div className="row mt30">
                <Pagination1 />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ListingSidebarModal4 />
    </>
  );
}
