'use client';

import dynamic from "next/dynamic";

const Dither = dynamic(() => import("@/components/Dither"), { ssr: false });

export default function DitherBackground() {
  return (
    <div className="fixed inset-0 -z-10 opacity-30 pointer-events-none">
      <Dither
        waveColor={[0.5, 0.5, 0.5]}
        disableAnimation={false}
        enableMouseInteraction={true}
        mouseRadius={0.3}
        colorNum={4}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.05}
      />
    </div>
  );
}
