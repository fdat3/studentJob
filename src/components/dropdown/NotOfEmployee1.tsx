'use client';

import { useEffect, useState } from 'react';

import { noOfEmployee } from '@/data/listing';
import listingStore from '@/store/listingStore';

export default function NotOfEmployee1() {
  const [getNoOfEmployee, setNoOfEmployee] = useState<string[]>([]);

  const setNoOfEmployeeState = listingStore((state) => state.setNoOfEmployee);
  const getNoOfEmployeeState = listingStore((state) => state.getNoOfEmployee);

  // handler
  const noOfEmployeeHandler = (data: string) => {
    if (!getNoOfEmployee.includes(data)) {
      return setNoOfEmployee([...getNoOfEmployee, data]);
    }
    const deleted = getNoOfEmployee.filter((item) => item !== data);
    setNoOfEmployee(deleted);
  };

  const noOfEmployeeSubmitHandler = () => {
    const newNoOfEmployee: string[] = [...getNoOfEmployeeState];
    setNoOfEmployeeState(newNoOfEmployee);
  };

  useEffect(() => {
    setNoOfEmployee(getNoOfEmployeeState);
  }, [getNoOfEmployeeState]);

  return (
    <>
      <div className="widget-wrapper pb25 mb0">
        <div className="checkbox-style1">
          {noOfEmployee.map((item, i) => (
            <label key={i} className="custom_checkbox">
              {item.totalEmployee}
              <input
                type="checkbox"
                onChange={() => noOfEmployeeHandler(item.totalEmployee)}
                checked={getNoOfEmployee.includes(item.totalEmployee)}
              />
              <span className="checkmark" />
              <span className="right-tags">({item.total})</span>
            </label>
          ))}
        </div>
      </div>
      <button
        onClick={noOfEmployeeSubmitHandler}
        className="done-btn ud-btn btn-thm dropdown-toggle"
      >
        Apply
        <i className="fal fa-arrow-right-long" />
      </button>
    </>
  );
}
