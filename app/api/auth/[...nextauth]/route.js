import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'email', type: 'email', placeholder: 'jsmith@example.com' },
                password: { label: 'Password', type: 'password' }
            },
            authorize: async (credentials, req) => {
                console.log(credentials)

                const userFound = await db.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                if(!userFound) return null
                console.log(userFound)
                return null
            }
        })
    ], 
    pages: {
        signIn: '/auth/login'
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }