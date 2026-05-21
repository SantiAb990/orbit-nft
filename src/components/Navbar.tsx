import React, { useState } from "react";
import { Gamepad2, Menu, X, Wallet, ChevronDown } from "lucide-react";

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenConnectWallet: () => void;
}

// Sparkle stars layout exactly corresponding to the Axie Infinity references
const SparkleStar = ({ size = 26, top = "10%", left, right, opacity = 0.45, delay = "0s" }: { size?: number; top?: string; left?: string; right?: string; opacity?: number; delay?: string }) => (
  <div 
    className="absolute pointer-events-none select-none animate-pulse z-0" 
    style={{ top, left, right, opacity, animationDelay: delay, animationDuration: "3s" }}
  >
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="text-purple-300 fill-white drop-shadow-[0_0_10px_rgba(168,85,247,0.9)]"
    >
      <path d="M12 0L15.5 8.5L24 12L15.5 15.5L12 24L8.5 15.5L0 12L8.5 8.5Z" />
    </svg>
  </div>
);

export default function Navbar({ onScrollToSection, onOpenConnectWallet }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleLinkClick = (id: string) => {
    onScrollToSection(id);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <div className="w-full relative z-50 bg-[#0d0b1a] border-b border-purple-950/40 py-3 sm:py-4">
      
      {/* Background radial violet glow directly behind the navbar, exact same shade as the Axie image */}
      <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-r from-transparent via-[#a855f7]/10 to-transparent pointer-events-none" />
      <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-[350px] h-[50px] bg-purple-700/10 blur-[45px] pointer-events-none rounded-full animate-pulse" />
      <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-[350px] h-[50px] bg-indigo-600/10 blur-[45px] pointer-events-none rounded-full" />

      {/* --- SPARKLING FLOATING 4-POINT STARS --- */}
      <SparkleStar size={34} top="15%" left="8%" opacity={0.4} delay="0s" />
      <SparkleStar size={18} top="55%" left="18%" opacity={0.25} delay="1.2s" />
      <SparkleStar size={44} top="18%" right="12%" opacity={0.45} delay="0.6s" />
      <SparkleStar size={22} top="55%" right="22%" opacity={0.3} delay="2s" />
      <SparkleStar size={16} top="40%" left="48%" opacity={0.2} delay="1.7s" />

      {/* Core navigation bounds - expanded responsiveness so it doesn't hide items on small desktop and tablets */}
      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between gap-4">
        
        {/* Left: Brand Logo */}
        <div 
          onClick={() => handleLinkClick("hero")}
          className="flex items-center gap-2.5 cursor-pointer select-none z-10 hover:opacity-95 transition min-w-max"
        >
          <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 shadow-[0_0_12px_rgba(147,51,234,0.45)] border border-purple-400/20">
            <Gamepad2 className="w-4.5 h-4.5 text-white animate-pulse" />
          </div>
          <span className="font-sans font-black text-[19px] sm:text-[22px] tracking-wider text-white leading-none">
            ORBIS<span className="text-[#6FFF00] text-[24px]">.</span>NFT
          </span>
        </div>

        {/* Center: Main Navigation Menu (WHITE, BOLD, UPPERCASE, SPACED) */}
        {/* Using md:flex instead of lg:flex to ensure it's visible on smaller screens as well */}
        <nav className="hidden md:flex items-center justify-center flex-1 mx-2 lg:mx-6 z-10">
          <ul className="flex items-center justify-center gap-6 lg:gap-11 xl:gap-14">
            
            {/* INICIO */}
            <li>
              <button
                onClick={() => handleLinkClick("hero")}
                className="font-sans font-extrabold text-[12.5px] lg:text-[14px] tracking-widest text-[#EFF4FF] hover:text-[#6FFF00] transition-colors duration-200 cursor-pointer bg-transparent border-none py-1.5 relative group uppercase"
              >
                INICIO
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#6FFF00] transition-all duration-300 group-hover:w-full" />
              </button>
            </li>

            {/* GALERIA with dropdown (▼) */}
            <li 
              className="relative"
              onMouseEnter={() => setActiveDropdown("galeria")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleLinkClick("gallery")}
                className={`font-sans font-extrabold text-[12.5px] lg:text-[14px] tracking-widest transition-colors duration-200 cursor-pointer py-1.5 flex items-center gap-1.5 uppercase ${
                  activeDropdown === "galeria" ? "text-[#6FFF00]" : "text-[#EFF4FF] hover:text-[#6FFF00]"
                }`}
              >
                GALERIA <span className="text-[10px] text-purple-400">▾</span>
              </button>

              {/* Dropdown Menu block */}
              {activeDropdown === "galeria" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1.5 z-50 w-60 animate-fade-in">
                  <div className="bg-[#0b0816] border border-purple-900/50 rounded-xl p-2.5 shadow-[0_15px_35px_rgba(0,0,0,0.85),_inset_0_1px_1px_rgba(255,255,255,0.05)]">
                    <button
                      onClick={() => handleLinkClick("gallery")}
                      className="w-full text-left py-2 px-3 rounded-lg hover:bg-white/5 text-xs font-bold text-white hover:text-[#6FFF00] transition uppercase tracking-wide"
                    >
                      VER TODA LA GALERÍA
                    </button>
                    <button
                      onClick={() => handleLinkClick("gallery")}
                      className="w-full text-left py-2 px-3 rounded-lg hover:bg-white/5 text-xs font-bold text-white hover:text-[#6FFF00] transition uppercase tracking-wide"
                    >
                      SÚPER ULTRA RAROS
                    </button>
                    <button
                      onClick={() => handleLinkClick("gallery")}
                      className="w-full text-left py-2 px-3 rounded-lg hover:bg-white/5 text-xs font-bold text-white hover:text-[#6FFF00] transition uppercase tracking-wide"
                    >
                      MODELOS 3D VIDEO
                    </button>
                  </div>
                </div>
              )}
            </li>

            {/* COMPRAR NFT with dropdown (▼) */}
            <li 
              className="relative"
              onMouseEnter={() => setActiveDropdown("comprar")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={onOpenConnectWallet}
                className={`font-sans font-extrabold text-[12.5px] lg:text-[14px] tracking-widest transition-colors duration-200 cursor-pointer py-1.5 flex items-center gap-1.5 uppercase ${
                  activeDropdown === "comprar" ? "text-[#6FFF00]" : "text-[#EFF4FF] hover:text-[#6FFF00]"
                }`}
              >
                COMPRAR NFT <span className="text-[10px] text-purple-400">▾</span>
              </button>

              {/* Dropdown Menu block */}
              {activeDropdown === "comprar" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1.5 z-50 w-60 animate-fade-in">
                  <div className="bg-[#0b0816] border border-purple-900/50 rounded-xl p-2.5 shadow-[0_15px_35px_rgba(0,0,0,0.85),_inset_0_1px_1px_rgba(255,255,255,0.05)]">
                    <button
                      onClick={() => {
                        onOpenConnectWallet();
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left py-2 px-3 rounded-lg hover:bg-white/5 text-xs font-bold text-white hover:text-[#6FFF00] transition uppercase tracking-wide"
                    >
                      CONECTAR WALLET
                    </button>
                    <button
                      onClick={() => {
                        window.open("https://opensea.io", "_blank");
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left py-2 px-3 rounded-lg hover:bg-white/5 text-xs font-bold text-white hover:text-[#6FFF00] transition uppercase tracking-wide"
                    >
                      OPENSEA MARKETPLACE
                    </button>
                  </div>
                </div>
              )}
            </li>

            {/* FAQ */}
            <li>
              <button
                onClick={() => handleLinkClick("faq")}
                className="font-sans font-extrabold text-[12.5px] lg:text-[14px] tracking-widest text-[#EFF4FF] hover:text-[#6FFF00] transition-colors duration-200 cursor-pointer bg-transparent border-none py-1.5 relative group uppercase"
              >
                FAQ
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#6FFF00] transition-all duration-300 group-hover:w-full" />
              </button>
            </li>

            {/* CONTACTANOS */}
            <li>
              <button
                onClick={() => handleLinkClick("contact")}
                className="font-sans font-extrabold text-[12.5px] lg:text-[14px] tracking-widest text-[#EFF4FF] hover:text-[#6FFF00] transition-colors duration-200 cursor-pointer bg-transparent border-none py-1.5 relative group uppercase"
              >
                CONTACTANOS
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#6FFF00] transition-all duration-300 group-hover:w-full" />
              </button>
            </li>

          </ul>
        </nav>

        {/* Right: Connect Wallet premium button */}
        <div className="hidden md:flex items-center z-10 min-w-max">
          <button
            onClick={onOpenConnectWallet}
            className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-sans text-[11px] font-extrabold tracking-widest uppercase transition-all duration-300 border border-purple-500/30 flex items-center gap-1.5 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] active:scale-95 cursor-pointer"
          >
            <Wallet className="w-3.5 h-3.5 text-[#6FFF00] animate-pulse" />
            CONECTAR WALLET
          </button>
        </div>

        {/* Handheld & Tiny Screens Menu controller */}
        <div className="md:hidden flex items-center gap-2 z-10">
          <button
            onClick={onOpenConnectWallet}
            className="px-3 py-1.5 rounded-lg bg-purple-600/30 text-white font-sans text-[10px] font-black tracking-wider uppercase flex items-center gap-1 active:scale-95 transition border border-purple-500/20"
          >
            <Wallet className="w-3 h-3 text-[#6FFF00]" />
            WALLET
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg border border-purple-900/40 bg-[#0d0b1a]/80 text-white hover:text-[#6FFF00] active:scale-95 transition"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Handheld Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-[#0d0b1a] border-t border-purple-950/60 py-3 px-6 animate-fade-in flex flex-col gap-3 relative z-50">
          <button
            onClick={() => handleLinkClick("hero")}
            className="w-full text-left py-2 font-sans text-xs font-black text-white hover:text-[#6FFF00] tracking-widest uppercase transition"
          >
            INICIO
          </button>
          <button
            onClick={() => handleLinkClick("gallery")}
            className="w-full text-left py-2 font-sans text-xs font-black text-white hover:text-[#6FFF00] tracking-widest uppercase transition"
          >
            GALERIA
          </button>
          <button
            onClick={() => {
              onOpenConnectWallet();
              setMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 font-sans text-xs font-black text-[#6FFF00] hover:text-white tracking-widest uppercase transition flex items-center gap-1.5"
          >
            COMPRAR NFT
          </button>
          <button
            onClick={() => handleLinkClick("faq")}
            className="w-full text-left py-2 font-sans text-xs font-black text-white hover:text-[#6FFF00] tracking-widest uppercase transition"
          >
            FAQ
          </button>
          <button
            onClick={() => handleLinkClick("contact")}
            className="w-full text-left py-2 font-sans text-xs font-black text-white hover:text-[#6FFF00] tracking-widest uppercase transition"
          >
            CONTACTANOS
          </button>
        </div>
      )}

    </div>
  );
}
