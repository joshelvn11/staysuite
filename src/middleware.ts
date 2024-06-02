import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { hostname, pathname } = req.nextUrl;
  const clientName = getClientNameFromHostname(hostname);

  if (pathname.startsWith("/_next/static/")) {
    return NextResponse.next();
  }

  if (clientName) {
    const url = req.nextUrl.clone();
    console.log(url.pathname);
    url.pathname = `/${clientName}${pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

function getClientNameFromHostname(hostname: string): string | null {
  const mappings: { [key: string]: string } = {
    "elandsbaystays.com": "Elands Bay",
    "john.com": "john",
    localhost: "test",
  };
  return mappings[hostname] || null;
}
