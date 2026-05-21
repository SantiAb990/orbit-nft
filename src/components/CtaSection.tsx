import React, { useState } from "react";
import { Mail, Twitter, Github, Send, Loader2, CheckCircle2, ShieldAlert, Radio } from "lucide-react";

export default function CtaSection() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("Adquisición de Objeto");
  const [mensaje, setMensaje] = useState("");
  const [transmissionState, setTransmissionState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [txId, setTxId] = useState("");

  const handleSendSignal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !email || !mensaje) {
      setTransmissionState("error");
      return;
    }

    setTransmissionState("sending");

    // Micro transmission delay (simulated cyberwave transceival)
    setTimeout(() => {
      const generatedTx = "TX_" + Math.random().toString(36).substring(2, 10).toUpperCase() + "_ORBIS";
      setTxId(generatedTx);
      setTransmissionState("success");
      
      // Clear inputs
      setNombre("");
      setEmail("");
      setMensaje("");
    }, 2200);
  };

  return (
    <section
      id="contact"
      className="relative w-full h-full min-h-0 flex items-center bg-[#010828] overflow-hidden px-6 sm:px-12 py-10 sm:py-0"
    >
      {/* Absolute video layer covering background of section */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-40 xl:opacity-40"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#010828] via-transparent to-transparent opacity-80" />
      </div>

      {/* Main Layout Row: Matches exact design theme with Left: socials + Mail button, Right: headings */}
      <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-6 h-full py-4">
        
        {/* Left column: Horizontal modular social container */}
        <div className="flex flex-col self-start md:self-end">
          <div className="liquid-glass rounded-[0.75rem] flex items-center p-1 border border-white/5 bg-white/[0.01]">
            <button
              onClick={() => {
                setTransmissionState("idle");
                setShowContactModal(true);
              }}
              className="w-10 h-10 flex items-center justify-center border-r border-white/10 text-[#EFF4FF] hover:text-[#6FFF00] transition duration-300 cursor-pointer"
              title="Abrir Terminal de Comunicación"
            >
              <Mail className="w-4 h-4 text-[#6FFF00] animate-pulse" />
            </button>
            
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border-r border-white/10 text-[#EFF4FF] hover:text-[#6FFF00] transition duration-300"
              title="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-[#EFF4FF] hover:text-[#6FFF00] transition duration-300"
              title="Github"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right column: Overlaid Condiment text and Anton typography heading with custom Interactive Trigger */}
        <button 
          onClick={() => {
            setTransmissionState("idle");
            setShowContactModal(true);
          }}
          className="relative text-center md:text-right md:mr-[10%] select-none pb-2 self-end group cursor-pointer border-none bg-transparent outline-none flex flex-col items-center md:items-end"
        >
          {/* Cursive subtitle positioned relative to block */}
          <span
            className="absolute -top-7 left-1/2 md:right-0 md:left-auto transform -translate-x-1/2 md:translate-x-0 font-condiment text-[24px] sm:text-[32px] text-[#6FFF00] mix-blend-exclusion -rotate-3 transition duration-350 group-hover:scale-110"
          >
            Ve más allá
          </span>

          <h2 className="font-grotesk text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px] uppercase leading-tight tracking-tight text-[#EFF4FF] transition duration-300 group-hover:text-[#6FFF00] text-center md:text-right">
            ÚNETE A NOSOTROS. REVELA LO OCULTO.<br />
            DEFINE EL MAÑANA. <span className="text-[#6FFF00] group-hover:underline">SIGUE LA SEÑAL_</span>
          </h2>
        </button>

      </div>

      {/* Cybernetic Contact Terminal Dialog Panel */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#010828]/95 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#010828] border border-white/10 rounded-[28px] p-6 shadow-2xl overflow-hidden">
            
            {/* Visual Particle Lights */}
            <div className="absolute top-[-30%] right-[-30%] w-[350px] h-[350px] rounded-full bg-[#6FFF00]/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-30%] left-[-30%] w-[350px] h-[350px] rounded-full bg-purple-500/15 blur-[100px] pointer-events-none" />

            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <Radio className="w-5 h-5 text-[#6FFF00] animate-pulse" />
                <div>
                  <h3 className="font-grotesk text-[18px] uppercase tracking-wider text-[#EFF4FF]">
                    Terminal de Enlace Orbis
                  </h3>
                  <p className="font-mono text-[9px] text-[#EFF4FF]/50 uppercase tracking-widest">
                    Transmisor de Ondas Espaciales Activo
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowContactModal(false)}
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#EFF4FF] hover:text-[#6FFF00] hover:bg-white/10 transition cursor-pointer font-bold text-sm"
              >
                ✕
              </button>
            </div>

            {/* Display Body States */}
            {transmissionState === "sending" ? (
              <div className="py-12 flex flex-col items-center justify-center gap-4 text-center">
                <Loader2 className="w-12 h-12 text-[#6FFF00] animate-spin" />
                <div>
                  <h4 className="font-grotesk text-[16px] uppercase tracking-widest text-[#EFF4FF]">
                    Transmitiendo Señal
                  </h4>
                  <p className="font-mono text-[10px] text-[#EFF4FF]/60 uppercase tracking-widest mt-1 animate-pulse">
                    Enrutando a través de los nodos de Orbis...
                  </p>
                </div>
              </div>
            ) : transmissionState === "success" ? (
              <div className="py-8 flex flex-col items-center justify-center gap-4 text-center">
                <CheckCircle2 className="w-16 h-16 text-[#6FFF00] animate-bounce" />
                <div>
                  <h4 className="font-grotesk text-[20px] uppercase tracking-wider text-[#EFF4FF]">
                    Transmisión Exitosa
                  </h4>
                  <p className="font-mono text-[11px] text-[#6FFF00] uppercase tracking-widest mt-1">
                    CARTA DE COMUNICACIÓN FIJADA EN LA RED
                  </p>
                </div>
                <div className="w-full bg-white/[0.02] border border-[#6FFF00]/10 p-3 rounded-xl font-mono text-[8.5px] uppercase text-[#EFF4FF]/85 flex flex-col gap-1 items-start mt-2">
                  <span>REGISTRO: 200_OK</span>
                  <span>ID TRASMISOR: {txId}</span>
                  <span>SEGMENTO: COORD_TRANSMISION_ORBIS_SECURE</span>
                </div>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#b724ff] to-[#7c3aed] text-white font-grotesk text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition w-full cursor-pointer"
                >
                  Confirmar y Salir
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendSignal} className="flex flex-col gap-3">
                {transmissionState === "error" && (
                  <div className="p-3 bg-red-950/40 border border-red-500/20 text-red-400 font-mono text-[9px] uppercase tracking-wider rounded-xl flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span>Error: Todos los campos son requeridos para la codificación.</span>
                  </div>
                )}

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[9px] text-[#EFF4FF]/50 uppercase tracking-widest">
                    Identificativo (Nombre) *
                  </label>
                  <input
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="E.g., Comandante Solis"
                    className="w-full bg-[#010828] border border-white/10 rounded-xl px-4 py-2 font-mono text-xs text-[#EFF4FF] focus:outline-none focus:border-[#6FFF00] placeholder-white/20 uppercase"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[9px] text-[#EFF4FF]/50 uppercase tracking-widest">
                    Canal Receptor (Email) *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E.g., solis@node.net"
                    className="w-full bg-[#010828] border border-white/10 rounded-xl px-4 py-2 font-mono text-xs text-[#EFF4FF] focus:outline-none focus:border-[#6FFF00] placeholder-white/20 font-sans"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[9px] text-[#EFF4FF]/50 uppercase tracking-widest">
                    Asunto de la Señal
                  </label>
                  <select
                    value={asunto}
                    onChange={(e) => setAsunto(e.target.value)}
                    className="w-full bg-[#010828] border border-white/10 rounded-xl px-4 py-2.5 font-mono text-xs text-[#EFF4FF] focus:outline-none focus:border-[#6FFF00] uppercase"
                  >
                    <option value="Adquisición de Objeto">Adquisición de Objeto</option>
                    <option value="Sincronización de Nodo">Sincronización de Nodo</option>
                    <option value="Soporte Interestelar">Soporte Interestelar</option>
                    <option value="Alineación Creativa">Alineación Creativa</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[9px] text-[#EFF4FF]/50 uppercase tracking-widest">
                    Contenido del Mensaje *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    placeholder="Escribe tu mensaje o propuesta espacial..."
                    className="w-full bg-[#010828] border border-white/10 rounded-xl px-4 py-2 font-mono text-xs text-[#EFF4FF] focus:outline-none focus:border-[#6FFF00] placeholder-white/20 uppercase resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#b724ff] to-[#7c3aed] text-white font-grotesk text-xs uppercase tracking-widest hover:brightness-110 active:scale-98 transition flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-500/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmitir Mensaje</span>
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
