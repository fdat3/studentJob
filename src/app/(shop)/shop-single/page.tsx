import Breadcrumb3 from '@/components/breadcrumb/Breadcrumb3';
import ShopSingleArea1 from '@/components/section/ShopSingleArea1';

export const metadata = {
  title: 'Freeio - Freelance Marketplace React/Next Js Template | Shop Single',
};

export default function page() {
  return (
    <>
      <Breadcrumb3 path={['Home', 'Services', 'Design & Creative']} />
      <ShopSingleArea1 />
    </>
  );
}
