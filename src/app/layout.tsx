'use client';

import { Roboto } from 'next/font/google';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createCache from '@emotion/cache';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '@/styles/theme';
import { useState } from 'react';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
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
      <html lang="en" className={roboto.variable}>
        <body>
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
