import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialProvider from "next-auth/providers/credentials"
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
            const user = { id: profile.id, userId: profile.id, name: name, email: profile.email, image: profile.image, role: role, access_token : res.data.token, refreshToken : res.data.refreshToken }
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
    async redirect({ url, baseUrl }) {
      console.log(url, baseUrl)
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
    async signIn({ account, user }) {
      console.log(account,user)
      if (account.provider === "google") {
        //return user.email.endsWith("@cwsinfotech.com") || user.email.endsWith("@rushhome.com")
        return true
      }
      else{
        return true // Do different verification for other providers that don't have `email_verified`
      }
    },
    async jwt({ token, user, account }) {
      if (account && user) {
        if (account.provider === "google") {
          try {
            const payload = {url : `${apiBaseUrl}/google-login`, method : 'POST', data : {email : user.email, full_name: user.name, google_id : user.id, image: user.image, user_type: '0'}}
            const res = await fetchApi(payload)
            if (res && res.data) {
              const profile = res.data?.profile;
              const role = profile && profile.user_type == 2 ? "agent" : "client"
              return {
                ...token,
                accessToken: res.data.token,
                refreshToken: res.data.refreshToken,
                picture: user.image,
                role: role,
                userId: profile.id
              };
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
          return {
            ...token,
            accessToken: user.access_token,
            refreshToken: user.refreshToken,
            picture: user.image,
            role: user.role,
            userId: user.userId
          };
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.role = token.role;
      session.user.picture = token.image;
      session.user.userId = token.userId;
      return session;
    },
  },
}

export default NextAuth(authOptions)