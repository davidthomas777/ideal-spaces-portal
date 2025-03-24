import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),

        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "your-username"
                },

                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "your-password"
                }
                
            },
            
            async authorize(credentials) {
                // This is where we would retrieve data from whatever database we use
                // https://next-auth.js.org/configuration/providers/credentials
                const user = { id: "20", name: "David", password: "next-auth" }
                // ^ This is an example user, we will change the const user to fetch from a database like NoSQL

                if (credentials?.username === user.name && credentials?.password === user.password)
                    return user;
                else
                    return null;
                
            }
        })
    ], 
}