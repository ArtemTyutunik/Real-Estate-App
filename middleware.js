import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const url = request.nextUrl.clone()
    if (url.pathname === '/') {
        url.pathname = '/home'
        return NextResponse.redirect(url)
    }
}
