import 'next-auth'
import 'next-auth/jwt'

declare module 'next-auth' {
    interface User {
        id: string
        email: string // Add email field to User interface
    }

    interface Session {
        user: User
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        id: string
    }
}
