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
  const onSubmit = async () => {
    try {
      const {
        data: {
          token: { accessToken, refreshToken },
        },
      } = await loginAPI(loginData);
      console.log('login token', accessToken);
      Cookies.set('accessToken', accessToken, { expires: 7 });
      router.push('/');
    } catch (error) {
      console.log('login error', error);
    }
  };

  const onChangeLoginInfo = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setLoginData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className='flex flex-col mx-auto'>
      <label htmlFor='password'>이메일</label>
      <input
        className='border border-neutral-400'
        type='text'
        id='email'
        onChange={onChangeLoginInfo}
      />
      <label htmlFor='password'>패스워드</label>
      <input
        className='border border-neutral-400'
        type='password'
        id='password'
        onChange={onChangeLoginInfo}
      />
      <button onClick={onSubmit}>로그인</button>
    </div>
  );
};

export default Login;
