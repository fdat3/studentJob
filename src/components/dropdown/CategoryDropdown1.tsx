'use client';

import { useEffect, useState } from 'react';

import { category } from '@/data/listing';
import listingStore from '@/store/listingStore';

export default function CategoryDropdown1() {
  const [getCategory, setCategory] = useState<string[]>([]);

  const setCategoryState = listingStore((state) => state.setCategory);
  const getCategoryState = listingStore((state) => state.getCategory);

  // handler
  const categoryHandler = (data: string) => {
    if (!getCategory.includes(data)) {
      return setCategory([...getCategory, data]);
    }
    const deleted = getCategory.filter((item) => item !== data);
    setCategory(deleted);
    return undefined;
  };

  const categorySubmitHandler = () => {
    const newCategoryState: string[] = [];
    getCategory.forEach((item) => {
      newCategoryState.push(item);
    });
    setCategoryState(newCategoryState);
  };

  useEffect(() => {
    setCategory(getCategoryState);
  }, [getCategoryState]);

  return (
    <>
      <div className="widget-wrapper pr20">
        <div className="checkbox-style1">
          {category.map((item, i) => (
            <label key={i} className="custom_checkbox">
              {item.title}
              <input
                type="checkbox"
                onChange={() => categoryHandler(item.title)}
                checked={getCategory.includes(item.title)}
              />
              <span className="checkmark" />
            </label>
          ))}
        </div>
      </div>
      <button
        onClick={categorySubmitHandler}
        className="done-btn ud-btn btn-thm drop_btn4"
      >
        Apply
        <i className="fal fa-arrow-right-long" />
      </button>
    </>
  );
}
