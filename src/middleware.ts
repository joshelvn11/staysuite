import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { hostname, pathname } = req.nextUrl;
  //const clientName = getClientNameFromHostname(hostname);

  if (pathname.startsWith("/_next/static/")) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  console.log(url.pathname);
  url.pathname = `/john${pathname}`;
  return NextResponse.rewrite(url);

  return NextResponse.next();
}

// function getClientNameFromHostname(hostname: string): string | null {
//   const mappings = {
//     "john.com": "john",
//     "emily.com": "emily",
//   };
//   return mappings[hostname] || null;
// }
