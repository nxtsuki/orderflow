import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: "--font-sans" });

export const metadata = {
  title: 'Vault - Reeve Setups Archive',
  description: 'Private website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  )
}
