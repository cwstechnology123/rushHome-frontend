import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialProvider from "next-auth/providers/credentials"
import { apiBaseUrl, fetchApi } from '../../../utils/fetchApi'
import { getCookie } from 'cookies-next';
import splitName from "../../../utils/splitName";
import { getAgentFubDetails, sendFubLeads } from "../../../utils/fubApiCall";

const authOptions = (req, res) => {
  const rh_user = getCookie('rh_user', { req, res})? JSON.parse(getCookie('rh_user', { req, res})) : '';
  return {
    // Configure one or more authentication providers
    providers: [
      GoogleProvider({
          clientId: process.env.NEXT_GOOGLE_ID,
          clientSecret: process.env.NEXT_GOOGLE_SECRET,
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
            const response = await fetchApi(payload)
            if (response && response.data) {
              const profile = response.data?.profile;
              const name = profile?.full_name;
              const role = "client"
              const user = { id: profile.id, userId: profile.id, name: name, email: profile.email, image: profile.image, role: role, access_token : response.data.token, refreshToken : response.data.refreshToken, fubId: profile.fub_id }
              return user
            }
            else{
              return false
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
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      async redirect({ url, baseUrl }) {
        console.log('url', url)
        // Allows relative callback URLs
        if (url.startsWith("/")) return `${baseUrl}${url}`
        // Allows callback URLs on the same origin
        else if (new URL(url).origin === baseUrl) return url
        return baseUrl
      },
      async signIn({ account, user}) {
        // console.log(account,user)
        // console.log(rh_user)
        if (account.provider === "google" && rh_user.role === "agent") {
          return user.email.endsWith("@cwsinfotech.com") || user.email.endsWith("@rushhome.com")
        }
        else{
          return true
        }
      },
      async jwt({ token, user, account }) {
        if (req.url === "/api/auth/session?update") {
          try {
            let payload = {url : `${apiBaseUrl}/users/profile/${token.userId}`, accessToken: token.accessToken, method : 'GET'}
            let response = await fetchApi(payload);
            if(response && response.data){
              const profile = response.data?.profile;
              return {
                ...token,
                picture: profile.image,
                name: profile.full_name,
                userId: profile.id,
                fubId: profile.fub_id
              };
            }
            else{
              return token  
            }
          }
          catch (e) {
            return token
          } 
        }
        if (account && user) {
          console.log("User: ",rh_user);
          if (account.provider === "google") {
            try {
              
              const user_type = rh_user && rh_user.role == "agent" ? "2" : "0";
              let sendData = {};
              sendData = {email : user.email, full_name: user.name, google_id : user.id, image: user.image, user_type: user_type}
              if(rh_user.role == "client"){
                const {firstName, lastName} = splitName(user.name);
                let leadObj = {
                    person: {
                      contacted: false,
                      emails: [{isPrimary: true, type: 'work', value: user.email}],
                      firstName: firstName,
                      lastName: lastName,
                      stage: 'Lead',
                      sourceUrl: `${process.env.NEXT_PUBLIC_HOST_NAME}/signup`,
                      source: 'RushHome',
                    },
                    type: 'Registration',
                    system: 'NextJS',
                    source: 'RushHome',
                };
                let respond = await sendFubLeads(leadObj);
                if(respond && respond.status){
                  sendData = {email : user.email, full_name: user.name, google_id : user.id, image: user.image, user_type: user_type, fub_id: respond.message.id}
                }
              }
              if(rh_user.role == "agent"){
                let respond = await getAgentFubDetails(user.email);
                if(respond && respond.status){
                  let userAgent = respond.message.users;
                  if(userAgent.length){
                    sendData = {email : user.email, full_name: user.name, google_id : user.id, image: user.image, user_type: user_type, fub_id: userAgent[0].id}
                  }
                }
              }
              const payload = {url : `${apiBaseUrl}/google-login`, method : 'POST', data : sendData}
              const response = await fetchApi(payload)
              if (response && response.data) {
                const profile = response.data?.profile;
                const role = profile && profile.user_type == 2 ? "agent" : "client"
                return {
                  ...token,
                  accessToken: response.data.token,
                  refreshToken: response.data.refreshToken,
                  picture: user.image,
                  role: role,
                  userId: profile.id,
                  fubId: (profile.fub_id || "") 
                };
              }
              else{
                return false 
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
              userId: user.userId,
              fubId: user.fub_id,
            };
          }
        }
        return token;
      },
      async session({ session, token }) {
        console.log("Token",token)
        session.user.accessToken = token.accessToken;
        session.user.refreshToken = token.refreshToken;
        session.user.role = token.role;
        session.user.picture = token.image;
        session.user.userId = token.userId;
        session.user.fubId = token.fubId;
        return session;
      },
    },
  }
}

export default (req, res) => {
  return NextAuth(req, res, authOptions(req, res))
}