import NextAuth from 'next-auth'
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from './lib/zod';
import Google from 'next-auth/providers/google';
import { cookies } from 'next/headers';



export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google,
        Credentials({
        credentials: {
            email: { label: "Email", type: "email", placeholder: "Email" },
            password: { label: "Password", type: "password", placeholder: "Password" },
        },

        async authorize(credentials) {
            let user = null;

            const parsedCredentials = signInSchema.safeParse(credentials);

            if (!parsedCredentials.success) {
                console.error('Invalid credentials:', parsedCredentials.error.errors);
                return null;
            }


            user = {
                id: '1',
                name: 'akolade',
                email: 'kolzsticks1@gmail.com',
                password: '123456789'
            }

            if (!user) {
                console.log('invalid credentials');
                return null;
            }

            // const expiresAt = new Date();
            // expiresAt.setMinutes(expiresAt.getMinutes() + 10); // Cookie expires in 10 minutes
            // (await cookies()).set('loggedin', 'true', { expires: expiresAt });
            return user;
        }
    })],
    callbacks: {
        authorized({ request: { nextUrl }, auth }) {
            const isLoggedIn = !!auth?.user;
            const { pathname } = nextUrl;

            if (pathname.startsWith('/auth/signin') && isLoggedIn) {
                return Response.redirect(new URL('/', nextUrl));
            }

            return !!auth;
        },

        jwt({ token, user }) {
            if (user) {
                token.id = user.id as string;
            }

            return token;
        },

        session({ session, token }) {
            session.user.id = token.id;
            return session;
        }
    },
    pages: {
        signIn: '/auth/signin'
    }
})