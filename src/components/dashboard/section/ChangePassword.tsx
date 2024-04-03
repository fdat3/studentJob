'use client'

import {IUser} from '@/interface/entities/user.interface';
import {handleUpdatePassword} from '@/service/auth.service';
import Link from 'next/link';
import parseJson from 'parse-json';
import {FormEvent, useState} from 'react';

export default function ChangePassword() {

    const user: IUser = parseJson(window?.localStorage?.getItem('userInfo'));
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const onOldPasswordChange = (event: FormEvent<HTMLInputElement>) => {
        setOldPassword(event.currentTarget.value);
    };

    const onNewPasswordChange = (event: FormEvent<HTMLInputElement>) => {
        setNewPassword(event.currentTarget.value);
    };

    const email = user?.email

    const onSubmitUpdatePass = async (e: FormEvent) => {
        e.preventDefault();
        const data = {email, oldPassword, newPassword}
        return await handleUpdatePassword(data);
    };

    return (
        user.role == 1 ?
            <>
                <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                    <div className="bdrb1 pb15 mb25">
                        <h5 className="list-title">Đổi mật khẩu</h5>
                    </div>
                    <div className="col-lg-7">
                        <div className="row">
                            <form className="form-style1" onSubmit={onSubmitUpdatePass}>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="mb20">
                                            <label className="heading-color ff-heading fw500 mb10">
                                                Old Password
                                            </label>
                                            <input
                                                value={oldPassword}
                                                onChange={onOldPasswordChange}
                                                type="password"
                                                className="form-control"
                                                placeholder="********"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="mb20">
                                            <label className="heading-color ff-heading fw500 mb10">
                                                New Password
                                            </label>
                                            <input
                                                value={newPassword}
                                                onChange={onNewPasswordChange}
                                                type="password"
                                                className="form-control"
                                                placeholder="********"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="text-start">
                                            <button className="ud-btn btn-thm" type='submit'>
                                                Update Password
                                                <i className="fal fa-arrow-right-long"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
            :
            <>
            </>
    );
}
