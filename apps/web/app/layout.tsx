import ApolloWrapper from '@/lib/apollo/apollo-provider';
import './global.css';
import { Toaster } from '@/components/ui/sonner';
import { SessionProvider } from 'next-auth/react';

export const metadata = {
  title: 'Welcome to client',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>
          <SessionProvider refetchOnWindowFocus={false}>
            <ApolloWrapper>{children}</ApolloWrapper>
          </SessionProvider>
          <Toaster position="top-right" richColors closeButton />
        </main>
      </body>
    </html>
  );
}
