'use client';

import { useEffect, useState } from 'react';

import { level } from '@/data/listing';
import listingStore from '@/store/listingStore';

export default function LevelDropdown1() {
  const [getLevel, setLevel] = useState<string[]>([]);

  const setOurLevel = listingStore((state) => state.setLevel);
  const getOurLevel = listingStore((state) => state.getLevel);

  // handler
  const levelHandler = (data: string) => {
    const isExist = getLevel.includes(data);
    if (!isExist) {
      return setLevel((item) => [...item, data]);
    }
    const deleted = getLevel.filter((item) => item !== data);
    setLevel(deleted);
    return undefined;
  };

  useEffect(() => {
    setLevel(getOurLevel);
  }, [getOurLevel]);

  return (
    <>
      <div className="widget-wrapper pb25 mb0">
        <div className="checkbox-style1">
          {level.map((item, i) => (
            <label key={i} className="custom_checkbox">
              {item.title}
              <input
                type="checkbox"
                onChange={() => levelHandler(item.value)}
                checked={getLevel.includes(item.value)}
              />
              <span className="checkmark" />
            </label>
          ))}
        </div>
      </div>
      <button
        onClick={() => {
          const newLevel = [...getLevel];
          setOurLevel(newLevel);
        }}
        className="done-btn ud-btn btn-thm dropdown-toggle"
      >
        Apply
        <i className="fal fa-arrow-right-long" />
      </button>
    </>
  );
}
