import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            ClientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
    ],
    callbacks: {
        //Invoked on successful sign in
        async signIn({ profile }) {
            //Connect to DB
            //User?
            //!user = add to DB
            //return
        },
        //Modify Session obj
        async session({ session }) {
            //get user
            //assign uid => session
            //return
        }
    }
}