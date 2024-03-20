'use client';

import { location } from '@/data/listing';
import listingStore from '@/store/listingStore';

import Search1 from '../element/Search1';

export default function LocationOption1() {
  const getLocation = listingStore((state) => state.getLocation);
  const setLocation = listingStore((state) => state.setLocation);

  // handler
  const locationHandler = (data: string) => {
    const newLocation = [...getLocation, data];
    setLocation(newLocation);
  };

  return (
    <>
      <div className="card-body card-body px-0 pt-0">
        {/* <Search1 /> */}
        <div className="checkbox-style1 mb15">
          {location.map((item, i) => (
            <label key={i} className="custom_checkbox">
              {item.title}
              <input
                type="checkbox"
                checked={getLocation.includes(item.value)}
                onChange={() => locationHandler(item.value)}
              />
              <span className="checkmark" />
              <span className="right-tags">({item.total})</span>
            </label>
          ))}
        </div>
        <a className="text-thm">+20 more</a>
      </div>
    </>
  );
}
