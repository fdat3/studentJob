'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import parseJson from 'parse-json';
import SelectInput from '../option/SelectInput';
import { handleCreateJob } from '@/service/job.service';
import { IUser } from '@/interface/entities/user.interface';
import { IJob } from '@/interface/entities/job.interface';

export default function BasicInformation() {
  const [getWorkType, setWorkType] = useState<{
    option: string;
    value: string | null;
  }>({
    option: 'Lựa chọn',
    value: 'select',
  });
  const [getLevel, setLevel] = useState<{
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
  const [getReqLevel, setReqLevel] = useState<{
    option: string;
    value: string | null;
  }>({
    option: 'Lựa chọn',
    value: 'usa',
  });
  const [getCity, setCity] = useState<{ option: string; value: string | null }>(
    {
      option: 'New York',
      value: 'new-york',
    },
  );


  const user: IUser = parseJson(localStorage?.getItem('userInfo'));


  const [profile, setProfile] = useState<IUser>(user);
  const [job, setJob] = useState<IJob | any>();
  const [price_body, setPrice] = useState<IJob | any>();
  const [description_body, setDescription] = useState<IJob | any>();



  // handlers
  const worlkTypeHandler = (option: string, value: string | null) => {
    setWorkType({
      option,
      value,
    });
  };
  const levelHandler = (option: string, value: string | null) => {
    setLevel({
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
  const reqLevelHandler = (option: string, value: string | null) => {
    setReqLevel({ option, value });
  };
  const cityHandler = (option: string, value: string | null) => {
    setCity({ option, value });
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.preventDefault();
    const newJob: any = { title: event.target.value };
    setJob(newJob);
  };
  const handleInputChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const price_body: any = { price: event.target.value };
    setPrice(price_body);
  };
  const handleInputChangeDes = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    const description: any = { description: event.target.value };
    setDescription(description);
  };
  const owner_id = profile.id;
  const title = job?.title
  const price = price_body?.price
  const description = description_body?.description

  const onSubmit = async () => {
    const newJob: any = {
      owner_id,
      title,
      price,
      work_type: getWorkType.value,
      price_type: getLevel.value,
      city: getCity.option,
      skills: getSkill.option,
      required_level: getReqLevel.value,
      description
    }
    await handleCreateJob(newJob)
    return newJob
  };

  return (
    <>
      <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
        <div className="bdrb1 pb15 mb25">
          <h5 className="list-title">Thông tin tuyển dụng</h5>
        </div>
        <div hidden></div>
        <div className="col-xl-8">
          <form className="form-style1" onSubmit={onSubmit}>
            <div className="row">
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Vị trí tuyển dụng
                  </label>
                  <input
                    value={job?.title}
                    onChange={handleInputChange}
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
                    type="number"
                    className="form-control"
                    placeholder="5.000.000 VND"
                    value={price?.price}
                    onChange={handleInputChangePrice}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <SelectInput
                    label="Work Type"
                    defaultSelect={getWorkType}
                    handler={worlkTypeHandler}
                    data={[
                      {
                        option: 'CONTRACT',
                        value: '0',
                      },
                      {
                        option: 'FULL_TIME',
                        value: '1',
                      },
                      {
                        option: 'PART_TIME',
                        value: '2',
                      },
                      {
                        option: 'TEMPORARY',
                        value: '3',
                      },
                      {
                        option: 'VOLUNTEER',
                        value: '4',
                      },
                      {
                        option: 'INTERNSHIP',
                        value: '5',
                      }
                    ]}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <SelectInput
                    label="Price Type"
                    defaultSelect={getLevel}
                    handler={levelHandler}
                    data={[
                      {
                        option: 'FIXED',
                        value: '0',
                      },
                      {
                        option: 'HOURLY',
                        value: '1',
                      }
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
                    label="Required Level"
                    defaultSelect={getReqLevel}
                    data={[
                      {
                        option: 'ENTRY',
                        value: '0',
                      },
                      {
                        option: 'INTERMEDIATE',
                        value: '1',
                      },
                      {
                        option: 'EXPERT',
                        value: '2',
                      }
                    ]}
                    handler={reqLevelHandler}
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
                  <textarea
                    value={description?.description}
                    onChange={handleInputChangeDes}
                    cols={30}
                    rows={6}
                    placeholder="Mô tả..."
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="text-start">
                  <button type='submit'>Luu</button>
                  {/* <Link className="ud-btn btn-thm" href="/contact">
                    Lưu
                    <i className="fal fa-arrow-right-long" />
                  </Link> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
