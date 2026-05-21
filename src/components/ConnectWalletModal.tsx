import { X, CheckCircle, Wallet, Cpu, Loader2, Sparkles, Orbit } from "lucide-react";
import { useState } from "react";

interface ConnectWalletModalProps {
  onClose: () => void;
}

export default function ConnectWalletModal({ onClose }: ConnectWalletModalProps) {
  const [connectingId, setConnectingId] = useState<string | null>(null);
  const [connectedName, setConnectedName] = useState<string | null>(null);

  const wallets = [
    { id: "metamask", name: "MetaMask", logoCode: "🦊" },
    { id: "coinbase", name: "Coinbase Wallet", logoCode: "🛡️" },
    { id: "orbis", name: "Orbis Vault", logoCode: "🌌" },
  ];

  const handleWalletSelect = (walletName: string, id: string) => {
    setConnectingId(id);
    setTimeout(() => {
      setConnectingId(null);
      setConnectedName(walletName);
      setTimeout(() => {
        onClose();
      }, 1500);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#010828]/95 backdrop-blur-md">
      {/* Background click to dismiss */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* Main popover panel */}
      <div className="relative w-full max-w-md liquid-glass rounded-[32px] p-6 sm:p-8 border border-white/10 z-10 shadow-3xl flex flex-col gap-6 animate-scale-up">
        
        {/* Header row */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <Orbit className="w-5 h-5 text-[#6FFF00] animate-spin [animation-duration:12s]" />
            <span className="font-grotesk text-[14px] uppercase text-[#6FFF00] tracking-widest">
              Asegurando Nodo
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full liquid-glass text-[#EFF4FF]/80 hover:text-[#6FFF00] active:scale-95 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {connectedName ? (
          /* Connection Success Screen */
          <div className="flex flex-col items-center justify-center text-center py-8 gap-4 animate-fade-in">
            <CheckCircle className="w-12 h-12 text-[#6FFF00] animate-bounce" />
            <div>
              <h3 className="font-grotesk text-[22px] uppercase tracking-wider text-[#EFF4FF]">
                Conectado
              </h3>
              <p className="font-mono text-[11px] text-[#EFF4FF]/60 uppercase tracking-widest mt-1">
                Autorizado mediante {connectedName}
              </p>
            </div>
            <div className="w-full bg-[#010828] p-3 rounded-xl border border-[#6FFF00]/10 font-mono text-[9px] uppercase tracking-wide text-[#6FFF00]/80">
              ESTADO: SEGURO.SESIÓN_ACEPTADA
            </div>
          </div>
        ) : (
          /* Initial wallet screen */
          <div className="flex flex-col gap-4">
            
            <div className="mb-2">
              <h3 className="font-grotesk text-[24px] uppercase text-[#EFF4FF]">
                Conectar Billetera
              </h3>
              <p className="font-mono text-[11px] text-[#EFF4FF]/60 uppercase tracking-wider mt-1">
                Establece claves seguras de criptosistema para adquirir objetos espaciales.
              </p>
            </div>

            {/* List wallets */}
            <div className="flex flex-col gap-3">
              {wallets.map((w) => (
                <button
                  key={w.id}
                  disabled={connectingId !== null}
                  onClick={() => handleWalletSelect(w.name, w.id)}
                  className="w-full relative flex items-center justify-between p-4 rounded-2xl liquid-glass border border-white/5 bg-white/[0.01] hover:bg-white/[0.05] disabled:opacity-50 text-left transition group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl filter saturate-75 group-hover:scale-110 transition">
                      {w.logoCode}
                    </span>
                    <span className="font-grotesk text-[14px] uppercase text-[#EFF4FF] tracking-wider group-hover:text-[#6FFF00] transition">
                      {w.name}
                    </span>
                  </div>

                  <div>
                    {connectingId === w.id ? (
                      <Loader2 className="w-5 h-5 text-[#6FFF00] animate-spin" />
                    ) : (
                      <span className="text-[9px] font-mono tracking-widest text-[#EFF4FF]/30 group-hover:text-[#6FFF00]/50 transition">
                        SELECCIONAR_
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <p className="font-mono text-[9px] text-[#EFF4FF]/40 uppercase text-center mt-2 leading-relaxed">
              Al conectarte, aceptas los términos de acuerdo de nodos criptográficos seguros.
            </p>

          </div>
        )}

      </div>
    </div>
  );
}
