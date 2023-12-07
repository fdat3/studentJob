import Breadcrumb3 from '@/components/breadcrumb/Breadcrumb3';
import HeaderInfo1 from '@/components/section/HeaderInfo1';
import ShopArea1 from '@/components/section/ShopArea1';

export const metadata = {
  title: 'Freeio - Freelance Marketplace React/Next Js Template | Job List',
};

export default function page() {
  return (
    <>
      <Breadcrumb3 path={['Home', 'Services', 'Design & Creative']} />
      <HeaderInfo1
        title="Shop Pages"
        brief="Give your visitor a smooth online experience
                                    with a solid UX design"
      />
      <ShopArea1 />
    </>
  );
}
