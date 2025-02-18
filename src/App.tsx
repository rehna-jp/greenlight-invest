
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { WagmiProvider } from 'wagmi';
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Staking from "./pages/Staking";
import Governance from "./pages/Governance";
import NotFound from "./pages/NotFound";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'YOUR_PROJECT_ID';

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http()
  }
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  chains: [mainnet],
  metadata: {
    name: 'GreenStake',
    description: 'Sustainable Energy Investment Platform',
    url: 'https://greenstake.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  }
})

const queryClient = new QueryClient();

const App = () => (
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </WagmiProvider>
);

export default App;
