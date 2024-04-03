'use client';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import { Language, Skills } from '@/common/const/user.const';
import { IJob } from '@/interface/entities/job.interface';
import { IUser } from '@/interface/entities/user.interface';
import { handleCreateJob } from '@/service/job.service';
import dynamic from 'next/dynamic';
import parseJson from 'parse-json';
import { useState } from 'react';
import Select, { OnChangeValue } from 'react-select';
import SelectInput from '../option/SelectInput';
import FroalaEditor from 'react-froala-wysiwyg';

export default function BasicInformation() {
    const [getWorkType, setWorkType] = useState<{
        option: string;
        value: string;
    }>({
        option: 'Select',
        value: 'select',
    });
    const [getRec, setGetRec] = useState<{
        option: string;
        value: string;
    }>({
        option: 'Select',
        value: 'select',
    });
    const [getLevel, setLevel] = useState<{
        option: string;
        value: string;
    }>({
        option: 'Select',
        value: 'select',
    });
    const [getSkill, setSkill] = useState<any>();
    const [getReqLevel, setReqLevel] = useState<{
        option: string;
        value: string;
    }>({
        option: 'Select',
        value: 'usa',
    });
    const [getCity, setCity] = useState<{ option: string; value: string }>(
        {
            option: 'New York',
            value: 'new-york',
        },
    );


    const user: IUser = parseJson(window.localStorage?.getItem('userInfo'));


    const [profile, setProfile] = useState<IUser>(user);
    const [job, setJob] = useState<IJob | any>();
    const [price_body, setPrice] = useState<IJob | any>();
    const [description_body, setDescription] = useState<IJob | any>();


    // handlers
    const worlkTypeHandler = (option: string, value: string) => {
        setWorkType({
            option,
            value,
        });
    };
    const recruTypeHandler = (option: string, value: string) => {
        setGetRec({
            option,
            value,
        });
    };
    const levelHandler = (option: string, value: string) => {
        setLevel({
            option,
            value,
        });
    };
    const handleSkillsChange = (
        newValue: OnChangeValue<unknown, false>,
    ) => {
        const newSkills: string[] = [];
        if (Array.isArray(newValue)) {
            newValue.forEach((value) => {
                newSkills.push(value.value);
            });
        }
        setSkill({ skills: newSkills });
    };
    const reqLevelHandler = (option: string, value: string) => {
        setReqLevel({ option, value });
    };
    const cityHandler = (option: string, value: string) => {
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
    const handleInputChangeDes = (data: any) => {
        const description: any = { description: data };
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
            skills: getSkill,
            required_level: getReqLevel.value,
            recruit_type: getRec.value,
            description
        }
        await handleCreateJob(newJob)
        return newJob
    };

    return (
        <div className='flex-box'>
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
                                        Job Title
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
                                        Salary
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
                                                option: 'FULL TIME',
                                                value: '1',
                                            },
                                            {
                                                option: 'PART TIME',
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
                            <div className="col-sm-12">
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
                                        label="Location"
                                        defaultSelect={getCity}
                                        data={[
                                            {
                                                option: 'Ho Chi Minh',
                                                value: 'hcm',
                                            },
                                            {
                                                option: 'Ha Noi',
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
                            <div className="col-sm-12">
                                <div className="mb20">
                                    <SelectInput
                                        label="Recruit Type"
                                        defaultSelect={getRec}
                                        handler={recruTypeHandler}
                                        data={[
                                            {
                                                option: 'USER',
                                                value: '0',
                                            },
                                            {
                                                option: 'TEAM',
                                                value: '1',
                                            }
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mb10">
                                    <label className="heading-color ff-heading fw500 mb10">
                                        Description
                                    </label>
                                    <FroalaEditor
                                        model={description?.description}
                                        tag='textarea'
                                        onModelChange={handleInputChangeDes}
                                    />
                                    {/* <textarea
                    value={description?.description}
                    onChange={handleInputChangeDes}
                    cols={30}
                    rows={6}
                    placeholder="Description for job"
                  /> */}
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="text-lg-start">
                                    <button className="ud-btn btn-dark" type='submit'>
                                        Post
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
