import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialProvider from "next-auth/providers/credentials";
import { apiBaseUrl } from '../../../utils/fetchApi'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialProvider({
      async authorize(credentials) {
        try {
          const res = await axios.post(`${apiBaseUrl}/login`,
          {
            password: credentials.password,
            email: credentials.email
          },
          {
            headers: {
              accept: '*/*',
              'Content-Type': 'application/json'
            }
          })
          console.log('next auth',res)
          if (res && res.data) {
            return {status: 'success', data: res.data}
          }
          else{
             return res 
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
    jwt: async (token, user) => {
      if (user) {
        token.jwt = user.token;
        user.name = user && user.profile?.full_name;
        token.user = user.profile;
        token.accessToken = user?.token;
      }
      return Promise.resolve(token);
    },
    session: async (session, token) => {
      session.jwt = token.jwt;
      session.accessToken = token.accessToken ? token.accessToken :
      session.user = token.user ? token.user : session.user; 
      return Promise.resolve(session);
    },
  },
}

export default NextAuth(authOptions)