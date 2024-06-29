'use client';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const onClickLogoutHandler = () => {
    Cookies.remove('accessToken');
  };

  return (
    <div className='flex justify-between p-4 bg-neutral-400 border-b border-red-100'>
      <div>
        <Link href='/' className='text-3xl font-bold text-red-50'>
          MODOO REPORTS
        </Link>
      </div>
      <div className='flex gap-3'>
        <Link href='/auth/signup'>가입</Link>
        <Link href='/auth/login'>로그인</Link>
        <Link href='/auth/login' onClick={onClickLogoutHandler}>
          로그아웃
        </Link>
        <Link href='/my-page'>마이페이지</Link>
        <Link href='/write'>레포트 작성</Link>
      </div>
    </div>
  );
};

export default Navbar;
