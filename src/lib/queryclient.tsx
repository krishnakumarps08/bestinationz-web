"use client"; 

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, useState } from "react";

const QueryClientProviderWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default QueryClientProviderWrapper;
