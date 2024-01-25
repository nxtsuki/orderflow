import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: "--font-sans" });

export const metadata = {
  title: 'orderflow',
  description: 'private orderflow website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta httpEquiv='cache-control' content='no-cache' />
        <meta httpEquiv='expires' content='0' />
        <meta httpEquiv='pragma' content='no-cache' />
      </Head>
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  )
}
