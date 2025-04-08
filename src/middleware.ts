import { createServerApolloClient } from './core/apollo/server-client'
import { SessionCheckDocument } from './shared/api/graphql/_generated_/output'
import { AUTH_PATH, PROTECTED_PATH, ROUTES } from './shared/routes'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest, response: NextResponse) {
  const { cookies, nextUrl } = request
  const sessionCookie = cookies.get('session')?.value
  const isAuthRoute = nextUrl.pathname.startsWith(AUTH_PATH)
  const isProtectedRoute = nextUrl.pathname.startsWith(PROTECTED_PATH)
  if (!isAuthRoute && !isProtectedRoute) {
    return NextResponse.next()
  }
  const apolloClient = createServerApolloClient()

  try {
    const { data } = await apolloClient.query({
      query: SessionCheckDocument,
      context: {
        headers: {
          Cookie: `session=${sessionCookie}`
        }
      }
    })
    const hasSession = data?.sessionCheck

    if (isProtectedRoute && !hasSession) {
      return NextResponse.redirect(new URL(ROUTES.PUBLIC.LOGIN, request.url))
    }

    if (isAuthRoute && hasSession) {
      return NextResponse.redirect(
        new URL(ROUTES.PRIVATE.DASHBOARD, request.url)
      )
    }
  } catch (error) {
    console.error('Session check failed:', error)
    if (isProtectedRoute) {
      return NextResponse.redirect(new URL(ROUTES.PUBLIC.LOGIN, request.url))
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/i/:path*', '/account/:path*']
}
