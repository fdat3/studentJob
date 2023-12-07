'use client';

import { product1 } from '@/data/product';
import type { ProductInterface } from '@/interface/product.interface';
import listingStore from '@/store/listingStore';
import priceStore from '@/store/priceStore';

import PopularServiceCard2 from '../card/PopularServiceCard2';
import PopularServiceSlideCard2 from '../card/PopularServiceSlideCard2';
import ListingOption1 from '../element/ListingOption1';
import ListingSidebarModal1 from '../modal/ListingSidebarModal1';
import Pagination1 from './Pagination1';

export default function Listing2() {
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

  return (
    <>
      <section className="pt30 pb90">
        <div className="container">
          <ListingOption1 />
          <div className="row">
            {product1
              .slice(0, 12)
              .filter(deliveryFilter)
              .filter(priceFilter)
              .filter(levelFilter)
              .filter(locationFilter)
              .filter(searchFilter)
              .filter(sortByFilter)
              .filter(designToolFilter)
              .filter(speakFilter)
              .map((item, i) => (
                <div key={i} className="col-sm-6">
                  {item?.gallery && item?.gallery?.length > 0 ? (
                    <PopularServiceSlideCard2 data={item} />
                  ) : (
                    <PopularServiceCard2 data={item} />
                  )}
                </div>
              ))}
          </div>
          <Pagination1 />
        </div>
      </section>
      <ListingSidebarModal1 />
    </>
  );
}
