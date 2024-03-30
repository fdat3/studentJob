'use client'

import { job1 } from "@/data/job";
import JobCard4 from "../card/JobCard4";
import { useEffect, useState } from "react";
import { handleGetHiringJob, handleGetJobByOwnerId } from "@/service/job.service";

interface OwnerPropsId {
  id?: string
}
export default function JobInvision1(props: OwnerPropsId) {

  const [job, setJob] = useState<any>();

  const fetchJobs = (props: any) => handleGetHiringJob(props?.id).then((res: any) => {
    setJob(res)
  }).catch((error: any) => {
    console.log(error)
  })

  useEffect(() => {
    fetchJobs(props)
  }, []);

  console.log("🚀 ~ JobInvision1 ~ job:", job)


  return (
    <>
      <section className="pt-0 pb90 pb30-md">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb30">
                {job?.length <= 1 ? < h2 >{job?.length} job is hiring </h2> : < h2 >{job?.length} jobs are hiring </h2>}
                <p className="text">2022 jobs live - 293 added today</p>
              </div>
            </div>
          </div>
          <div className="row">
            {job?.map((item: any, i: any) => (
              <div key={i} className="col-sm-6 col-lg-4 col-xl-3">
                <JobCard4 data={item} />
              </div>
            ))}
          </div>
        </div>
      </section >
    </>
  );
}
