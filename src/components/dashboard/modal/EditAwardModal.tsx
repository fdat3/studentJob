'use client'

import { IUser } from "@/interface/entities/user.interface";
import { handleUpdateEdu } from "@/service/education.service";
import { FormEvent, useEffect, useState } from "react";
import parseJson from 'parse-json';
import { handleGetExpById, handleUpdateExp } from "@/service/experience.service";
import { handleGetAwardById, handleUpdateAward } from "@/service/award.service";

export default function EditAwardModal(props: any) {
    const user: IUser = parseJson(window?.localStorage?.getItem('userInfo'));
    const [award, setAward] = useState<any>();
    const [updateAward, setUpdateAward] = useState<any>();

    const fetchExp = () => {
        handleGetAwardById(props?.id)
            .then((res: any) => {
                setAward(res.data);
                setUpdateAward(res.data);
            })
            .catch((error: any) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchExp();
    }, []);

    const onUpdateExp = async (e: FormEvent) => {
        e.preventDefault();
        const updatedAward: any = await handleUpdateAward(updateAward);
        setAward(updatedAward);
        return updateAward
    };

    return (
        <>
            <div className="modal fade" id="editAwardModal" tabIndex={-1} aria-labelledby="proposalModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content position-relative">
                        <button type="button" className="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close" style={{ top: '10px', right: '10px', zIndex: '9' }} />
                        <div className="modal-body p-4">
                            <form onSubmit={onUpdateExp}>
                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3">
                                            <label className="form-label">Major</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={updateAward?.major || ''}
                                                onChange={(e) => setUpdateAward({ ...updateAward, major: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-3">
                                            <label className="form-label">Company</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={updateAward?.company || ''}
                                                onChange={(e) => setUpdateAward({ ...updateAward, company: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3">
                                            <label className="form-label">Year Start</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={updateAward?.year_start || ''}
                                                onChange={(e) => setUpdateAward({ ...updateAward, year_start: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-3">
                                            <label className="form-label">Year End</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={updateAward?.year_end || ''}
                                                onChange={(e) => setUpdateAward({ ...updateAward, year_end: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <input
                                        style={{ height: '100px' }}
                                        className="form-control"
                                        type="text"
                                        value={updateAward?.description || ''}
                                        onChange={(e) => setUpdateAward({ ...updateAward, description: e.target.value })}
                                    />
                                </div>
                                <button type="submit" className="ud-btn btn-thm" data-bs-dismiss="modal" aria-label="Close">
                                    Update
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

