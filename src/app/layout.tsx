import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { VantaBackground } from '@/components/vanta-background';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Tractix - Find your next career move',
  description: 'Stop endless course hunting. Get a clear, personalized roadmap today.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen font-body antialiased', inter.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <VantaBackground />
          <div className='relative z-10'>
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
