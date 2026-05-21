import { useState } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CollectionSection from "./components/CollectionSection";
import CtaSection from "./components/CtaSection";
import DetailModal from "./components/DetailModal";
import ConnectWalletModal from "./components/ConnectWalletModal";
import { NFTItem } from "./types";

export default function App() {
  const [selectedNFT, setSelectedNFT] = useState<NFTItem | null>(null);
  const [walletOpen, setWalletOpen] = useState(false);

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen xl:h-screen xl:overflow-hidden bg-[#010828] text-[#EFF4FF] selection:bg-[#6FFF00] selection:text-[#010828] flex flex-col font-mono">
      
      {/* 
        Full-screen fixed carbon fiber pattern overlay matching Sophisticated Dark exactly
      */}
      <div 
        className="fixed inset-0 z-50 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-repeat opacity-60 mix-blend-lighten" 
      />

      {/* Decorative ambient subtle backlighting glowing spots in absolute background */}
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
        <div className="absolute top-[20%] left-[-20%] w-[600px] h-[600px] rounded-full bg-[#7c3aed]/10 blur-[150px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#6fff00]/5 blur-[200px]" />
      </div>

      {/* Section Content Flow - Optimized Grid for Desktop & Stacked for Mobile */}
      <main className="relative z-10 w-full flex-1 flex flex-col overflow-y-auto xl:overflow-hidden">
        
        {/* Upper Half: Section 1 (Hero Section) */}
        <div className="xl:h-[48%] xl:min-h-[48%] w-full flex flex-col rounded-b-[32px] overflow-hidden border-b border-white/5">
          <HeroSection 
            onScrollToSection={scrollToSection} 
            onOpenConnectWallet={() => setWalletOpen(true)} 
          />
        </div>

        {/* Middle Row: Left split 5 columns and Right split 7 columns */}
        <div className="flex-1 w-full flex flex-col xl:grid xl:grid-cols-12 xl:gap-0 xl:overflow-hidden">
          
          {/* Section 2 (About Intro): col-span-5 with border separator */}
          <div className="xl:col-span-5 relative overflow-hidden flex flex-col border-b xl:border-b-0 xl:border-r border-white/5">
            <AboutSection />
          </div>

          {/* Section 3 (Gallery Grid): col-span-7 with custom scrollbar behavior */}
          <div className="xl:col-span-7 bg-[#010828] flex flex-col overflow-y-auto">
            <CollectionSection onSelectNFT={setSelectedNFT} />
          </div>

        </div>

        {/* Section 4: CTA (Bottom) h-[18%] running as bottom dashboard footer */}
        <div className="xl:h-[18%] xl:min-h-[18%] w-full flex items-center overflow-hidden border-t border-white/5 bg-[#010828]">
          <CtaSection />
        </div>

      </main>

      {/* Interactive Detail specifications drawer */}
      {selectedNFT && (
        <DetailModal 
          nft={selectedNFT} 
          onClose={() => setSelectedNFT(null)} 
        />
      )}

      {/* Interactive Cryptosystem Connect Wallet Overlay */}
      {walletOpen && (
        <ConnectWalletModal 
          onClose={() => setWalletOpen(false)} 
        />
      )}

    </div>
  );
}
