import ReportList from '@/components/ReportList';
import Link from 'next/link';

export default function Home() {
  return (
    <section className='flex flex-col w-full max-w-[1000px]'>
      <h1>홈페이지</h1>
      <div>
        <ReportList />
      </div>
    </section>
  );
}
