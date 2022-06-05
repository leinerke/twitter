import type { AppProps } from 'next/app';
import '@styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--doc-height',
      `${window.innerHeight}px`,
    );

    window.addEventListener('resize', () => {
      console.log('hola');
      document.documentElement.style.setProperty(
        '--doc-height',
        `${window.innerHeight}px`,
      );
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
