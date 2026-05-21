import { useState } from "react";

export default function AboutSection() {
  const introText =
    "Un objeto digital fijo más allá del tiempo y del espacio. Una exploración de la distancia, la forma y el silencio cósmico";

  return (
    <section
      id="about"
      className="relative w-full h-full xl:min-h-0 flex flex-col justify-between xl:justify-start overflow-hidden bg-[#010828] p-6 sm:p-10 xl:p-10"
    >
      {/* Background Video with thematic opacity matching design */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60 xl:opacity-60"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-[#010828]/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010828]/60 via-transparent to-[#010828]/80" />
      </div>

      {/* Main Container - Relative layout */}
      <div className="relative z-10 w-full flex flex-col justify-between h-full gap-8 xl:gap-6">
        
        {/* Header Block: Heading + Overlaid Cursive Accent */}
        <div className="flex flex-col gap-6 pt-4">
          <div className="relative inline-block select-none pb-4 self-start">
            <h2 className="font-grotesk text-[38px] sm:text-[48px] xl:text-[48px] uppercase leading-tight text-[#EFF4FF] tracking-tight">
              ¡Hola!
              <br />
              Soy orbis
            </h2>
            
            {/* Overlaid cursive Accent text positioned exactly as design HTML */}
            <div
              className="absolute right-[-20px] bottom-[-10px] sm:right-[-32px] sm:bottom-[-16px] xl:right-[-32px] xl:bottom-[-16px] z-20
                         font-condiment text-[38px] sm:text-[42px] xl:text-[42px] text-[#6FFF00]
                         -rotate-3 mix-blend-exclusion opacity-90 select-none whitespace-nowrap pointer-events-none"
            >
              Orbis
            </div>
          </div>

          {/* Key Intro Description Paragraph */}
          <div className="w-full max-w-[280px] xl:max-w-[240px]">
            <p className="font-mono text-[13px] sm:text-[14px] xl:text-[12px] leading-relaxed uppercase text-[#EFF4FF] opacity-90 tracking-wide">
              {introText}.
            </p>
          </div>
        </div>

        {/* Bottom Row - Decorative ambient text block */}
        <div className="flex flex-col gap-4 mt-6 xl:mt-8 select-none">
          <p className="font-mono text-[11px] sm:text-[12px] xl:text-[11px] uppercase tracking-wide 
                        text-[#EFF4FF]/10 leading-relaxed max-w-sm">
            {introText}
          </p>
          <p className="hidden sm:block font-mono text-[11px] sm:text-[12px] xl:text-[11px] uppercase tracking-wide 
                        text-[#EFF4FF]/10 leading-relaxed max-w-sm">
            {introText}
          </p>
        </div>

        {/* Decorative metadata indicator */}
        <div className="flex justify-between items-center text-[9px] font-mono tracking-[0.2em] text-[#EFF4FF]/25 border-t border-white/5 pt-4 mt-4">
          <span>COORD: // ALPHA.ORBIS</span>
          <span>TRANSMISIÓN: ACTIVA</span>
        </div>

      </div>
    </section>
  );
}
