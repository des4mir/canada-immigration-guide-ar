import React from "react";

export default function AdLeaderboard() {
  return (
    <div className="w-full flex justify-center my-4 py-2 px-4">
      {/* 
        ========================================================================
        GOOGLE ADSENSE INSERTION POINT - LEADERBOARD
        Insert your <ins class="adsbygoogle" ...></ins> and push script here.
        Ensure you keep the fixed dimensions to prevent Cumulative Layout Shift (CLS).
        ========================================================================
      */}
      
      {/* Desktop/Tablet Ad Slot (728x90) */}
      <div 
        className="bg-gray-100 border border-gray-200 text-gray-400 flex items-center justify-center text-sm font-bold tracking-widest uppercase rounded hidden md:flex"
        style={{ width: '728px', height: '90px', minHeight: '90px' }}
        aria-hidden="true"
      >
        مساحة إعلانية (728x90)
      </div>

      {/* Mobile Ad Slot Fallback (320x50) to prevent horizontal scrolling */}
      <div 
        className="bg-gray-100 border border-gray-200 text-gray-400 flex items-center justify-center text-sm font-bold tracking-widest uppercase rounded md:hidden"
        style={{ width: '320px', height: '50px', minHeight: '50px' }}
        aria-hidden="true"
      >
        مساحة إعلانية (320x50)
      </div>
    </div>
  );
}
