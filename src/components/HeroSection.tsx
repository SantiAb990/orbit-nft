import { Mail, Twitter, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenConnectWallet: () => void;
}

interface SlideItem {
  id: string;
  name: string;
  creator: string;
  mainVideo: string;
  rarityTag: string;
  stats: {
    floorPrice: string;
    items: string;
    totalVolume: string;
    listed: string;
  };
  thumbnails: string[];
}

const slides: SlideItem[] = [
  {
    id: "cosmos-supremo",
    name: "COSMOS SUPREMO",
    creator: "Creador Orbis",
    rarityTag: "SÚPER ULTRA RARO",
    mainVideo: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4",
    stats: {
      floorPrice: "4.80 ETH",
      items: "100",
      totalVolume: "12,400 ETH",
      listed: "0.1%"
    },
    thumbnails: [
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4",
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4",
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4"
    ]
  },
  {
    id: "singularidad-x",
    name: "SINGULARIDAD X",
    creator: "Laboratorio del Vacío",
    rarityTag: "KARDASHEV III+",
    mainVideo: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4",
    stats: {
      floorPrice: "6.20 ETH",
      items: "50",
      totalVolume: "8,920 ETH",
      listed: "0.05%"
    },
    thumbnails: [
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4",
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4",
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4"
    ]
  },
  {
    id: "portal-aurora",
    name: "PORTAL DE AURORA PRO",
    creator: "Estudio Stellar",
    rarityTag: "RESONANCIA LUMINOSA",
    mainVideo: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4",
    stats: {
      floorPrice: "3.90 ETH",
      items: "150",
      totalVolume: "5,430 ETH",
      listed: "1.2%"
    },
    thumbnails: [
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4",
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4",
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4"
    ]
  }
];

export default function HeroSection({ onScrollToSection, onOpenConnectWallet }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide transition delay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Generate background floating particles for the "efecto de burbujas"
  const bubbles = Array.from({ length: 12 }).map((_, i) => ({
    left: `${(i * 8.5) % 100}%`,
    size: `${((i * 4) % 6) + 3}px`,
    delay: `${i * 0.5}s`,
    duration: `${5 + (i % 4) * 2}s`
  }));

  const slide = slides[currentSlide];

  return (
    <section
      id="hero"
      className="relative w-full h-full xl:min-h-0 flex flex-col justify-between overflow-hidden rounded-b-[32px] bg-[#010828] select-none"
    >
      <style>{`
        @keyframes floatBubble {
          0% { transform: translateY(110%) scale(0.9); opacity: 0; }
          15% { opacity: 0.4; }
          85% { opacity: 0.4; }
          100% { transform: translateY(-20%) scale(1.1); opacity: 0; }
        }
        .particle-bubble-element {
          animation: floatBubble linear infinite;
        }
      `}</style>

      {/* Top Gaming HUD Style Navigation Bar */}
      <Navbar onScrollToSection={onScrollToSection} onOpenConnectWallet={onOpenConnectWallet} />

      {/* Main Beautiful NFT Slider Banner Container */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 flex-1 flex flex-col justify-center py-2">
        
        {/* Banner Card Wrapper. Configured precisely to 300-350px width card-style */}
        <div className="relative w-full h-[290px] sm:h-[310px] md:h-[330px] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#0a1128] via-[#101b35] to-[#060a18] border border-white/10 shadow-2xl flex items-center px-4 sm:px-8 md:px-10 z-10">
          
          {/* Loop backdrop video requested by user */}
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen pointer-events-none"
            src="https://cdn.pixabay.com/video/2021/10/06/91088-629483824_tiny.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Glowing particle bubbles overlay */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {bubbles.map((b, idx) => (
              <div
                key={idx}
                className="absolute particle-bubble-element rounded-full bg-white/20 blur-[1px]"
                style={{
                  left: b.left,
                  width: b.size,
                  height: b.size,
                  animationDelay: b.delay,
                  animationDuration: b.duration,
                  bottom: 0,
                }}
              />
            ))}
          </div>

          {/* Dark radial overlay to blend with card sides */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none z-[1]" />

          {/* Navigation Arrows inside Card borders */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#6FFF00] hover:bg-black/70 hover:scale-105 active:scale-95 transition cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#6FFF00] hover:bg-black/70 hover:scale-105 active:scale-95 transition cursor-pointer"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Banner Contents Flex/Grid Layout */}
          <div className="relative z-10 w-full flex items-center justify-between gap-4 sm:gap-6 h-full py-4 pl-6 pr-6">
            
            {/* Left Content (Text area + large main image) */}
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8 min-w-0 flex-1 h-full">
              
              {/* Main character/NFT artwork representation (occupies a large portion) */}
              <div className="relative h-full flex-shrink-0 flex items-center justify-center">
                <div className="relative h-[120px] w-[120px] sm:h-[180px] sm:w-[180px] md:h-[230px] md:w-[230px] rounded-[16px] overflow-hidden border border-[#6FFF00]/25 shadow-lg shadow-[#6FFF00]/10 group">
                  <video
                    id="hero-main-nft-video"
                    src={slide.mainVideo}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.05]"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  {/* Glowing Rarity Tag Overlay */}
                  <div className="absolute top-2.5 left-2.5 z-10 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-[#6FFF00]/30 font-mono text-[8px] text-[#6FFF00] tracking-wider uppercase">
                    {slide.rarityTag}
                  </div>
                </div>
              </div>

              {/* Text descriptions and verification check marks */}
              <div className="flex flex-col justify-center min-w-0">
                
                {/* Collection Name row */}
                <div className="flex items-center gap-1.5 sm:gap-2.5 flex-wrap">
                  <h2 className="font-grotesk text-[18px] sm:text-[24px] md:text-[28px] uppercase tracking-tight text-white font-bold leading-none">
                    {slide.name}
                  </h2>
                  {/* Blue verification check icon (✓) */}
                  <span className="inline-flex items-center justify-center w-[15px] h-[15px] sm:w-[18px] sm:h-[18px] rounded-full bg-blue-500 text-white font-bold text-[9px] sm:text-[11px] shadow-sm select-none">
                    ✓
                  </span>
                </div>

                {/* Creator name row */}
                <div className="flex items-center gap-1 mt-1 sm:mt-1.5 font-mono text-[10px] sm:text-[12px] text-gray-400">
                  <span>Creado por {slide.creator}</span>
                  {/* Small cyan verification mini-badge */}
                  <span className="text-[10px] text-cyan-400 leading-none" title="Verificado">✓</span>
                </div>

                {/* Stat block grid row (4 metrics) */}
                <div className="grid grid-cols-4 gap-x-2 sm:gap-x-5 mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-white/5 max-w-[460px]">
                  <div>
                    <span className="block text-[7.5px] sm:text-[9px] uppercase tracking-wider text-gray-400 font-mono leading-none">
                      FLOOR PRICE
                    </span>
                    <span className="block text-[11px] sm:text-[14px] text-white font-bold font-mono tracking-tight mt-1">
                      {slide.stats.floorPrice}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[7.5px] sm:text-[9px] uppercase tracking-wider text-gray-400 font-mono leading-none">
                      ITEMS
                    </span>
                    <span className="block text-[11px] sm:text-[14px] text-white font-bold font-mono tracking-tight mt-1">
                      {slide.stats.items}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[7.5px] sm:text-[9px] uppercase tracking-wider text-gray-400 font-mono leading-none">
                      TOTAL VOLUME
                    </span>
                    <span className="block text-[11px] sm:text-[14px] text-white font-bold font-mono tracking-tight mt-1">
                      {slide.stats.totalVolume}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[7.5px] sm:text-[9px] uppercase tracking-wider text-gray-400 font-mono leading-none">
                      LISTED
                    </span>
                    <span className="block text-[11px] sm:text-[14px] text-white font-bold font-mono tracking-tight mt-1">
                      {slide.stats.listed}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Content Column: 3 horizontal mini-thumbnails with rounded borders */}
            <div className="hidden lg:flex flex-col justify-center pl-4 border-l border-white/5 h-full flex-shrink-0">
              <span className="text-[8px] font-mono tracking-widest text-[#6FFF00]/60 uppercase mb-2 block text-center">
                MUESTRAS DE LA SERIE
              </span>
              <div className="flex items-center gap-2.5">
                {slide.thumbnails.map((thumbUrl, thumbIdx) => (
                  <div
                    key={thumbIdx}
                    className="h-16 w-16 xl:h-[72px] xl:w-[72px] rounded-[12px] overflow-hidden border border-white/10 bg-black/40 hover:scale-110 hover:border-[#6FFF00]/50 transition duration-300 relative group shadow-md"
                  >
                    <video
                      src={thumbUrl}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Indicator Dot Navigation centered at bottom */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentSlide === idx ? "w-5 h-1.5 bg-[#6FFF00]" : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Ir al slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>

      {/* Desktop Social Panel on the Side */}
      <div className="hidden xl:flex absolute top-[68px] right-8 z-20 flex-col gap-2">
        <a
          href="mailto:hello@orbis.nft"
          className="w-9 h-9 flex items-center justify-center liquid-glass rounded-[0.75rem] text-[#EFF4FF] hover:bg-white/10 hover:text-[#6FFF00] transition duration-300"
          title="Correo"
        >
          <Mail className="w-4 h-4" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center liquid-glass rounded-[0.75rem] text-[#EFF4FF] hover:bg-white/10 hover:text-[#6FFF00] transition duration-300"
          title="Twitter"
        >
          <Twitter className="w-4 h-4" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center liquid-glass rounded-[0.75rem] text-[#EFF4FF] hover:bg-white/10 hover:text-[#6FFF00] transition duration-300"
          title="Github"
        >
          <Github className="w-4 h-4" />
        </a>
      </div>

      {/* Footer metadata indicators / down button */}
      <div className="relative z-10 w-full max-w-[1831px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-3.5 flex items-center justify-between text-[9px] font-mono uppercase tracking-[0.2em] text-[#EFF4FF]/25 flex-shrink-0">
        <div>ORBIS LABS © 2026</div>
        <button
          onClick={() => onScrollToSection("about")}
          className="hover:text-[#6FFF00] transition cursor-pointer"
        >
          BAJAR_
        </button>
      </div>

    </section>
  );
}
