'use client'

import { IUser } from "@/interface/entities/user.interface";
import { handleCreateEdu, handleGetEduById, handleUpdateEdu } from "@/service/education.service";
import { FormEvent, useEffect, useState } from "react";
import parseJson from 'parse-json';

export default function EditEducationModal(props: any) {
    const user: IUser = parseJson(window?.localStorage?.getItem('userInfo'));
    const [edu, setEdu] = useState<any>();
    const [updateEdu, setUpdateEdu] = useState<any>();

    const fetchEdu = () => {
        handleGetEduById(props?.id)
            .then((res: any) => {
                setEdu(res.data);
                setUpdateEdu(res.data);
            })
            .catch((error: any) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchEdu();
    }, []);

    const onUpdateEdu = async (e: FormEvent) => {
        e.preventDefault();
        const updatedEdu: any = await handleUpdateEdu(updateEdu);
        setEdu(updatedEdu);
        return updateEdu
    };

    return (
        <>
            <div className="modal fade" id="educationEditModal" tabIndex={-1} aria-labelledby="proposalModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content position-relative">
                        <button type="button" className="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close" style={{ top: '10px', right: '10px', zIndex: '9' }} />
                        <div className="modal-body p-4">
                            <form onSubmit={onUpdateEdu}>
                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3">
                                            <label className="form-label">Major</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={updateEdu?.major || ''}
                                                onChange={(e) => setUpdateEdu({ ...updateEdu, major: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-3">
                                            <label className="form-label">Company</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={updateEdu?.university || ''}
                                                onChange={(e) => setUpdateEdu({ ...updateEdu, university: e.target.value })}
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
                                                value={updateEdu?.year_start || ''}
                                                onChange={(e) => setUpdateEdu({ ...updateEdu, year_start: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-3">
                                            <label className="form-label">Year End</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={updateEdu?.year_end || ''}
                                                onChange={(e) => setUpdateEdu({ ...updateEdu, year_end: e.target.value })}
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
                                        value={updateEdu?.description || ''}
                                        onChange={(e) => setUpdateEdu({ ...updateEdu, description: e.target.value })}
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

