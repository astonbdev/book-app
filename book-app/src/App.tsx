import { useState } from 'react';
import './App.css';
import BookContainer from './BookContainer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div>
          <BookContainer/>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App
