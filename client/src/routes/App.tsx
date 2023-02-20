import { httpBatchLink } from "@trpc/client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "../trpc/trpc";
import Index from "./Index/Index";


export default function App() {
  const [qClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: import.meta.env.VITE_TRPC_HOST ?? "",
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={qClient}>
      <QueryClientProvider client={qClient}>
        <Index />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
