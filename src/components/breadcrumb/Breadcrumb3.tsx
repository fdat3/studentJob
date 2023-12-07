import type { Breadcrumb3Input } from '@/common/breadcrum';

export default function Breadcrumb3({ path }: Breadcrumb3Input) {
  return (
    <>
      <section className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-style1">
                <div className="breadcrumb-list">
                  {path?.map((item, i) => <a key={i}>{item}</a>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
