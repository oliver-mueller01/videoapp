import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

const handler = NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.id, // <- Discord User ID
          name: profile.username,
          email: profile.email,
          image: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`
        }
      }
    })
  ],

  callbacks: {
    async jwt({ token, account, profile }) {
      // Wichtig: Discord ID kommt aus account.providerAccountId
      if (account?.providerAccountId) {
        token.id = account.providerAccountId
      }
      return token
    },

    async session({ session, token }) {
      // Schreib die ID in die Session
      session.user.id = token.id as string
      return session
    }
  }
})

export { handler as GET, handler as POST }
