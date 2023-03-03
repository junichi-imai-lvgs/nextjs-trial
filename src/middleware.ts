/**
 * @see https://nextjs.org/docs/advanced-features/middleware
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
const middleware = (request: NextRequest) => {
  if (request.nextUrl.pathname.startsWith('/hogehoge')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
};

export default middleware;
