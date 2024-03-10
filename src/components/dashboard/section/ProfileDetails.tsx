'use client';

import Image from 'next/image';
import { enqueueSnackbar } from 'notistack';
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
  const handleLanguagesChange = (
    newValue: MultiValue<{ label: string | undefined; value: string }>,
  ) => {
    const newLanguages: string[] = [];
    newValue?.forEach((value) => {
      newLanguages.push(value.value);
    });
    setProfile({ ...profile, languages: newLanguages });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedUser: IUser = await handleUpdateProfile(new UserDto(profile));
    setProfile(updatedUser);
    enqueueSnackbar('Successfully Updated', { variant: 'success' });
  };

  return (
    <>
      <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
        <div className="bdrb1 pb15 mb25">
          <h5 className="list-title">Profile Details</h5>
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
                    Upload Images
                  </button>
                </label>
              </div>
              <p className="text mb-0">
                Max file size is 1MB, Minimum dimension: 330x300 And Suitable
                files are .jpg &amp; .png
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
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    value={profile?.full_name || ''}
                    onChange={(e) =>
                      setProfile({ ...profile, full_name: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={profile?.email || ''}
                    onChange={(e) =>
                      setProfile({ ...profile, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={profile?.phone || ''}
                    onChange={(e) =>
                      setProfile({ ...profile, phone: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={profile?.address || ''}
                    onChange={(e) =>
                      setProfile({ ...profile, address: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Major
                  </label>
                  <Select
                    defaultValue={{
                      label: StudentMajor[profile?.major || 0],
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
                    Gender
                  </label>
                  <Select
                    defaultValue={{
                      label: Gender[profile?.gender || 0],
                      value: profile?.gender,
                    }}
                    options={genderList}
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
                    University
                  </label>
                  <Select
                    defaultValue={{
                      label: 'Ton Duc Thang University',
                      value: 'TDT',
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
                    City
                  </label>
                  <Select
                    defaultValue={{
                      label: City[profile?.city || 0],
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
                    Languages
                  </label>
                  <Select
                    isMulti
                    defaultValue={
                      profile?.languages?.map((lang) => ({
                        label: Language[lang],
                        value: lang,
                      })) || Language[0]
                    }
                    closeMenuOnSelect={false}
                    components={makeAnimatedSelect}
                    options={
                      Object.keys(Language).map((key: string) => ({
                        label: Language[key],
                        value: key,
                      })) as { label: string; value: string }[]
                    }
                    onChange={(newValue: any) =>
                      handleLanguagesChange(newValue)
                    }
                  />
                </div>
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Skills
                  </label>
                  <Select
                    isMulti
                    defaultValue={
                      profile?.skills?.map((skill: string) => ({
                        label: Skills[skill],
                        value: skill,
                      })) || Skills[0]
                    }
                    closeMenuOnSelect={false}
                    components={makeAnimatedSelect}
                    options={
                      Object.keys(Skills).map((key: string) => ({
                        label: Skills[key],
                        value: key,
                      })) as { label: string; value: string }[]
                    }
                    onChange={(newValue: any) => handleSkillsChange(newValue)}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb10">
                  <label className="heading-color ff-heading fw500 mb10">
                    Introduce Yourself
                  </label>
                  <textarea
                    cols={30}
                    rows={6}
                    placeholder="Description"
                    value={profile?.bio || ''}
                    onChange={(e) =>
                      setProfile({ ...profile, bio: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="text-start">
                  <button className="ud-btn btn-thm" type="submit">
                    Save
                    <i className="fal fa-arrow-right-long" />
                  </button>
                  <button
                    className="ud-btn btn-dark ml5"
                    type="button"
                    onClick={() => setProfile(user)}
                  >
                    Undo
                    <i className="fal fa-arrow-right-long" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
