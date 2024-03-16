import Breadcrumb1 from '@/components/breadcrumb/Breadcrumb1';
import AboutArea1 from '@/components/section/AboutArea1';
import CounterInfo1 from '@/components/section/CounterInfo1';
import CtaBanner1 from '@/components/section/CtaBanner1';
import OurFaq1 from '@/components/section/OurFaq1';
import OurFeature1 from '@/components/section/OurFeature1';
import OurTeam1 from '@/components/section/OurTeam1';

export const metadata = {
  title:
    'TDTUFreelancer - Freelance Marketplace React/Next Js Template | Become seller',
};

export default function page() {
  return (
    <>
      <Breadcrumb1
        title="Work Your Way"
        brief={` Give your visitor a smooth online
                                        experience with a solid UX design.`}
        isBtnActive
      />
      <AboutArea1 />
      <OurFeature1 />
      <CtaBanner1 />
      <CounterInfo1 />
      <OurTeam1 />
      <OurFaq1 />
    </>
  );
}
