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
        authorization: {
          params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code"
          }
        }
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
            const role = profile && profile.user_type == 2 ? "agent" : "client"
            const user = { id: profile.id, name: name, email: profile.email, image: profile.image, role: role, access_token : res.data.token, refreshToken : res.data.refreshToken }
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
    async signIn({ account, user }) {
      if (account.provider === "google") {
        //return user.email.endsWith("@cwsinfotech.com") || user.email.endsWith("@rushhome.com")
        try {
          const payload = {url : `${apiBaseUrl}/google-login`, method : 'POST', data : {email : user.email, full_name: user.name, google_id : user.id, user_type: '0'}}
          const res = await fetchApi(payload)
          if (res && res.data) {
            const profile = res.data?.profile;
            const name = profile?.full_name;
            const role = profile && profile.user_type == 2 ? "agent" : "client"
            const user = { id: profile.id, name: name, email: profile.email, image: profile.image, role: role, access_token : res.data.token, refreshToken : res.data.refreshToken }
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
      }
      else{
        console.log(account,user)
        return true // Do different verification for other providers that don't have `email_verified`
      }
    },
    async jwt({ token, user, account }) {
      console.log('token',token)
      console.log(account,user)
      if (account && user) {
        return {
          ...token,
          accessToken: user.access_token,
          refreshToken: user.refreshToken,
          picture: user.image,
          role: user.role,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.role = token.role;
      session.user.picture = token.image;

      return session;
    },
  },
}

export default NextAuth(authOptions)