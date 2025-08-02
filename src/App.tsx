import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Routes from './routes';
import 'react-loading-skeleton/dist/skeleton.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <React.Suspense>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </React.Suspense>
    </QueryClientProvider>
  );
}

export default App;
