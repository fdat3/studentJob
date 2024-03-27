import Breadcrumb1 from '@/components/breadcrumb/Breadcrumb1';
import ContactInfo1 from '@/components/section/ContactInfo1';
import GoogleMap1 from '@/components/section/GoogleMap1';
import OurFaq1 from '@/components/section/OurFaq1';

export const metadata = {
  title: 'TDTUFreelancer - Freelance Marketplace React/Next Js Template | Contact',
};

export default function page() {
  return (
    <>
      <Breadcrumb1
        title="Contact us"
        brief={`We'd love to talk about how we can help you.`}
        isBtnActive={false}
      />
      <ContactInfo1 />
      <GoogleMap1 />
      <OurFaq1 />
    </>
  );
}
