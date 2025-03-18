"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "./ui/sonner";

const queryClient = new QueryClient();

export function ClientProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>{children}</NuqsAdapter>
      <Toaster />
    </QueryClientProvider>
  );
}
