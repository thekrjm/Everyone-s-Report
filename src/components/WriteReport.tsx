'use client';

import { postReportApi } from '@/app/api/report';
import { getCookie } from '@/util/cookie';
import { ChangeEvent, useState } from 'react';

const WriteReport = () => {
  const [reportData, setReportData] = useState({
    title: '',
    content: '',
    targetPrice: 0,
  });
  const [selectedRecommend, setSelectedRecommend] = useState<string[]>([]);
  const token = getCookie('accessToken');

  const onChangeInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = event.target;
    setReportData((prev) => ({
      ...prev,
      [id]: id === 'targetPrice' ? Number(value) : value,
    }));
  };

  const onChangeRecommended = (event: ChangeEvent<HTMLSelectElement>) => {
    const { options } = event.target;
    const selectedOption = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setSelectedRecommend(selectedOption);
  };

  const onSubmitReport = async (event: React.FormEvent) => {
    event.preventDefault();
    const recommended = selectedRecommend.join(',');
    const data = { ...reportData, recommended };
    try {
      if (!token) return;
      await postReportApi(data, token);
      console.log('dataaa', data);
    } catch (error) {
      console.log('제출에러', error);
    }
  };
  return (
    <section className='w-full max-w-2xl'>
      <form
        onSubmit={onSubmitReport}
        className='flex flex-col justify-center items-center'
      >
        <input
          type='text'
          id='title'
          required
          placeholder='제목을 입력해주세요.'
          onChange={onChangeInput}
        />
        <input
          type='number'
          id='targetPrice'
          required
          placeholder='금액을 입력해주세요.'
          onChange={onChangeInput}
        />
        <label htmlFor='recommended'>추천</label>
        <select id='recommended' onChange={onChangeRecommended}>
          <option id='STRONG_SELL'>STRONG_SELL</option>
          <option id='SELL'>SELL</option>
          <option id='NEUTRAL'>NEUTRAL</option>
          <option id='BUY'>BUY</option>
          <option id='STRONG_BUY'>STRONG_BUY</option>
        </select>
        <textarea
          id='content'
          required
          placeholder='내용을 입력해주세요.'
          onChange={onChangeInput}
        />
        <button>제출</button>
      </form>
    </section>
  );
};

export default WriteReport;
