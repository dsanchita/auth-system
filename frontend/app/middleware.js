import { NextResponse } from 'next/server';

export function middleware(request) {
  const accessToken = request.cookies.get('accessToken');
  const { pathname } = request.nextUrl;

  const authRoutes = ['/auth/login', '/auth/register'];
  const protectedRoutes = ['/dashboard'];

  if (accessToken && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (!accessToken && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  return NextResponse.next();
}