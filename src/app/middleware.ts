import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export const middleware = (req: NextRequest) => {
  const getCookie = cookies();
  const token = req.cookies.get('accessToken');
  const url = new URL('/auth/login', req.url);

  const { pathname } = req.nextUrl;

  if (!token && !pathname.startsWith('/auth/login')) {
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
};
