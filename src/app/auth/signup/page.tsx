'use client';
import { signupAPI } from '@/app/api/auth';
import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';

const SignupPage = () => {
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    nickname: '',
    password: '',
  });

  const submit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const data = await signupAPI(signupData);
      console.log('dataaa', data);
    } catch (error) {
      console.log('signup error', error);
    }
  };

  const userInfoHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setSignupData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  console.log('signupData', signupData);

  return (
    <div className='text-black mt-10 border border-neutral-600 flex flex-col'>
      name
      <input type='text' id='name' onChange={userInfoHandler} />
      email
      <input type='text' id='email' onChange={userInfoHandler} />
      nickname
      <input type='text' id='nickname' onChange={userInfoHandler} />
      password
      <input type='password' id='password' onChange={userInfoHandler} />
      <button onClick={submit}>제출</button>
    </div>
  );
};

export default SignupPage;
