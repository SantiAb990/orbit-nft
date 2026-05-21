import { useState, useMemo } from "react";
import { ArrowRight, Filter, Users, X, Award, Coins, Compass } from "lucide-react";
import { NFTItem } from "../types";

interface CollectionSectionProps {
  onSelectNFT: (nft: NFTItem) => void;
}

// Extended high-fidelity NFT objects list with different creators, rarity scores, and prices
const nfts: NFTItem[] = [
  {
    id: "1",
    title: "ANILLO ORBITAL",
    rarityScore: 8.7,
    videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4",
    creator: "Creador Orbis",
    price: "1.45 ETH",
    description: "Un sistema orbital perfectamente equilibrado suspendido en el silencio cósmico. Registra vectores de de aceleración tridimensionales.",
    stats: {
      distance: "145M Años Luz",
      form: "Cápsula Esférica",
      silence: "99.8% Absoluto",
    },
  },
  {
    id: "2",
    title: "ESTRELLA NÉBULA",
    rarityScore: 9.0,
    videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4",
    creator: "Estudio Stellar",
    price: "2.10 ETH",
    description: "Un núcleo estelar de luz autosostenido que captura partículas de energía cuántica en rangos del espacio profundo.",
    stats: {
      distance: "210M Años Luz",
      form: "Filamento Plasma",
      silence: "100% Absoluto",
    },
  },
  {
    id: "3",
    title: "NÚCLEO ESPACIAL",
    rarityScore: 8.2,
    videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4",
    creator: "Creador Orbis",
    price: "0.95 ETH",
    description: "Un motor digital aislado en el espacio. Su volumen oscuro representa densidades extremas de vacío absoluto.",
    stats: {
      distance: "82M Años Luz",
      form: "Monolito Cúbico",
      silence: "94.2% Absoluto",
    },
  },
  {
    id: "4",
    title: "SINGULARIDAD OSCURA",
    rarityScore: 9.8,
    videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4",
    creator: "Laboratorio del Vacío",
    price: "3.50 ETH",
    description: "Una anomalía de masa condensada que absorbe por completo el espectro electromagnético circumcircundante.",
    stats: {
      distance: "350M Años Luz",
      form: "Vórtice Colapsado",
      silence: "100% Absoluto",
    },
  },
  {
    id: "5",
    title: "PORTAL DE AURORA",
    rarityScore: 7.9,
    videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4",
    creator: "Estudio Stellar",
    price: "0.80 ETH",
    description: "Fluctuaciones ionizadas de colores verdosos fijadas en un campo magnético perenne. Actúa como canal de enlace secundario.",
    stats: {
      distance: "56M Años Luz",
      form: "Arco Magnético",
      silence: "85.4% Absoluto",
    },
  },
  {
    id: "6",
    title: "VECTOR DE GRAVEDAD",
    rarityScore: 9.4,
    videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4",
    creator: "Laboratorio del Vacío",
    price: "2.80 ETH",
    description: "Curvatura geométrica focalizada que desvía fotones individuales. Demuestra una distorsión cuántica reproducible.",
    stats: {
      distance: "290M Años Luz",
      form: "Geodésica Cerrada",
      silence: "99.9% Absoluto",
    },
  }
];

// Rich creator profiles
const creators = [
  {
    name: "Creador Orbis",
    handle: "@orbis.labs",
    bio: "Colectivo pionero en ingeniería y síntesis de sistemas orbitales autocompensados y modelado de trans-ondas interestelares.",
    node: "NODO_ALPHA_01",
    avgRarity: "8.45",
    worksCount: 2,
    badge: "Oficial Orbis"
  },
  {
    name: "Estudio Stellar",
    handle: "@stellar.studio",
    bio: "Pioneros creativos en la manipulación termodinámica de núcleos de hidrógeno estelar fijados en filamentos estables.",
    node: "NODO_STELLAR_99",
    avgRarity: "8.45",
    worksCount: 2,
    badge: "Consorcio Estelar"
  },
  {
    name: "Laboratorio del Vacío",
    handle: "@void.lab",
    bio: "Grupo independiente de investigación física que condensa anomalías gravitacionales complejas y matrices de vacío absoluto.",
    node: "NODO_VOID_CORE",
    avgRarity: "9.60",
    worksCount: 2,
    badge: "Investigador Libre"
  }
];

export default function CollectionSection({ onSelectNFT }: CollectionSectionProps) {
  // Sort states: 'rarity-desc' | 'price-desc' | 'price-asc'
  const [sortBy, setSortBy] = useState<"rarity-desc" | "price-desc" | "price-asc">("rarity-desc");
  const [showCreatorsModal, setShowCreatorsModal] = useState(false);

  // Sorting logic Memo
  const sortedNfts = useMemo(() => {
    return [...nfts].sort((a, b) => {
      if (sortBy === "rarity-desc") {
        return b.rarityScore - a.rarityScore;
      }
      
      // Parse float prices (e.g. "1.45 ETH" -> 1.45)
      const priceA = parseFloat(a.price.replace(" ETH", ""));
      const priceB = parseFloat(b.price.replace(" ETH", ""));
      
      if (sortBy === "price-desc") {
        return priceB - priceA;
      } else {
        return priceA - priceB;
      }
    });
  }, [sortBy]);

  return (
    <section
      id="gallery"
      className="relative w-full h-full bg-[#010828] p-6 sm:p-10 xl:p-10 overflow-y-auto"
    >
      <div className="relative z-10 w-full flex flex-col gap-8">
        
        {/* Header Row */}
        <div className="flex justify-between items-end pb-6 border-b border-white/5">
          {/* Left Title with exact margin indent and lowercase condiment word */}
          <div className="relative">
            <h2 className="font-grotesk text-[32px] sm:text-[36px] xl:text-[36px] leading-[1.0] text-[#EFF4FF] uppercase tracking-tight">
              Colección de
              <br />
              <span className="block ml-12">
                <span className="font-condiment text-[#6FFF00] lowercase mr-2 text-[38px]">
                  objetos
                </span>
                espaciales
              </span>
            </h2>
          </div>

          {/* Right SEE ALL CREATORS button */}
          <button 
            onClick={() => setShowCreatorsModal(true)}
            className="group flex flex-col items-end cursor-pointer text-[#EFF4FF] transition"
          >
            <div className="flex items-center gap-2">
              <span className="font-grotesk text-[32px] sm:text-[36px] xl:text-[36px] uppercase leading-none group-hover:text-[#6FFF00] transition duration-300">
                Ver
              </span>
              <div className="flex flex-col font-grotesk text-[11px] sm:text-[14px] xl:text-[14px] leading-none text-left">
                <span>TODOS</span>
                <span>CREADORES</span>
              </div>
            </div>
            {/* Dynamic green bar underneath block */}
            <div className="w-full h-1.5 bg-[#6FFF00] mt-1 group-hover:bg-white transition duration-300 rounded-sm" />
          </button>
        </div>

        {/* Sorting Controls & Stats Panel */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center bg-white/[0.02] border border-white/5 p-4 rounded-[20px] backdrop-blur-sm z-10">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#6FFF00]" />
            <span className="font-mono text-[10px] tracking-widest text-[#EFF4FF]/60 uppercase">
              FILTRAR Y ORDENAR //
            </span>
          </div>

          {/* Inline Buttons to toggle search classification sorting */}
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            <button
              onClick={() => setSortBy("rarity-desc")}
              className={`flex-1 sm:flex-none font-mono text-[9px] uppercase tracking-wider px-3 py-1.5 rounded-lg border transition duration-300 ${
                sortBy === "rarity-desc"
                  ? "bg-[#6FFF00]/10 border-[#6FFF00] text-[#6FFF00]"
                  : "bg-transparent border-white/15 text-[#EFF4FF]/60 hover:text-[#EFF4FF] hover:border-white/30"
              }`}
            >
              ★ Rareza (Mayor)
            </button>
            <button
              onClick={() => setSortBy("price-desc")}
              className={`flex-1 sm:flex-none font-mono text-[9px] uppercase tracking-wider px-3 py-1.5 rounded-lg border transition duration-300 ${
                sortBy === "price-desc"
                  ? "bg-[#6FFF00]/10 border-[#6FFF00] text-[#6FFF00]"
                  : "bg-transparent border-white/15 text-[#EFF4FF]/60 hover:text-[#EFF4FF] hover:border-white/30"
              }`}
            >
              ♦ Precio: Caro → Barato
            </button>
            <button
              onClick={() => setSortBy("price-asc")}
              className={`flex-1 sm:flex-none font-mono text-[9px] uppercase tracking-wider px-3 py-1.5 rounded-lg border transition duration-300 ${
                sortBy === "price-asc"
                  ? "bg-[#6FFF00]/10 border-[#6FFF00] text-[#6FFF00]"
                  : "bg-transparent border-white/15 text-[#EFF4FF]/60 hover:text-[#EFF4FF] hover:border-white/30"
              }`}
            >
              ♦ Precio: Barato → Caro
            </button>
          </div>
        </div>

        {/* NFT Cards Grid: Matches exact card structure parameters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          {sortedNfts.map((nft) => (
            <div
              key={nft.id}
              onClick={() => onSelectNFT(nft)}
              className="liquid-glass rounded-[24px] p-4 flex-1 hover:bg-white/[0.04] transition duration-300 cursor-pointer group"
            >
              {/* Square visual backdrop wrapper */}
              <div className="relative w-full aspect-square rounded-[18px] overflow-hidden bg-black/40">
                <video
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={nft.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                
                {/* Visual Glass Overlay Badge for Space Object Name */}
                <div className="absolute bottom-3 left-3 z-10 py-1 px-2.5 rounded-lg text-[10px] font-mono tracking-wider bg-black/50 backdrop-blur-md border border-white/10 uppercase">
                  {nft.title}
                </div>

                {/* Creator overlay badge */}
                <div className="absolute top-3 right-3 z-10 py-1 px-2.5 rounded-lg text-[8px] font-mono tracking-wider bg-black/60 backdrop-blur-sm border border-white/5 text-[#EFF4FF]/70 uppercase">
                  {nft.creator}
                </div>

                <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md border border-white/5 font-mono text-[9px] text-[#6FFF00] tracking-widest uppercase font-semibold">
                  {nft.price}
                </div>
              </div>

              {/* Sophisticated Score and action panel */}
              <div className="liquid-glass rounded-[16px] px-3 py-2 mt-3 flex justify-between items-center border border-white/5 bg-white/[0.01]">
                <div>
                  <p className="text-[9px] opacity-70 font-mono tracking-wider">NIVEL DE RAREZA:</p>
                  <p className="text-[14px] font-grotesk text-[#EFF4FF]">
                    {nft.rarityScore.toFixed(1)} / 10
                  </p>
                </div>
                {/* Purple gradient arrow button */}
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-115 transition duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Immersive Cybernetic Creators Modal */}
      {showCreatorsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#010828]/95 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#010828] border border-white/10 rounded-[32px] p-6 md:p-8 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
            
            {/* Ambient Background Lights */}
            <div className="absolute top-[-20%] left-[-20%] w-[300px] h-[300px] rounded-full bg-[#6FFF00]/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-20%] w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-[80px] pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6 relative z-10-10">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-[#6FFF00]" />
                <div>
                  <h3 className="font-grotesk text-2xl uppercase tracking-wider text-[#EFF4FF]">
                    Creadores de Orbis
                  </h3>
                  <p className="font-mono text-[10px] text-[#EFF4FF]/50 uppercase tracking-widest mt-0.5">
                    Colectivos interestelares de síntesis estelar
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowCreatorsModal(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#EFF4FF] hover:text-[#6FFF00] hover:bg-white/10 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Creators List Space */}
            <div className="overflow-y-auto pr-2 flex-1 flex flex-col gap-4 relative z-10">
              {creators.map((c) => (
                <div 
                  key={c.name} 
                  className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition duration-300 flex flex-col gap-4"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-white/5 pb-3">
                    <div>
                      <h4 className="font-grotesk text-lg uppercase text-[#EFF4FF] tracking-wide flex items-center gap-2">
                        {c.name}
                        <span className="text-[9px] font-mono py-0.5 px-2 rounded bg-[#6FFF00]/10 text-[#6FFF00] border border-[#6FFF00]/20 uppercase">
                          {c.badge}
                        </span>
                      </h4>
                      <p className="font-mono text-[11px] text-[#6FFF00]/80 lowercase mt-0.5">
                        {c.handle}
                      </p>
                    </div>
                    <div className="font-mono text-[10px] text-[#EFF4FF]/40 bg-white/5 py-1 px-3 rounded-lg border border-white/5 uppercase">
                      SIGNAL: {c.node}
                    </div>
                  </div>

                  <p className="font-mono text-[12px] text-[#EFF4FF]/85 leading-relaxed uppercase">
                    {c.bio}
                  </p>

                  <div className="grid grid-cols-3 gap-2 pt-1">
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 text-center">
                      <p className="text-[9px] text-[#EFF4FF]/40 font-mono uppercase mb-0.5">Rareza Promedio</p>
                      <p className="text-sm font-grotesk text-[#6FFF00] flex items-center justify-center gap-1">
                        <Award className="w-3.5 h-3.5 inline text-[#6FFF00]" /> {c.avgRarity}
                      </p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 text-center">
                      <p className="text-[9px] text-[#EFF4FF]/40 font-mono uppercase mb-0.5">Obras en Órbita</p>
                      <p className="text-sm font-grotesk text-[#EFF4FF] flex items-center justify-center gap-1">
                        <Compass className="w-3.5 h-3.5 inline text-purple-400" /> {c.worksCount}
                      </p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 text-center">
                      <p className="text-[9px] text-[#EFF4FF]/40 font-mono uppercase mb-0.5">Estado</p>
                      <p className="text-[11px] font-mono text-[#6FFF00] uppercase font-semibold flex items-center justify-center gap-1">
                        <span className="w-1.5 h-1.5 bg-[#6FFF00] rounded-full animate-pulse" /> ACTIVO
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/5 pt-4 mt-6 text-center z-10">
              <button
                onClick={() => setShowCreatorsModal(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#b724ff] to-[#7c3aed] text-white font-grotesk text-sm uppercase tracking-widest hover:brightness-110 active:scale-98 transition shadow-lg shadow-purple-500/10 cursor-pointer"
              >
                Cerrar Transmisor
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
