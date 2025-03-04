import '@/styles/globals.css';
import {Cousine} from 'next/font/google';

export const metadata = {
  title: 'Will DiBiagio',
  description: '',
};

const cousine = Cousine({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={cousine.className}>{children}</body>
    </html>
  );
}
