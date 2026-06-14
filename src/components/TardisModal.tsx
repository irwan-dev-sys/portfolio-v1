import React, { useEffect, useState } from 'react';

interface TardisModalProps {
  onClose?: () => void;
}

export const TardisModal: React.FC<TardisModalProps> = ({ onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Memberikan jeda sangat singkat agar CSS transition menangkap perubahan state saat mount
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`tardis-wrapper transition-opacity duration-700 ease-in-out ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Premium Close Button */}
      <button 
        onClick={onClose} 
        className="absolute top-6 right-6 md:top-8 md:right-8 z-50 text-slate-400 hover:text-white transition-all duration-300 hover:rotate-90 bg-slate-800/40 hover:bg-slate-700/60 p-2 md:p-3 rounded-full backdrop-blur-md border border-white/10 hover:shadow-lg hover:shadow-cyan-500/20" 
        aria-label="Close modal"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* TARDIS Blob Animasi dengan Entry Scale */}
      <div className={`tardis-container transition-transform duration-1000 ease-out ${mounted ? 'scale-100' : 'scale-[0.8]'}`}>
        <div className="tardis-layer"></div>
        <div className="tardis-layer"></div>
        <div className="tardis-layer"></div>
        <div className="tardis-layer"></div>
        <div className="tardis-layer"></div>
      </div>

      {/* Konten Tengah - Dikunci persis seukuran cahaya lingkaran (60vmin) agar tidak meluber */}
      <div className={`relative z-10 flex flex-col items-center justify-center w-[60vmin] h-[60vmin] max-w-[600px] max-h-[600px] p-2 md:p-4 pointer-events-none transition-all duration-1000 delay-100 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        
        {/* Typography Heading yang Diperkecil agar Aman */}
        <h2 className="mb-4 md:mb-6 lg:mb-8 text-center pointer-events-auto drop-shadow-md">
          <span className="font-serif italic text-slate-900 font-bold text-xl md:text-2xl lg:text-3xl leading-[1.15] tracking-tight">
            Looking for a different<br className="hidden sm:block"/> site? Go back in time...
          </span>
        </h2>
        
        {/* Grid Kotak UI Modern - Ukuran Diperkecil agar masuk sepenuhnya ke dalam cahaya */}
        <div className="grid grid-cols-2 gap-2 md:gap-3 relative z-20 pointer-events-auto">
          
          {/* Mini App 1: SCM Dashboard Glassmorphism */}
          <div className="group w-28 sm:w-36 md:w-40 lg:w-44 aspect-[16/10] bg-slate-900/80 backdrop-blur-md rounded-xl shadow-2xl transition-all duration-500 hover:scale-[1.15] hover:z-30 hover:rotate-0 rotate-[4deg] cursor-pointer border border-white/20 overflow-hidden flex flex-col p-2 md:p-3 hover:shadow-cyan-500/30">
            <div className="flex justify-between items-center mb-auto">
              <div className="flex space-x-1 md:space-x-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400/80"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400/80"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-400/80"></div>
              </div>
              <span className="text-[5px] md:text-[6px] lg:text-[7px] text-slate-400 uppercase tracking-widest font-semibold">SCM System</span>
            </div>
            <div className="mt-auto">
              <div className="h-1 w-1/3 bg-cyan-500/70 rounded-full mb-1"></div>
              <div className="h-1 w-full bg-slate-700 rounded-full mb-1"></div>
              <div className="h-1 w-2/3 bg-slate-700 rounded-full"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Mini App 2: Vibrant Analytics Card */}
          <div className="group w-28 sm:w-36 md:w-40 lg:w-44 aspect-[16/10] bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-500 rounded-xl shadow-2xl transition-all duration-500 hover:scale-[1.15] hover:z-30 hover:rotate-0 -rotate-[3deg] cursor-pointer border border-white/30 overflow-hidden flex flex-col p-2 md:p-2.5 text-white hover:shadow-fuchsia-500/40">
            <div className="flex items-center space-x-1.5 mb-1.5">
              <div className="w-4 h-4 md:w-5 md:h-5 rounded bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-inner">
                <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              </div>
              <span className="text-[6px] md:text-[8px] lg:text-[9px] font-bold tracking-wide">Looker Studio</span>
            </div>
            <div className="flex-1 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md p-1 mt-0.5">
               <div className="h-full w-full border border-white/30 border-dashed rounded flex flex-col items-center justify-center space-y-1">
                 <div className="flex items-end space-x-1 h-2 md:h-3">
                   <div className="w-1 bg-white/80 h-full rounded-t-sm"></div>
                   <div className="w-1 bg-white/60 h-2/3 rounded-t-sm"></div>
                   <div className="w-1 bg-white/90 h-1/2 rounded-t-sm"></div>
                 </div>
               </div>
            </div>
          </div>

          {/* Mini App 3: Clean Light Widget */}
          <div className="group w-28 sm:w-36 md:w-40 lg:w-44 aspect-[16/10] bg-white/95 backdrop-blur-md rounded-xl shadow-2xl transition-all duration-500 hover:scale-[1.15] hover:z-30 hover:rotate-0 -rotate-[4deg] cursor-pointer border border-slate-200 overflow-hidden flex flex-col p-2 md:p-3 hover:shadow-slate-300/60">
            <div className="w-5 h-5 md:w-6 md:h-6 bg-slate-100 rounded-full mb-1.5 md:mb-2 flex items-center justify-center border border-slate-200 shadow-sm">
              <span className="text-[8px] md:text-[10px]">👋</span>
            </div>
            <span className="font-bold text-slate-800 text-[8px] md:text-[10px] lg:text-xs leading-tight mb-0.5">Hello, Irwanto</span>
            <span className="text-[6px] md:text-[7px] lg:text-[8px] text-slate-500 leading-snug">Ready to analyze new data today?</span>
            <div className="mt-auto flex justify-end">
              <div className="bg-emerald-500/10 text-emerald-600 text-[5px] md:text-[6px] px-1 py-0.5 rounded font-bold uppercase tracking-wider">Online</div>
            </div>
          </div>

          {/* Mini App 4: Hacker Status Terminal */}
          <div className="group w-28 sm:w-36 md:w-40 lg:w-44 aspect-[16/10] bg-[#09090b] rounded-xl shadow-2xl transition-all duration-500 hover:scale-[1.15] hover:z-30 hover:rotate-0 rotate-[3deg] cursor-pointer border border-slate-800 overflow-hidden flex flex-col p-2 md:p-3 hover:shadow-emerald-500/20">
            <div className="flex items-center space-x-1.5 md:space-x-2 mb-1.5 md:mb-2 border-b border-slate-800 pb-1.5 md:pb-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
              <span className="text-[6px] md:text-[7px] lg:text-[8px] text-slate-300 font-mono tracking-widest">SYS: OK</span>
            </div>
            <div className="flex flex-col space-y-1 md:space-y-1.5 mt-auto">
              <div className="flex justify-between items-center">
                <span className="text-[5px] md:text-[6px] text-slate-500 font-mono">CPU</span>
                <div className="w-12 md:w-16 lg:w-20 h-1 bg-slate-800 rounded-full overflow-hidden"><div className="w-[30%] h-full bg-slate-400"></div></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[5px] md:text-[6px] text-slate-500 font-mono">MEM</span>
                <div className="w-12 md:w-16 lg:w-20 h-1 bg-slate-800 rounded-full overflow-hidden"><div className="w-[75%] h-full bg-emerald-500"></div></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Teks Credit */}
      <div className={`absolute bottom-6 right-6 md:bottom-8 md:right-8 z-50 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
        <p className="text-[9px] md:text-xs text-slate-400 hover:text-white transition-colors cursor-pointer font-medium tracking-wide">
          Designed by Irwanto | Inspired by <span className="underline decoration-slate-600 underline-offset-4">@jasesmith</span>
        </p>
      </div>
    </div>
  );
};

export default TardisModal;
