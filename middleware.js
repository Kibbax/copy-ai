export {default} from "next-auth/middleware"

export const config = {
matcher: ["/input/:path*", "/result/:path*", "/history/:path*", "/inputB/:path*",  ],
}