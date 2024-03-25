'use client'

import { IUser } from "@/interface/entities/user.interface";
import { FormEvent, useState } from "react";
import parseJson from 'parse-json';
import { handleCreateExp } from "@/service/experience.service";
import { handleCreateAward } from "@/service/award.service";

export default function CustomModal() {
    const [major, setMajor] = useState('');
    const [yearStart, setYearStart] = useState('');
    const [yearEnd, setYearEnd] = useState('');
    const [description, setDescription] = useState('');
    const [company, setCompany] = useState('');
    const user: IUser = parseJson(window?.localStorage?.getItem('userInfo'));

    const onMajorChange = (event: FormEvent<HTMLInputElement>) => {
        setMajor(event.currentTarget.value);
    };
    const onYearStartChange = (event: FormEvent<HTMLInputElement>) => {
        setYearStart(event.currentTarget.value);
    };
    const onYearEndChange = (event: FormEvent<HTMLInputElement>) => {
        setYearEnd(event.currentTarget.value);
    };
    const onDesChange = (event: FormEvent<HTMLInputElement>) => {
        setDescription(event.currentTarget.value);
    };
    const onCompanyChange = (event: FormEvent<HTMLInputElement>) => {
        setCompany(event.currentTarget.value);
    };

    const onSubmit = async () => {
        const newExp: any = {
            user_id: user?.id,
            description,
            company: company,
            year_start: yearStart,
            year_end: yearEnd,
            major
        }
        await handleCreateAward(newExp)
        return newExp
    };


    return (
        <>
            <div
                className="modal fade"
                id="proposalModal2"
                tabIndex={-1}
                aria-labelledby="proposalModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content position-relative">
                        <button
                            type="button"
                            className="btn-close position-absolute"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            style={{ top: '10px', right: '10px', zIndex: '9' }}
                        />
                        <div className="modal-body p-4">
                            <form onSubmit={onSubmit}>
                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3">
                                            <label className="form-label">Major</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={major}
                                                onChange={onMajorChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-3">
                                            <label className="form-label">Company</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={company}
                                                onChange={onCompanyChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3">
                                            <label className="form-label">Year Start</label>
                                            <input type="number"
                                                className="form-control"
                                                value={yearStart}
                                                onChange={onYearStartChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-3">
                                            <label className="form-label">Year End</label>
                                            <input type="number" className="form-control"
                                                value={yearEnd}
                                                onChange={onYearEndChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <input
                                        style={{
                                            height: '100px'
                                        }}
                                        className="form-control"
                                        type="text"
                                        value={description}
                                        onChange={onDesChange}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="ud-btn btn-thm"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    Create
                                    <i className="fal fa-arrow-right-long" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
