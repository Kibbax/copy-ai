 import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import db from '@/lib/db' 
import bcrypt from 'bcrypt'


export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password", placeholder: "*****" },
      },
      async authorize(credentials, req) {
       /*  console.log(credentials) */

        const userFound = await db.user.findUnique({
            where: {
                email: credentials.email
            }
        })
         //posible bug en res.ok
        if (!userFound) throw new Error('Invalid email or password')

        const matchPassword = await bcrypt.compare(credentials.password, userFound.password)

        if (!matchPassword) throw new Error('Invalid email or password')

        /* return Promise.resolve({
          id: userFound.id,
          name: userFound.name,
          email: userFound.email,
        }) */

        return {
            id: userFound.id,
            name: userFound.name,
            email: userFound.email,
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if(account?.provider === 'google') {
        token.accessToken = account?.accessToken 
        
      }
      
     /*  if (user) {
        token.id = user.id;
      } */
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
  }
}; 

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
 

/* // Importaciones anteriores...

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password", placeholder: "*****" },
      },
      async authorize(credentials, req) {
        try {
          console.log(credentials);

          const userFound = await db.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (!userFound) {
            // Si el usuario no existe, redirige a la página "registerG"
            throw new Error('User not found. Redirecting to registerG');
          }

          const matchPassword = await bcrypt.compare(
            credentials.password,
            userFound.password
          );

          if (!matchPassword) {
            throw new Error('Invalid email or password');
          }

          // Retorna los datos del usuario para la sesión
          return {
            id: userFound.id,
            name: userFound.name,
            email: userFound.email,
          };
        } catch (error) {
          // Manejo de errores
          console.error('Error during authorization:', error.message);

          // Puedes redirigir al usuario a una página de error u otras acciones según sea necesario
          throw new Error('Authorization failed');
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async signIn(user, account, profile) {
      // Manejar el inicio de sesión con Google
      if (account.provider === 'google') {
        // Verificar si el usuario ya existe en la base de datos
        const userFound = await db.user.findUnique({
          where: {
            email: profile.email,
          },
        });

        if (!userFound) {
          // El usuario no existe, redirige a la página "registerG"

          // Crea el usuario en la base de datos
          console.log('User not found. Redirecting to registerG');
          Register();
          //throw new Error('User not found. Redirecting to registerG');
          
        }

        // Retorna el usuario o realiza otras acciones según sea necesario
        return Promise.resolve(true);
      }

      // Lógica para otros proveedores si es necesario
      return Promise.resolve(true);
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
 */