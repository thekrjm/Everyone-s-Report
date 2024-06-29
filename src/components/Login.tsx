'use client';

import { loginAPI } from '@/app/api/auth';
import { ChangeEvent, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: 'thekrjm@naver.com',
    password: 'fbwpaks1',
  });
  const router = useRouter();

  const onChangeLoginInfo = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setLoginData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const onSubmit = async () => {
    try {
      const {
        data: {
          token: { accessToken, refreshToken },
        },
      } = await loginAPI(loginData);
      Cookies.set('accessToken', accessToken, { expires: 7 });
      router.push('/');
    } catch (error) {
      console.log('login error', error);
    }
  };

  return (
    <div className='flex flex-col mx-auto'>
      <label htmlFor='password'>이메일</label>
      <input
        className='border border-neutral-400 outline-none'
        type='text'
        id='email'
        onChange={onChangeLoginInfo}
      />
      <label htmlFor='password'>패스워드</label>
      <input
        className='border border-neutral-400 outline-none'
        type='password'
        id='password'
        onChange={onChangeLoginInfo}
      />
      <button onClick={onSubmit}>로그인</button>
    </div>
  );
};

export default Login;
