'use client';

import Link from 'next/link';
import { useState } from 'react';

import SelectInput from '../option/SelectInput';

export default function BasicInformation() {
  const [getCategory, setCategory] = useState<{
    option: string;
    value: string | null;
  }>({
    option: 'Lựa chọn',
    value: 'select',
  });
  const [getEngLevel, setEngLevel] = useState<{
    option: string;
    value: string | null;
  }>({
    option: 'Lựa chọn',
    value: 'select',
  });
  const [getResTime, setResTime] = useState<{
    option: string;
    value: string | null;
  }>({
    option: 'Lựa chọn',
    value: 'select',
  });
  const [getDeliveryTime, setDeliveryTime] = useState<{
    option: string;
    value: string | null;
  }>({
    option: 'Lựa chọn',
    value: 'select',
  });
  const [getSkill, setSkill] = useState<{
    option: string;
    value: string | null;
  }>({
    option: 'Không yêu cầu',
    value: null,
  });
  const [getCountry, setCountry] = useState<{
    option: string;
    value: string | null;
  }>({
    option: 'United States',
    value: 'usa',
  });
  const [getCity, setCity] = useState<{ option: string; value: string | null }>(
    {
      option: 'New York',
      value: 'new-york',
    },
  );

  // handlers
  const categoryHandler = (option: string, value: string | null) => {
    setCategory({
      option,
      value,
    });
  };
  const engLevelHandler = (option: string, value: string | null) => {
    setEngLevel({
      option,
      value,
    });
  };
  const resTimeHandler = (option: string, value: string | null) => {
    setResTime({
      option,
      value,
    });
  };
  const deliveryTimeHandler = (option: string, value: string | null) => {
    setDeliveryTime({
      option,
      value,
    });
  };
  const skillHandler = (option: string, value: string | null) => {
    setSkill({
      option,
      // @ts-ignore
      value,
    });
  };
  const countryHandler = (option: string, value: string | null) => {
    setCountry({ option, value });
  };
  const cityHandler = (option: string, value: string | null) => {
    setCity({ option, value });
  };

  return (
    <>
      <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
        <div className="bdrb1 pb15 mb25">
          <h5 className="list-title">Thông tin tuyển dụng</h5>
        </div>
        <div className="col-xl-8">
          <form className="form-style1">
            <div className="row">
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Chức danh
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Software Engineer"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Lương
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="5.000.000 VND"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <SelectInput
                    label="Vị trí tuyển dụng"
                    defaultSelect={getCategory}
                    handler={categoryHandler}
                    data={[
                      {
                        option: 'Designer',
                        value: 'designer',
                      },
                      {
                        option: 'Digital Marketing',
                        value: 'digital-marketing',
                      },
                      {
                        option: 'Thông dịch viên',
                        value: 'writing-translation',
                      },
                      {
                        option: 'Dựng video & hoạt ảnh',
                        value: 'video-animation',
                      },
                      {
                        option: 'Backend Dev',
                        value: 'be-dev',
                      },
                      {
                        option: 'Fullstack Dev',
                        value: 'fullstack-dev',
                      },
                      {
                        option: 'Kế Toán',
                        value: 'accountant',
                      }
                    ]}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <SelectInput
                    label="Tiếng Anh"
                    defaultSelect={getEngLevel}
                    handler={engLevelHandler}
                    data={[
                      {
                        option: 'Các lựa chọn',
                        value: 'select',
                      },
                      {
                        option: 'TOEIC hoặc IELTS',
                        value: 'toeic',
                      },
                      {
                        option: 'Có khả năng đọc hiểu văn bản tiếng Anh',
                        value: 'fluent',
                      },
                      {
                        option: 'Có khả năng giao tiếp tiếng Anh',
                        value: 'conservational',
                      },
                    ]}
                  />
                </div>
              </div>
              {/* <div className="col-sm-6">
                <div className="mb20">
                  <SelectInput
                    label="Response Time"
                    defaultSelect={getResTime}
                    handler={resTimeHandler}
                    data={[
                      {
                        option: 'Select',
                        value: 'select',
                      },
                      {
                        option: 'Response Time One',
                        value: 'response-time-one',
                      },
                      {
                        option: 'Response Time Two',
                        value: 'response-time-two',
                      },
                      {
                        option: 'Response Time Three',
                        value: 'response-time-three',
                      },
                    ]}
                  />
                </div>
              </div> */}
              {/* <div className="col-sm-6">
                <div className="mb20">
                  <SelectInput
                    label="Delivery Time"
                    defaultSelect={getDeliveryTime}
                    handler={deliveryTimeHandler}
                    data={[
                      {
                        option: 'Select',
                        value: 'select',
                      },
                      {
                        option: 'Delivery Time One',
                        value: 'delivery-time-one',
                      },
                      {
                        option: 'Delivery Time Two',
                        value: 'delivery-time-two',
                      },
                      {
                        option: 'Delivery Time Three',
                        value: 'delivery-time-three',
                      },
                    ]}
                  />
                </div>
              </div> */}
              <div className="col-sm-12">
                <div className="mb20">
                  <SelectInput
                    label="Kỹ năng yêu cầu"
                    defaultSelect={getSkill}
                    handler={skillHandler}
                    data={[
                      {
                        option: 'Figma',
                        value: 'figma',
                      },
                      {
                        option: 'Adobe XD',
                        value: 'adobe-xd',
                      },
                      {
                        option: 'CSS',
                        value: 'css',
                      },
                      {
                        option: 'HTML',
                        value: 'html',
                      },
                      {
                        option: 'Bootstrap',
                        value: 'bootstrap',
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <SelectInput
                    label="Quốc gia"
                    defaultSelect={getCountry}
                    data={[
                      {
                        option: 'United States',
                        value: 'usa',
                      },
                      {
                        option: 'Canada',
                        value: 'canada',
                      },
                      {
                        option: 'United Kingdom',
                        value: 'uk',
                      },
                      {
                        option: 'Australia',
                        value: 'australia',
                      },
                      {
                        option: 'Germany',
                        value: 'germany',
                      },
                      { option: 'Japan', value: 'japan' },
                    ]}
                    handler={countryHandler}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <SelectInput
                    label="Thành phố"
                    defaultSelect={getCity}
                    data={[
                      {
                        option: 'Hồ Chí Minh',
                        value: 'hcm',
                      },
                      {
                        option: 'Hà Nội',
                        value: 'HN',
                      },
                      {
                        option: 'London',
                        value: 'london',
                      },
                      {
                        option: 'Sydney',
                        value: 'sydney',
                      },
                      {
                        option: 'Berlin',
                        value: 'berlin',
                      },
                      { option: 'Tokyo', value: 'tokyo' },
                    ]}
                    handler={cityHandler}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb10">
                  <label className="heading-color ff-heading fw500 mb10">
                    Mô tả chi tiết công việc
                  </label>
                  <textarea cols={30} rows={6} placeholder="Mô tả..." />
                </div>
              </div>
              <div className="col-md-12">
                <div className="text-start">
                  <Link className="ud-btn btn-thm" href="/contact">
                    Lưu
                    <i className="fal fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
