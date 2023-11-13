export {default} from "next-auth/middleware"

export const config = {
matcher: ["/input/:path*", "/result/:path*", "/download/:path*", "/inputB/:path*",  ],
}