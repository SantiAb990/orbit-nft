import { X, ShieldAlert, Check, RefreshCw, Cpu, Disc } from "lucide-react";
import { useState, useEffect } from "react";
import { NFTItem } from "../types";

interface DetailModalProps {
  nft: NFTItem | null;
  onClose: () => void;
}

export default function DetailModal({ nft, onClose }: DetailModalProps) {
  const [purchaseStep, setPurchaseStep] = useState<"idle" | "connecting" | "transceiving" | "success">("idle");
  const [txHash, setTxHash] = useState("");

  useEffect(() => {
    if (!nft) {
      setPurchaseStep("idle");
    }
  }, [nft]);

  if (!nft) return null;

  const handleTransceive = () => {
    setPurchaseStep("connecting");
    setTimeout(() => {
      setPurchaseStep("transceiving");
      // Pick a random hash simulation
      const mockHash = "0x" + Array.from({ length: 40 }, () => 
        Math.floor(Math.random() * 16).toString(16)
      ).join("") + "...f7b9";
      setTxHash(mockHash);
      setTimeout(() => {
        setPurchaseStep("success");
      }, 2500);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#010828]/95 backdrop-blur-md">
      {/* Background blur clicks */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* Main Glass Popover Window */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto liquid-glass rounded-[32px] p-6 md:p-8 border border-white/10 z-10 flex flex-col md:flex-row gap-8 shadow-2xl animate-scale-up">
        
        {/* Left Side: Large video display */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="relative aspect-square rounded-[24px] overflow-hidden bg-[#010828] border border-white/5">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={nft.videoUrl}
              autoPlay
              loop
              muted
              playsInline
            />
            
            {/* Quick specifications */}
            <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-between">
              <div>
                <span className="block text-[10px] uppercase text-[#EFF4FF]/50 tracking-widest leading-none mb-1">
                  ESPECIFICACIÓN DIMENSIONAL
                </span>
                <span className="font-grotesk text-[14px] sm:text-[18px] uppercase text-[#6FFF00]">
                  {nft.title}
                </span>
              </div>
              <div className="text-right">
                <span className="block text-[10px] uppercase text-[#EFF4FF]/50 tracking-widest leading-none mb-1">
                  PROCEDENCIA
                </span>
                <span className="font-mono text-[11px] uppercase text-[#EFF4FF]">
                  NODO.SEGURO
                </span>
              </div>
            </div>
          </div>

          {/* Key data stats row */}
          <div className="grid grid-cols-3 gap-3 font-mono text-[10px] md:text-[11px] text-center">
            <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="block text-[#EFF4FF]/40 mb-1 uppercase">Distancia</span>
              <span className="block font-medium text-[#EFF4FF]">{nft.stats.distance}</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="block text-[#EFF4FF]/40 mb-1 uppercase">Estructura</span>
              <span className="block font-medium text-[#EFF4FF]">{nft.stats.form}</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="block text-[#EFF4FF]/40 mb-1 uppercase">Silencio</span>
              <span className="block font-medium text-[#6FFF00]">{nft.stats.silence}</span>
            </div>
          </div>
        </div>

        {/* Right Side: NFT details & transactional interactions */}
        <div className="flex-1 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            
            {/* Close trigger and titles */}
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6FFF00]" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#6FFF00]/90 font-mono">
                    {nft.creator}
                  </span>
                </div>
                <h3 className="font-grotesk text-[28px] sm:text-[36px] uppercase leading-none tracking-tight text-[#EFF4FF]">
                  {nft.title}
                </h3>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full liquid-glass text-[#EFF4FF]/80 hover:text-[#6FFF00] hover:scale-105 active:scale-95 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description list */}
            <p className="font-mono text-[13px] text-[#EFF4FF]/80 leading-relaxed uppercase pt-2">
              {nft.description}
            </p>

            <div className="border-t border-b border-white/10 py-4 my-2 flex items-center justify-between">
              <div>
                <span className="block text-[11px] uppercase text-[#EFF4FF]/50 font-mono tracking-widest mb-1">
                  EVALUACIÓN DE RAREZA
                </span>
                <span className="font-mono text-lg text-[#EFF4FF] font-semibold">
                  {nft.rarityScore} / 10.0
                </span>
              </div>
              <div className="text-right">
                <span className="block text-[11px] uppercase text-[#EFF4FF]/50 font-mono tracking-widest mb-1">
                  PRECIO DE ADQUISICIÓN
                </span>
                <span className="font-grotesk text-2xl text-[#6FFF00]">
                  {nft.price}
                </span>
              </div>
            </div>

          </div>

          {/* Interactive State Handler Block */}
          <div className="liquid-glass rounded-2xl p-5 border border-white/5 flex flex-col gap-4 bg-white/[0.01]">
            
            {purchaseStep === "idle" && (
              <div className="flex flex-col gap-3">
                <p className="text-[10px] font-mono uppercase text-[#EFF4FF]/50 leading-normal">
                  LA ADQUISICIÓN DE ESTE OBJETO ESPACIAL ASIGNA UN INVARIANTE EXCLUSIVO A LA BILLETERA ESPECIFICADA. ¿PROCEDER CON EL PROTOCOLO DE TRANSMISIÓN?
                </p>
                <button
                  onClick={handleTransceive}
                  className="w-full py-4 rounded-xl bg-gradient-to-br from-[#b724ff] to-[#7c3aed] text-white font-grotesk text-[14px] uppercase tracking-widest shadow-xl shadow-purple-500/25 hover:opacity-95 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  Iniciar Transmisión
                </button>
              </div>
            )}

            {purchaseStep === "connecting" && (
              <div className="flex flex-col items-center justify-center py-6 text-center gap-3">
                <RefreshCw className="w-8 h-8 text-[#6FFF00] animate-spin" />
                <div>
                  <h4 className="font-grotesk text-[14px] uppercase text-[#EFF4FF] tracking-widest">
                    Solicitando conexión
                  </h4>
                  <p className="text-[10px] font-mono text-[#EFF4FF]/60 uppercase tracking-widest mt-1">
                    Autenticando seguridad del nodo...
                  </p>
                </div>
              </div>
            )}

            {purchaseStep === "transceiving" && (
              <div className="flex flex-col items-center justify-center py-6 text-center gap-3">
                <Disc className="w-8 h-8 text-purple-400 animate-spin" />
                <div>
                  <h4 className="font-grotesk text-[14px] uppercase text-purple-400 tracking-widest">
                    TRANSMITIENDO A LA RED
                  </h4>
                  <p className="text-[10px] font-mono text-purple-400/70 uppercase tracking-widest mt-1">
                    PENDIENTE: {txHash}
                  </p>
                </div>
              </div>
            )}

            {purchaseStep === "success" && (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-[#6FFF00]">
                  <div className="w-8 h-8 rounded-full bg-[#6FFF00]/10 border border-[#6FFF00]/20 flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-grotesk text-[14px] uppercase tracking-widest">
                      ADQUIRIDO CON ÉXITO
                    </h4>
                    <p className="text-[10px] font-mono uppercase text-[#EFF4FF]/70">
                      Objeto fijado más allá del tiempo y del espacio.
                    </p>
                  </div>
                </div>
                <div className="bg-[#010828] p-3 rounded-xl border border-[#6FFF00]/10 font-mono text-[9px] uppercase tracking-wide text-[#6FFF00]/85 break-all">
                  TRANSACCIÓN: {txHash}
                </div>
                <button
                  onClick={onClose}
                  className="w-full py-2.5 rounded-xl liquid-glass text-center font-grotesk text-[12px] uppercase text-[#EFF4FF] hover:text-[#6FFF00] transition cursor-pointer"
                >
                  Cerrar Terminal
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
