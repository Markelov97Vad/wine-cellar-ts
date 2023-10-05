import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
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
  if(!request.cookies.has('jwt')) {
    console.log('to login');
    
    return NextResponse.redirect(new URL('/login', url))
  }
  // if(request.nextUrl.pathname.startsWith('/login') && !request.cookies.has('jwt')) {
  //   return
  // }
  // if(request.nextUrl.pathname.startsWith('/account/settings') && !request.cookies.has('jwt')) {
  //   return
  // }
  // if(request.nextUrl.pathname.startsWith('/new-wine') && request.cookies.has('jwt')) {
  //   console.log('resonse');
    
  //   return console.log('response');
  //   ;
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
  matcher: ['/account/:path*', '/account', '/new-wine'],
};
