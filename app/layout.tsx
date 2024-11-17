import './globals.css'
import CookiesProviderLayout from './components/CookiesProvider';
import { SessionProvider } from 'next-auth/react';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en">
        <body>
          <CookiesProviderLayout>
            {children}
          </CookiesProviderLayout>
        </body>
      </html>
    </SessionProvider>
  );
}
