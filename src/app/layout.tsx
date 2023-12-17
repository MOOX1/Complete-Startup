import type { Metadata } from 'next';
import { Inter, Poppins, Rubik } from 'next/font/google';
import './globals.css';

import { Layout } from '@/components/Layout';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],

  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-rubik',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${rubik.variable} dark`}
    >
      <body
        className={
          inter.className +
          ' bg-white-default dark:bg-black-default dark:text-white-default'
        }
      >
        <Layout.Root hasHeader>
          <Layout.Header />
          {children}
        </Layout.Root>
      </body>
    </html>
  );
}
