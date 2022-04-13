import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.ID,
        clientSecret: process.env.SECRET,
    }),
  ],
  callbacks: {
    async jwt({token, account, profile}) {

      if (profile?.email_verified) {
        token.providerId = profile.sub
        token.providerName = account.provider;
      }

      return token;
    },
    async session({session, token}) {
      session.providerName = token.providerName;
      session.providerId = token.providerId;

      return session;
    }
  }
})