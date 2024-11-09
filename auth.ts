import NextAuth, { User } from 'next-auth';
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from './lib/zod';
import Google from 'next-auth/providers/google';

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET
        }),
        Credentials({
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: "Password" },
            },

            async authorize(credentials): Promise<User | null> {
                // Validate credentials with Zod
                const parsedCredentials = signInSchema.safeParse(credentials);
                if (!parsedCredentials.success) {
                    console.error('Invalid credentials:', parsedCredentials.error.errors);
                    return null;
                }

                try {
                    // Call the external API for login
                    const response = await fetch('https://ecommerce-api-kfwt.onrender.com/api/v1/auth/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: credentials.email,
                            password: credentials.password,
                        }),
                    });

                    if (!response.ok) {
                        const errorData = await response.json();
                        console.error('API Error:', errorData.message);
                        return null;
                    }

                    const data = await response.json();

                    // Successful login, map the token and email to a User object
                    if (data.success) {
                        return {
                            id: data.access_token,   // Required User field
                            email: credentials.email, // Required User field
                        } as User; // Ensure it conforms to the User type
                    }

                    return null;
                } catch (error) {
                    console.error('Login error:', error);
                    return null;
                }
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
                // Store the access token in the token object for later use
                token.id = user.id as string;
            }
            return token;
        },

        session({ session, token }) {
            // Store the access token in the session object
            session.user.id = token.id;
            return session;
        }
    },
    pages: {
        signIn: '/auth/signin'
    }
});
