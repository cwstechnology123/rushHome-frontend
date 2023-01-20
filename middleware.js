import { withAuth } from "next-auth/middleware"

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      // `/admin` requires admin role
      console.log('req.nextUrl.pathname',req.nextUrl.pathname)
      if (req.nextUrl.pathname === "/client") {
        return token?.role === "client"
      }
      if (req.nextUrl.pathname === "/agent") {
        return token?.role === "agent"
      }
      // valid role only requires the user to be logged in
      return !!token
    },
  },
})

export const config = { matcher: ["/client/:path*", "/agent/:path*"] }