import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
        async authorize(credentials) {
          console.log(credentials.email)
        // Example: Replace with your DB check
        if (credentials.email === "test@example.com" && credentials.password === "123456") {
          return { id: 1, name: "Test User", email: "test@example.com" };
        }
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
    secret: process.env.NEXTAUTH_SECRET
  
});
