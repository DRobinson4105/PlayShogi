import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: "311381697135-8khnt4ehvna59rc1rti5fiajfni7n56d.apps.googleusercontent.com",
      clientSecret: "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"
    }),
    GitHubProvider({
      clientId: "Iv1.d9878a0e7e0972fc",
      clientSecret: "5956213d16d194d7404c2f406cd8317bc644f991"
    }),
    DiscordProvider({
      clientId: "1118720134001999913",
      clientSecret: "YIZvWvTX6Ly5kSW4Cr1OkbBrdeCEpqC-"
    })
  ]  
}

export default NextAuth(authOptions)