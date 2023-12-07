import Breadcrumb2 from '@/components/breadcrumb/Breadcrumb2';
import Breadcrumb3 from '@/components/breadcrumb/Breadcrumb3';
import BlogArea2 from '@/components/section/BlogArea2';

export const metadata = {
  title: 'Freeio - Freelance Marketplace React/Next Js Template | Blog 2',
};

export default function page() {
  return (
    <>
      <Breadcrumb3 path={['Home', 'Services', 'Design & Creative']} />
      <Breadcrumb2
        title="Freeio Blog"
        brief="Give your visitor a smooth online experience with a solid UX design"
      />
      <BlogArea2 />
    </>
  );
}
