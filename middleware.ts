import { NextRequest, NextResponse, userAgent } from 'next/server'

// Set pathname were middleware will be executed
export const config = {
  matcher: '/',
}

export function middleware(req: NextRequest) {
  // Parse user agent
  const { device, browser } = userAgent(req)
  console.log(browser)
  // Check the viewport
  // const viewport = device.type === 'mobile' ? 'mobile' : 'desktop'
  const viewport = browser.name?.toLowerCase().includes("bot") ? 'mobile' : 'desktop'
  // Update the expected url
  req.nextUrl.pathname = `_viewport/${viewport}`
  req.nextUrl.searchParams.set("b", `${browser.name}`)
  // console.log(req.nextUrl)
  // Return rewrited response
  return NextResponse.rewrite(req.nextUrl)
}
