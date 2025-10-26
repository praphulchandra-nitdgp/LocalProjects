import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Praphul Chandra | Portfolio',
  description: 'Aspiring Software Developer crafting innovative solutions with code',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* for app/page.tsx */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=Andada+Pro:ital,wght@0,400..840;1,400..840&family=Intel+One+Mono:ital,wght@0,300..700;1,300..700&family=Libertinus+Serif:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Noto+Sans+Mono:wght@500&family=Russo+One&display=swap" rel="stylesheet"></link>
      </head>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning={true}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}