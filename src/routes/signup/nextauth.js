import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

providers: [
  GoogleProvider({
    clientId: "311381697135-8khnt4ehvna59rc1rti5fiajfni7n56d.apps.googleusercontent.com",
    clientSecret: "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"
  }),
  GitHubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  })
]