"use client";

import { QRCodeSVG } from "qrcode.react";

export default function QRPage() {
  const menuUrl = "https://max-kitchen.vercel.app/";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f5f0] px-5 py-10">
      <div className="w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-xl">
        
        {/* Logo */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#d6ad63] bg-[#651719]">
          <div className="text-white">
            <div className="text-2xl font-black leading-none">
              MAX
            </div>

            <div className="mt-1 text-[10px] font-bold tracking-[0.2em]">
              KITCHEN
            </div>
          </div>
        </div>

        {/* Restaurant Name */}
        <h1 className="mt-5 text-2xl font-bold text-[#651719]">
          MAX KITCHEN
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Scan to View Our Menu
        </p>

        {/* QR Code */}
        <div className="mx-auto mt-7 w-fit rounded-2xl bg-white p-4 shadow-md">
          <QRCodeSVG
            value={menuUrl}
            size={240}
            level="H"
            marginSize={4}
            title="MAX KITCHEN Digital Menu"
          />
        </div>

        {/* URL */}
        <p className="mt-5 break-all text-xs text-gray-400">
          {menuUrl}
        </p>

        <p className="mt-3 text-sm font-semibold text-[#651719]">
          Scan & View Menu
        </p>
      </div>
    </main>
  );
}