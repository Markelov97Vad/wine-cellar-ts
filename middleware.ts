import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.endsWith('/account')) {
    return NextResponse.redirect(new URL('/account/settings', request.url));
  }
}

export const config = {
  matcher: ['/account'],
};
