'use client';

import { CacheProvider, EmotionCache } from '@emotion/react';
import createCache from '@emotion/cache';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '@/styles/theme';
import { useState } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const clientSideCache = createCache({ key: 'css', prepend: true });

interface RootLayoutProps {
  children: React.ReactNode;
  emotionCache?: EmotionCache;
}

export default function RootLayout({
  children,
  emotionCache = clientSideCache,
}: RootLayoutProps) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <CacheProvider value={emotionCache}>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </CacheProvider>
  );
}
