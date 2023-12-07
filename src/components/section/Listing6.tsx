'use client';

import { product1 } from '@/data/product';
import type { ProductInterface } from '@/interface/product.interface';
import listingStore from '@/store/listingStore';
import priceStore from '@/store/priceStore';

import ClearButton from '../button/ClearButton';
import PopularServiceSlideCard1 from '../card/PopularServiceSlideCard1';
import TrendingServiceCard1 from '../card/TrendingServiceCard1';
import ListingOption2 from '../element/ListingOption2';
import ListingSidebarModal1 from '../modal/ListingSidebarModal1';
import ListingSidebar1 from '../sidebar/ListingSidebar1';
import BestService2 from './BestService2';
import Pagination1 from './Pagination1';

export default function Listing6() {
  const getDeliveryTime = listingStore((state) => state.getDeliveryTime);
  const getPriceRange = priceStore((state) => state.priceRange);
  const getLevel = listingStore((state) => state.getLevel);
  const getLocation = listingStore((state) => state.getLocation);
  const getBestSeller = listingStore((state) => state.getBestSeller);
  const getDesignTool = listingStore((state) => state.getDesignTool);
  const getSpeak = listingStore((state) => state.getSpeak);
  const getSearch = listingStore((state) => state.getSearch);

  // delivery filter
  const deliveryFilter = (item: ProductInterface) =>
    getDeliveryTime === '' || getDeliveryTime === 'anytime'
      ? item
      : item.deliveryTime === getDeliveryTime;

  // price filter
  const priceFilter = (item: ProductInterface) =>
    getPriceRange.min <= item.price && getPriceRange.max >= item.price;

  // level filter
  const levelFilter = (item: ProductInterface) =>
    getLevel?.length !== 0 ? getLevel.includes(item.level) : item;

  // location filter
  const locationFilter = (item: ProductInterface) =>
    getLocation?.length !== 0 ? getLocation.includes(item.location) : item;

  const searchFilter = (item: ProductInterface) =>
    getSearch !== ''
      ? item.location.split('-').join(' ').includes(getSearch.toLowerCase())
      : item;

  // sort by filter
  const sortByFilter = (item: ProductInterface) =>
    getBestSeller === 'best-seller' ? item : item.sort === getBestSeller;

  // design tool filter
  const designToolFilter = (item: ProductInterface) =>
    getDesignTool?.length !== 0 ? getDesignTool.includes(item.tool) : item;

  // speak filter
  const speakFilter = (item: ProductInterface) =>
    getSpeak?.length !== 0 ? getSpeak.includes(item.language) : item;

  const content = product1
    .slice(0, 9)
    .filter(deliveryFilter)
    .filter(priceFilter)
    .filter(levelFilter)
    .filter(locationFilter)
    .filter(searchFilter)
    .filter(sortByFilter)
    .filter(designToolFilter)
    .filter(speakFilter)
    .map((item, i) => (
      <div key={i} className="col-sm-6 col-xl-4">
        {item?.gallery ? (
          <PopularServiceSlideCard1 data={item} />
        ) : (
          <TrendingServiceCard1 data={item} />
        )}
      </div>
    ));

  return (
    <>
      <section className="pt30 pb90">
        <div className="container">
          <BestService2 />
          <div className="row mt30">
            <div className="col-lg-3">
              <ListingSidebar1 />
            </div>
            <div className="col-lg-9">
              <ListingOption2 itemLength={content?.length} />
              <div className="row">{content}</div>
              <Pagination1 />
            </div>
          </div>
        </div>
      </section>
      <ListingSidebarModal1 />
    </>
  );
}
