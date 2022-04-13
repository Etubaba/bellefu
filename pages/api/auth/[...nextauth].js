import NextAuth from "next-auth";
//import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    // ...add more providers here
    GoogleProvider({
        clientId: process.env.ID,
        clientSecret: process.env.SECRET,
        profile(profile, tokens) {
          return { ...profile, tokens }
        }
    }),
  ],
})