import React from "react";

export default function AdRectangle() {
  return (
    <div className="w-full flex justify-center my-8 px-4">
      {/* 
        ========================================================================
        GOOGLE ADSENSE INSERTION POINT - MEDIUM RECTANGLE
        Insert your <ins class="adsbygoogle" ...></ins> and push script here.
        Ensure you keep the fixed dimensions to prevent Cumulative Layout Shift (CLS).
        ========================================================================
      */}
      <div 
        className="bg-gray-100 border border-gray-200 text-gray-400 flex flex-col items-center justify-center text-sm font-bold tracking-widest uppercase rounded"
        style={{ width: '300px', height: '250px', minHeight: '250px' }}
        aria-hidden="true"
      >
        <span>مساحة إعلانية</span>
        <span className="mt-1">(300x250)</span>
      </div>
    </div>
  );
}
