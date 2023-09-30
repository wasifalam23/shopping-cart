import Header from '@/app/components/Header';
import { Toaster } from 'react-hot-toast';
import { StoreProvider } from '@/redux/StoreProvider';
import { inter } from './layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Toaster />
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
