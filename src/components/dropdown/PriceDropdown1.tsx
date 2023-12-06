'use client';

import { useEffect, useState } from 'react';
import ReactSlider from 'react-slider';

import priceStore from '@/store/priceStore';

export default function PriceDropdown1() {
  const [getPrice, setPrice] = useState<{ min: number; max: number }>({
    min: 0,
    max: 100000,
  });

  const priceRange = priceStore((state) => state.priceRange);
  const setPriceRange = priceStore((state) => state.priceRangeHandler);

  const priceHandler = (data: number[]) => {
    setPrice({
      min: data[0] ?? 0,
      max: data[1] ?? 0,
    });
  };

  useEffect(() => {
    setPrice(priceRange);
  }, [priceRange]);

  return (
    <>
      <div className="widget-wrapper pb25 mb0 pr20">
        <div className="range-slider-style1">
          <div className="range-wrapper">
            <div className="price__range__box">
              <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                value={[getPrice.min, getPrice.max]}
                min={0}
                max={100000}
                onChange={priceHandler}
                minDistance={10}
              />
            </div>
            <div className="d-flex gap-1 align-items-center pt-4">
              <input
                type="number"
                className="amount w-100"
                placeholder="$20"
                min={0}
                value={getPrice.min}
                onChange={(e) =>
                  setPrice({
                    ...getPrice,
                    min: parseInt(e.target.value, 10),
                  })
                }
              />
              <span className="fa-sharp fa-solid fa-minus mx-1 dark-color" />
              <input
                type="number"
                className="amount2 w-100"
                placeholder="$100000"
                min={0}
                max={100000}
                value={getPrice.max}
                onChange={(e) =>
                  setPrice({
                    ...getPrice,
                    max: parseInt(e.target.value, 10),
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => setPriceRange(getPrice.min, getPrice.max)}
        className="done-btn ud-btn btn-thm drop_btn3"
      >
        Apply
        <i className="fal fa-arrow-right-long" />
      </button>
    </>
  );
}
