import {NextResponse} from "next/server";

export function middleware(request) {
 const {pathname} = request.nextUrl;

 // Jika mencoba mengakses route selain '/'
 if (pathname !== "/") {
  // Redirect ke halaman utama
  return NextResponse.redirect(new URL("/", request.url));
 }

 return NextResponse.next();
}

export const config = {
 matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
