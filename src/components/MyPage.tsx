'use client';
import { userInfoAPI } from '@/app/api/me';
import { getCookie } from '@/util/cookie';
import { getDate } from '@/util/getDate';
import { useEffect, useState } from 'react';

interface MyInfoData {
  createdDateTime: string;
  email: string;
  id: number;
  name: string;
}

const MyPage = () => {
  const [myInfoData, setMyInfoData] = useState<MyInfoData | null>(null);
  const token = getCookie('accessToken');
  useEffect(() => {
    if (token && !myInfoData) {
      const fetchData = async () => {
        try {
          const { data } = await userInfoAPI(token);
          setMyInfoData(data);
        } catch (error) {
          console.log('내정보 불러오기 오류', error);
        }
      };
      fetchData();
    }
  }, []);

  return (
    <div>
      <h1>{myInfoData?.email}</h1>
      <h1>{myInfoData?.name}</h1>
      <h1>
        {myInfoData?.createdDateTime
          ? getDate(myInfoData?.createdDateTime)
          : ''}
      </h1>
    </div>
  );
};

export default MyPage;
