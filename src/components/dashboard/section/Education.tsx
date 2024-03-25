'use client';

import { handleGetEduByUserId } from '@/service/education.service';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import CustomModal from '../modal/CustomModal';
import { IUser } from '@/interface/entities/user.interface';
import parseJson from 'parse-json';
import DeleteModal from '../modal/DeleteModal';
import EditEducationModal from '../modal/EditEducationModal';


export default function Education() {

  const user: IUser = parseJson(window?.localStorage?.getItem('userInfo'));
  const [props, setProps] = useState<any>();
  const [getEduID, setGetEduId] = useState<any>();

  const fetchEdu = () => handleGetEduByUserId(user?.id).then((res: any) => {
    setProps(res.data)
  }).catch((error: any) => {
    console.log(error)
  })

  useEffect(() => {
    fetchEdu()
  }, []);

  const handleClick = (event: any) => {
    setGetEduId(event.target.id);
  };

  return (
    <>
      <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
        <div className="bdrb1 pb15 mb30 d-sm-flex justify-content-between">
          <h5 className="list-title">Education</h5>
          <a
            className="icon me-2"
            id="add"
            data-bs-toggle="modal"
            data-bs-target="#educationModal"
          >
            <i className="icon far fa-plus mr10" />
            <Tooltip anchorSelect="#add" className="ui-tooltip" place="top">
              Add
            </Tooltip>
            Add your Education
          </a>
        </div>
        <div className="position-relative">
          {props?.map((data: any) => {
            return (
              <div onClick={handleClick} className="educational-quality">
                <div className="m-circle text-thm">M</div>
                <div className="wrapper mb40 position-relative">
                  <div className="del-edit">
                    <div className="d-flex">
                      <a
                        className="icon me-2"
                        id="edit"
                        data-bs-toggle="modal"
                        data-bs-target="#educationEditModal"
                      >
                        <Tooltip
                          anchorSelect="#edit"
                          className="ui-tooltip"
                          place="top">
                          Edit
                        </Tooltip>

                        <span className="flaticon-pencil" id={data?.id} />
                      </a>
                      <a
                        className="icon"
                        id="delete"
                        data-bs-toggle="modal"
                        data-bs-target="#eduDeleteModal"
                      >
                        <Tooltip
                          anchorSelect="#delete"
                          className="ui-tooltip">
                          Delete
                        </Tooltip>
                        <span className="flaticon-delete" id={data?.id} />
                      </a>
                    </div>
                  </div>
                  <span className="tag">{data?.year_start} - {data?.year_end}</span>
                  <h5 className="mt15">{data?.major}</h5>
                  <h6 className="text-thm">{data?.university}</h6>
                  <p>
                    {data?.description}
                  </p>
                </div>
              </div>
            )
          })}
          <div className="text-start">
            <a className="ud-btn btn-thm">
              Save
              <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
      </div>
      <CustomModal />
      <EditEducationModal id={getEduID} />
      <DeleteModal id={getEduID} />
    </>
  );
}
