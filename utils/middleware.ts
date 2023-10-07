import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { withAuth } from "next-auth/middleware";

export function middleware(request: NextRequest) {
  const mainUrl = request.nextUrl.clone().origin;
  if (request.nextUrl.pathname.endsWith('/account')) {
    return NextResponse.redirect(new URL('/account/settings', request.url));
  }

  const url = request.url

  console.log(url.includes('/new-wine'), !request.cookies.has('jwt'));
  if(!request.cookies.has('jwt')) {
    console.log('to login');
    
    return NextResponse.redirect(new URL('/login', url))
  }

}

export const config = {
  matcher: ['/account/:path*', '/account', '/new-wine'],
};
