import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.REDIS_URL,
  token: process.env.REDIS_TOKEN,
});

async function getClientNameFromHostname(
  hostname: string
): Promise<string | null> {
  const data: string | null = await redis.get(hostname);
  return data;
}

export async function middleware(req: NextRequest) {
  const { hostname, pathname } = req.nextUrl;
  const clientName = await getClientNameFromHostname(hostname);

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
