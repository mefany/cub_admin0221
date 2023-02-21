import type { NextRequest, NextFetchEvent } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest, event: NextFetchEvent) {
//   console.log(request)
  if (request.nextUrl.pathname.startsWith('/login')) {
    console.log(request.cookies['token'])
      // const url = request.nextUrl.clone()
      // url.pathname = '/'
      // return NextResponse.redirect(url);
  
 }
}