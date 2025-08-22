
import clientPromise from "@/lib/mongodb";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { use } from "react";

export const authOption = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
                email: { label: "email", type: 'email', placeholder: 'example@email.com' }
            },
            async authorize(credentials, req) {
                console.log(credentials)
                // Add logic here to look up the user from the credentials supplied
                const { email, password } = credentials
                const client = await clientPromise;
                const db = client.db("my-self-library"); // your DB name
                const user = await db.collection("users").findOne({ email })
                console.log(user)
                const isPasswordOk = await bcrypt.compare(password, user.password)

                if (isPasswordOk) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })
    ],
    callbacks: {
        
        async session({ session, token, user }) {
            if (token) {
                session.user.email= token.email
            }
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                token.email= user.email
            }
            return token
        }
    }
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }