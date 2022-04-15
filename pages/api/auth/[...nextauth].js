import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.ID,
        clientSecret: process.env.SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],
  callbacks: {
    async jwt({token, account, user}) {

      if (account) {
        token.providerName = account.provider;
        token.providerId = user.id;
      }

      // if (account?.provider === "google") token.providerId = profile.sub;
      // if (account?.provider === "facebook")  token.providerId = profile?.id

      return token;
    },
    async session({session, token}) {
      session.providerName = token?.providerName;
      session.providerId = token.providerId;

      return session;
    }
  },
  secret: "bellefu_etumunu",
})