import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        // clientId: '895180081492-3go2n3jup7uhq3efoo5f9iia1k8t08q7.apps.googleusercontent.com',
        // clientSecret: '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',
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)