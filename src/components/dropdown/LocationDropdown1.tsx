'use client';

import { useEffect, useState } from 'react';

import { location } from '@/data/listing';
import listingStore from '@/store/listingStore';

export default function LocationDropdown1() {
  const [getLocation, setLocation] = useState<string[]>([]);
  const getOurLocation = listingStore((state) => state.getLocation);
  const setOurLocation = listingStore((state) => state.setLocation);

  const locationHandler = (data: string) => {
    const isExist = getLocation.includes(data);
    if (!isExist) {
      return setLocation((item) => [...item, data]);
    }
    const deleted = getLocation.filter((item) => item !== data);
    setLocation(deleted);
    return undefined;
  };

  useEffect(() => {
    setLocation(getOurLocation);
  }, [getOurLocation]);

  return (
    <>
      <div className="widget-wrapper pr20">
        <div className="checkbox-style1">
          {location.map((item, i) => (
            <label key={i} className="custom_checkbox">
              {item.title}
              <input
                type="checkbox"
                checked={getLocation.includes(item.value)}
                onChange={() => locationHandler(item.value)}
              />
              <span className="checkmark" />
            </label>
          ))}
        </div>
      </div>
      <button
        onClick={() => {
          const newLocation: string[] = [...getLocation];
          setOurLocation(newLocation);
        }}
        className="done-btn ud-btn btn-thm drop_btn4"
      >
        Apply
        <i className="fal fa-arrow-right-long" />
      </button>
    </>
  );
}
