"use client";

import { usePathname } from "next/navigation";
import {Breadcrumb2Input} from "@/common/breadcrum";

export default function Breadcrumb2(input: Breadcrumb2Input) {
  const path = usePathname();
  const {title, brief} = input;
  return (
    <>
      <section
        className={`breadcumb-section ${
          path !== "/blog-2" && path !== "/blog-3" ? "mt40" : "pt0"
        }`}
      >
        <div className="cta-about-v1 mx-auto maxw1700 pt120 pb120 bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg">
          <div className="container">
            <div className="row">
              <div className="col-xl-5">
                <div className="position-relative">
                  <h2 className="text-white">{title}</h2>
                  <p className="text-white mb30">{brief}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
