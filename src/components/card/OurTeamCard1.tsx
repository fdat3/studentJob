import Image from 'next/image';

import type { OurTeamInterface } from '@/interface/ourTeam.interface';

interface OurTeamCard1Props {
  data: OurTeamInterface;
}
export default function OurTeamCard1({ data }: OurTeamCard1Props) {
  return (
    <>
      <div className="feature-style2 mb30">
        <div className="feature-img">
          <Image
            height={331}
            width={257}
            className="w-100 h-100 object-fit-contain"
            src={data.img}
            alt="team"
          />
        </div>
        <div className="feature-content pt15">
          <h5 className="title mb-2">{data.name}</h5>
          <p className="text fz15">{data.skill}</p>
        </div>
      </div>
    </>
  );
}
