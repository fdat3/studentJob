import Breadcrumb3 from '@/components/breadcrumb/Breadcrumb3';
import BlogArea4 from '@/components/section/BlogArea4';
import RecentPostArea1 from '@/components/section/RecentPostArea1';

export const metadata = {
  title: 'Freeio - Freelance Marketplace React/Next Js Template | Blog Single',
};

export default function page() {
  return (
    <>
      <Breadcrumb3 path={['Home', 'Services', 'Design & Creative']} />
      <BlogArea4 />
      <RecentPostArea1 />
    </>
  );
}
