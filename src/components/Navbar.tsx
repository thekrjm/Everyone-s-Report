import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 bg-neutral-400 border-b border-red-100'>
      <div>
        <Link href='/' className='text-3xl font-bold text-red-50'>
          STOCK REPORT
        </Link>
      </div>
      <div className='flex gap-3'>
        <Link href='/auth/signup'>가입</Link>
        <Link href='/auth/login'>로그인</Link>
        <Link href='/my-page'>마이페이지</Link>
      </div>
    </div>
  );
};

export default Navbar;
