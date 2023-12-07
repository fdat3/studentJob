'use client';

import { useState } from 'react';

interface Option1Props {
  label: string;
  data: string[];
  selected: string;
  handler: (data: string) => void;
}

export default function Option1({
  label,
  data,
  selected,
  handler,
}: Option1Props) {
  const [search, setSearch] = useState('');

  // handler
  const searchHandler = (d: string) => {
    setSearch(d);
  };

  // filter
  const searchFilter = (item: any) =>
    item.toLowerCase().includes(search.toLowerCase());

  // content
  const content: any = data.filter(searchFilter).map((item, i) => (
    <li
      key={i}
      className="selected active"
      onClick={() => {
        handler(item);
        setSearch('');
      }}
    >
      <a
        className={`dropdown-item ${
          selected === item ? 'selected active' : ''
        }`}
      >
        <span className="text">{item}</span>
      </a>
    </li>
  ));

  return (
    <>
      <div className="form-style1">
        <label className="form-label fw500 fz16 dark-color d-block">
          {label}
        </label>
        <div className="bootselect-multiselect">
          <div className="dropdown bootstrap-select">
            <button
              type="button"
              className="btn dropdown-toggle btn-light"
              data-bs-toggle="dropdown"
            >
              <div className="filter-option">
                <div className="filter-option-inner">
                  <div className="filter-option-inner-inner">{selected}</div>
                </div>
              </div>
            </button>
            <div className="dropdown-menu ">
              <div className="bs-searchbox">
                <input
                  type="search"
                  onChange={(e) => searchHandler(e.target.value)}
                  className="form-control"
                  value={search}
                />
              </div>
              <div className="inner show">
                <ul
                  className="dropdown-menu inner show"
                  style={{
                    overflowY: 'auto',
                    maxHeight: '250px',
                    minHeight: 'auto',
                  }}
                >
                  {content?.length !== 0 ? (
                    content
                  ) : (
                    <li className="no-results">
                      No results matched "{search}"
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
