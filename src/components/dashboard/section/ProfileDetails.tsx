'use client';

import Image from 'next/image';
import parseJson from 'parse-json';
import React, { useState } from 'react';
import type { MultiValue } from 'react-select';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import {
  City,
  Gender,
  Language,
  Skills,
  StudentMajor,
} from '@/common/const/user.const';
import { UserDto } from '@/common/dtos/user.dto';
import type { IUser } from '@/interface/entities/user.interface';
import { handleUpdateProfile } from '@/service/user.service';

export default function ProfileDetails() {
  const user: IUser = parseJson(localStorage.getItem('userInfo'));

  const makeAnimatedSelect = makeAnimated();

  const [profile, setProfile] = useState<IUser>(user);

  const genderList: { label: string; value: number }[] = [];

  Object.entries(Gender).forEach(([key, value]) => {
    if (typeof value === 'number') {
      genderList.push({ label: key, value });
    }
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      // TODO upload file to server
      // console.log(event);
      // setProfile({ ...profile, avatar: file })
    }
  };
  const handleSkillsChange = (
    newValue: MultiValue<{ label: string | undefined; value: string }>,
  ) => {
    const newSkills: string[] = [];
    newValue?.forEach((value) => {
      newSkills.push(value.value);
    });
    setProfile({ ...profile, skills: newSkills });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('PROFILE ==> ', profile);
    const updatedUser: IUser = await handleUpdateProfile(new UserDto(profile));
    setProfile(updatedUser);
  };

  return (
    <>
      <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
        <div className="bdrb1 pb15 mb25">
          <h5 className="list-title">Tổng quan về tài khoản</h5>
        </div>
        <div className="col-xl-12">
          <div className="profile-box d-sm-flex align-items-center mb30">
            <div className="profile-img mb20-sm">
              <Image
                height={71}
                width={71}
                className="rounded-circle wa-xs"
                src={profile?.avatar || '/images/team/fl-1.png'}
                style={{
                  height: '71px',
                  width: '71px',
                  objectFit: 'cover',
                }}
                alt="profile"
              />
            </div>
            <div className="profile-content ml20 ml0-xs">
              <div className="d-flex align-items-center my-3">
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  className="tag-delt text-thm2"
                  type="button"
                  onClick={() => {
                    setProfile({
                      ...profile,
                      avatar:
                        'https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-1024.png',
                    });
                  }}
                >
                  <span className="flaticon-delete text-thm2" />
                </button>
                <label>
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    className="d-none"
                    onChange={handleImageChange}
                  />
                  <button className="upload-btn ml10" type="button">
                    Tải ảnh lên
                  </button>
                </label>
              </div>
              <p className="text mb-0">
                Kích thước tệp tối đa: 1MB, Kích thước tối thiểu: 330x300, hỗ trợ định dạng tệp phù hợp là .jpg &amp; .png
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-12">
          <form className="form-style1" onSubmit={onSubmit}>
            <div className="row">
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    value={profile?.full_name}
                    onChange={(e) =>
                      setProfile({ ...profile, full_name: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Địa chỉ Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={profile?.email}
                    onChange={(e) =>
                      setProfile({ ...profile, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={profile?.phone}
                    onChange={(e) =>
                      setProfile({ ...profile, phone: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Địa chỉ
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={profile?.address}
                    onChange={(e) =>
                      setProfile({ ...profile, address: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Chuyên ngành
                  </label>
                  <Select
                    defaultValue={{
                      label: StudentMajor[profile?.major],
                      value: profile?.major,
                    }}
                    options={
                      Object.keys(StudentMajor).map((key: string) => ({
                        label: StudentMajor[key],
                        value: key,
                      })) as { label: string; value: string }[]
                    }
                    onChange={(e) =>
                      setProfile({ ...profile, major: e?.value || user?.major })
                    }
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Giới tính
                  </label>
                  <Select
                    defaultValue={{
                      label: Gender[profile?.gender],
                      value: profile?.gender,
                    }}
                    options={
                      Object.keys(Gender).map((key: string) => ({
                        label: Gender[key],
                        value: key,
                      })) as { label: string; value: string }[]
                    }
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        gender: e?.value || 0,
                      })
                    }
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Đại học
                  </label>
                  <Select
                    defaultValue={{
                      label: 'Trường Đại học Tôn Đức Thắng',
                      value: 'TDTU',
                    }}
                    options={[
                      { label: 'Ton Duc Thang University', value: 'TDT' },
                    ]}
                    isDisabled
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Tỉnh / Thành phố
                  </label>
                  <Select
                    defaultValue={{
                      label: City[profile?.city],
                      value: profile?.city,
                    }}
                    options={
                      Object.keys(City).map((key: string) => ({
                        label: City[key],
                        value: key,
                      })) as { label: string; value: string }[]
                    }
                    onChange={(e) =>
                      e ? setProfile({ ...profile, city: e.value }) : null
                    }
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Ngôn ngữ
                  </label>
                  <Select
                    isMulti
                    defaultValue={profile?.languages?.map((lang) => ({
                      label: Language[lang],
                      value: lang,
                    }))}
                    closeMenuOnSelect={false}
                    components={makeAnimatedSelect}
                    options={
                      Object.keys(Language).map((key: string) => ({
                        label: Language[key],
                        value: key,
                      })) as { label: string; value: string }[]
                    }
                    onChange={(e) =>
                      e
                        ? setProfile({
                          ...profile,
                          languages: Object.values(e.values),
                        })
                        : null
                    }
                  />
                </div>
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Kỹ năng
                  </label>
                  <Select
                    isMulti
                    defaultValue={profile.skills?.map((lang) => ({
                      label: Language[lang],
                      value: lang,
                    }))}
                    closeMenuOnSelect={false}
                    components={makeAnimatedSelect}
                    options={
                      Object.keys(Skills).map((key: string) => ({
                        label: Skills[key],
                        value: key,
                      })) as { label: string; value: string }[]
                    }
                    onChange={(newValue) => handleSkillsChange(newValue)}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb10">
                  <label className="heading-color ff-heading fw500 mb10">
                    Giới thiệu về bản thân
                  </label>
                  <textarea
                    cols={30}
                    rows={6}
                    placeholder="Mô tả một chút về bản thân của bạn nào :D"
                    value={profile?.bio}
                    onChange={(e) =>
                      setProfile({ ...profile, bio: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="text-start">
                  <button className="ud-btn btn-thm" type="submit">
                    Lưu
                    <i className="fal fa-arrow-right-long" />
                  </button>
                  {/* <button
                    className="ud-btn btn-thm ml5"
                    type="button"
                    onClick={() => setProfile(user)}
                  >
                    Undo
                    <i className="fal fa-arrow-right-long" />
                  </button> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
