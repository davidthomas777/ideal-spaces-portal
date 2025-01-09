// Without a defined matcher, this one line applies next-auth to the 
export { default } from "next-auth/middleware";

export const config = { matcher: ["/login"] }