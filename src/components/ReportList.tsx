import { getReportAPI } from '@/app/api/report';
import { cookies } from 'next/headers';

const ReportList = async () => {
  const getCookie = cookies();
  const token = getCookie.get('accessToken')?.value;

  if (!token) {
    console.log('necessary authorazation');
    return null;
  }
  const { data } = await getReportAPI(token, 0, 10);
  return (
    <section>
      <div>
        {data.list.map(({ id, title }: { id: string; title: string }) => (
          <div key={id}>
            <div>{title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReportList;
