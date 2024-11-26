"use client";

import CurvedDottedBorder from "@/components/Backgrounds/CurvedCircle";
import Navbar from "@/components/Common/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center m-2">
      <div className="flex justify-between w-full">
        <div className="text-6xl text-black font-semibold cursor-pointer transition-all hover:translate-x-1 text-shadow-yellowish-green hover:text-shadow-red hover:translate-y-1">Evolv</div>
        <Navbar />
      </div>

      <div className="relative">
        <CurvedDottedBorder variant="orange" width={600} height={400} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-6xl font-medium text-center text-orange-950 mb-4">
            Think. Grow.
          </p>
          <span className="text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-50 text-shadow-red bg-opacity-70">
            Evolve.
          </span>
        </div>
      </div>
    </div>
  );
}