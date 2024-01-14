"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ProgressBar
        height="4px"
        color="rgb(74, 109, 255)"
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </QueryClientProvider>
  );
}
