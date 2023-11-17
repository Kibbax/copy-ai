import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req });
    console.log(token);
    const isAuth = !!token;

    const isSignUpPage = req.nextUrl.pathname.startsWith("/auth/register");
    console.log(req.nextUrl.pathname)
    console.log(isSignUpPage)

    if (isAuth && isSignUpPage) {
      return NextResponse.redirect(new URL("/input", req.url));
    }

  },
  {
    callbacks: {
      async authorized(){
        return true;
      },
    },
  }
);

export const config = {
  matcher: [
    "/input/:path*",
    "/result/:path*",
    "/download/:path*",
    "/inputB/:path*",
  ],
};
