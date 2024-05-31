import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import type { AppProps } from 'next/app';
import Navbar from '@/components/user/layout/Navbar';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
        <Navbar/>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
