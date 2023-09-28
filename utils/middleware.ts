import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { withAuth } from "next-auth/middleware";

export function middleware(request: NextRequest) {
  const mainUrl = request.nextUrl.clone().origin;
  if (request.nextUrl.pathname.endsWith('/account')) {
    return NextResponse.redirect(new URL('/account/settings', request.url));
  }
  // if (
  //   (request.nextUrl.pathname.endsWith('/account/settings') ||
  //     request.nextUrl.pathname.endsWith('/new-wine')) &&
  //   !request.cookies.has('jwt')
  // ) {
  //   return NextResponse.redirect(`${mainUrl}/login`);
  // }
  // console.log(request.cookies.has('jwt'));
  const url = request.url

  console.log(url.includes('/new-wine'), !request.cookies.has('jwt'));
  // if(request.nextUrl.pathname.startsWith('/login') && !request.cookies.has('jwt')) {
  //   return
  // }
  // if(request.nextUrl.pathname.startsWith('/account/settings') && !request.cookies.has('jwt')) {
  //   return
  // }
  // if(request.nextUrl.pathname.startsWith('/new-wine') && !request.cookies.has('jwt')) {
  //   return
  // }


  // if(url.includes('/login') && request.cookies.has('jwt')) {
  //   return NextResponse.redirect(new URL('/account/settings', url))
  // }
  // if(url.includes('/account') && !request.cookies.has('jwt')) {
    
  //   return NextResponse.redirect(new URL('/login', url))
  // }
  // if(url.includes('/new-wine') && !request.cookies.has('jwt')) {
  //   return NextResponse.redirect(new URL('/login', url))
  // }
  if(!request.cookies.has('jwt')) {
    return NextResponse.redirect(new URL('/', url))
  }

  // return NextResponse.next();
}

// export default withAuth({
//   callbacks: {
//     authorized({ req, token }) {
//       if (req.nextUrl.pathname === '/new-wine') {
//         return token?.name === 'ness'
//       }
//       return !!token
//     },
//   },
// })

export const config = {
  matcher: ['/account/:path*', '/new-wine', 'login'],
};
