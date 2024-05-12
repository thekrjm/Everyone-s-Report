'use client';
import { getReportAPI } from '@/app/api/report';
import { getCookie } from '@/util/cookie';
import React, { useEffect } from 'react';

const ReportList = () => {
  const token = getCookie('accessToken');
  console.log('token', token);

  if (token) {
    useEffect(() => {
      const fetchData = async () => {
        const { data } = await getReportAPI(token, 0, 10);
        console.log('report data', data);
      };
      fetchData();
    }, []);
  }
  return <div>ReportList</div>;
};

export default ReportList;
