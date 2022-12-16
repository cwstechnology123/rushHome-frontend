import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialProvider from "next-auth/providers/credentials";
import { apiBaseUrl, fetchApi } from '../../../utils/fetchApi'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialProvider({
      name:"Client Login",
      async authorize(credentials) {
        try {
          const payload = {url : `${apiBaseUrl}/login`, method : 'POST', data : {email : credentials.email, password : credentials.password}}
          const res = await fetchApi(payload)
          if (res && res.data) {
            const profile = res.data?.profile;
            const name = profile?.full_name;
            const userRole = profile && profile.user_type == 0 ? "agent" : "client"
            const user = { id: profile.id, name: name, email: profile.email, userRole: userRole, accessToken : res.data.token }
            return user
          }
          else{
            return res.message 
          }
          
        } catch (e) {
          const errorMessage = e.response.data.message
          // Redirecting to the login page with error message in the URL
          throw new Error(errorMessage + '&email=' + credentials.email)
        }
      },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: user.token,
          refreshToken: user.refreshToken,
        };
      }

      return token;
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.role = "client";

      return session;
    },
  },
}

export default NextAuth(authOptions)