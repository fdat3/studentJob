import {Breadcrumb3Input} from "@/common/breadcrum";

export default function Breadcrumb3(input: Breadcrumb3Input) {
  const {path} = input;
  return (
    <>
      <section className="breadcumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <div className="breadcumb-list">
                  {path?.map((item, i) => (
                    <a key={i}>{item}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
