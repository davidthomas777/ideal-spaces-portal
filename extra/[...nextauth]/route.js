// OLD PROJECT CODE
//
//
// import NextAuth from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';
// import User from '@models/user';
// import { connectToDB } from '@utils/database';

// // console.log({
// //     clientId: process.env.GOOGLE_ID,
// //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// // })

// const handler = NextAuth({
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         })
//     ],
//     callbacks: {
//         async session( {session} ) {
//             const sessionUser = await User.findOne({
//                 email: session.user.email
//             })
//             session.user.id = sessionUser._id.toString();
//             return session;
//         },
    
//         async signIn ({ profile }) {
//             try {
//                 // serverLess -> Lambda 
//                 await connectToDB()
//                 // check if a use already exists
//                 const userExists = await User.findOne({
//                     email: profile.email
//                 })
//                 //if not, create a new user
//                 if (!userExists) {
//                     await User.create({
//                         email: profile.email,
//                         username: profile.name.replace(/\s/g, "").toLowerCase(),
//                         image: profile.picture
//                     })
//                 }
//                 return true;
    
//             } catch (error) {
//                 console.log("HI");
//                 console.log(error);
//                 return false;
//             }
//         }
//     }
// })

// export { handler as GET, handler as POST} 

import NextAuth from "next-auth";
import { options } from "./options";

/*
const handler = NextAuth(options)

export { handler as GET, handler as POST }
*/