import React from 'react';
import { X, Check, BrainCircuit, Activity, Database } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-midnight-900 to-midnight-950 relative border-t border-slate-800/50">
      {/* Section Marker */}
      <div className="absolute top-0 left-0 z-20 pl-6 pt-6 pointer-events-none">
        <span className="text-5xl md:text-6xl font-black text-white/30 font-mono tracking-tighter">07</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            預期成果 <span className="text-gradient-gold">效益對比</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            別讓過時的經營模式限制了您的發展。選擇科技，就是選擇效率與獲利。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-8 max-w-7xl mx-auto items-stretch relative">
          
          {/* Traditional Column */}
          <div className="lg:col-span-3 relative overflow-hidden rounded-3xl border border-slate-800 group h-full">
            {/* Background Image Layer - Increased opacity */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://i.postimg.cc/nLTByD9t/Gemini-Generated-Image-3eq5zo3eq5zo3eq5.png" 
                className="w-full h-full object-cover grayscale opacity-85 transition-transform duration-700 group-hover:scale-105"
                alt="Traditional Beauty Background"
              />
              <div className="absolute inset-0 bg-midnight-950/70 group-hover:bg-midnight-950/60 transition-colors"></div>
            </div>

            {/* Content Layer with semi-transparent mask */}
            <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">
              <h3 className="text-xl font-bold text-slate-100 mb-8 text-center tracking-wider border-b border-white/20 pb-4 drop-shadow-lg">傳統美容模式</h3>
              
              <div className="space-y-10 flex-grow">
                <div className="text-center group-hover:translate-y-[-4px] transition-transform">
                  <div className="text-red-900/40 bg-red-950/80 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-900/40 backdrop-blur-sm">
                      <X size={28} className="text-red-500" />
                  </div>
                  <h4 className="text-white font-bold mb-2 drop-shadow-md">盲從聽廠商吹噓</h4>
                  <p className="text-slate-100 text-sm leading-relaxed max-w-xs mx-auto drop-shadow-md">缺乏判斷力，購入低規無效儀器，淪為囤貨孤兒，售後無門。</p>
                </div>

                <div className="text-center group-hover:translate-y-[-4px] transition-transform delay-75">
                  <div className="text-red-900/40 bg-red-950/80 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-900/40 backdrop-blur-sm">
                      <X size={28} className="text-red-500" />
                  </div>
                  <h4 className="text-white font-bold mb-2 drop-shadow-md">紙本手寫記錄</h4>
                  <p className="text-slate-100 text-sm leading-relaxed max-w-xs mx-auto drop-shadow-md">客戶資料混亂難尋，難以追蹤膚況演變與成效，容易流失高價值客群。</p>
                </div>

                <div className="text-center group-hover:translate-y-[-4px] transition-transform delay-150">
                  <div className="text-red-900/40 bg-red-950/80 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-900/40 backdrop-blur-sm">
                      <X size={28} className="text-red-500" />
                  </div>
                  <h4 className="text-white font-bold mb-2 drop-shadow-md">一整天疲累的雙手</h4>
                  <p className="text-slate-100 text-sm leading-relaxed max-w-xs mx-auto drop-shadow-md">純手技操作使體力透支且效率低，無法服務更多客人，業績觸及天花板。</p>
                </div>
              </div>
            </div>
          </div>

          {/* VS Badge - Centered on Large Screens */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center relative">
             <div className="w-16 h-16 rounded-full bg-midnight-950 border border-slate-700 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <span className="text-2xl font-black italic text-slate-500">VS</span>
             </div>
             <div className="h-full w-px bg-slate-800 absolute top-0 bottom-0 z-0"></div>
          </div>

          {/* Tech Column (Highlighted) */}
          <div className="lg:col-span-3 relative overflow-hidden rounded-3xl border border-neon-cyan/40 group h-full shadow-[0_0_30px_rgba(0,240,255,0.15)]">
            {/* Background Image Layer - Maximum clarity */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://i.postimg.cc/zB07FQFR/Gemini-Generated-Image-cq1or6cq1or6cq1o.png" 
                className="w-full h-full object-cover opacity-100 transition-transform duration-700 group-hover:scale-110"
                alt="AI Tech Background"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-midnight-950/60 via-midnight-900/40 to-midnight-950/60 group-hover:opacity-40 transition-opacity"></div>
            </div>

            {/* Content Layer with semi-transparent glow mask */}
            <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan to-neon-cobalt"></div>
              
              <h3 className="text-2xl font-bold text-neon-cyan mb-8 text-center tracking-widest border-b border-neon-cyan/40 pb-4 flex items-center justify-center gap-3 drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                  <BrainCircuit size={24} className="animate-pulse" />
                  科技賦能
              </h3>
              
              <div className="space-y-10 flex-grow">
                <div className="text-center group-hover:translate-y-[-4px] transition-transform">
                  <div className="bg-neon-cyan/40 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 border border-neon-cyan/60 shadow-[0_0_20px_rgba(0,240,255,0.4)] backdrop-blur-md">
                      <Check size={28} className="text-white" />
                  </div>
                  <h4 className="text-white text-xl font-bold mb-2 drop-shadow-lg">專業判讀，精選裝備</h4>
                  <p className="text-white text-sm leading-relaxed max-w-xs mx-auto drop-shadow-md">具備儀器物理與臨床原理知識，能自行挑選高性價比、安全高效的全套儀器。</p>
                </div>

                <div className="text-center group-hover:translate-y-[-4px] transition-transform delay-75">
                  <div className="bg-neon-cyan/40 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 border border-neon-cyan/60 shadow-[0_0_20px_rgba(0,240,255,0.4)] backdrop-blur-md">
                      <Database size={28} className="text-white" />
                  </div>
                  <h4 className="text-white text-xl font-bold mb-2 drop-shadow-lg">AI 智能數據管理</h4>
                  <p className="text-white text-sm leading-relaxed max-w-xs mx-auto drop-shadow-md">數據化追蹤護理前後差異，系統自動推薦最優排程，實現客戶終身價值最大化。</p>
                </div>

                <div className="text-center group-hover:translate-y-[-4px] transition-transform delay-150">
                  <div className="bg-neon-cyan/40 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 border border-neon-cyan/60 shadow-[0_0_20px_rgba(0,240,255,0.4)] backdrop-blur-md">
                      <Activity size={28} className="text-white" />
                  </div>
                  <h4 className="text-white text-xl font-bold mb-2 drop-shadow-lg">高效產出，解放雙手</h4>
                  <p className="text-white text-sm leading-relaxed max-w-xs mx-auto drop-shadow-md">利用高科技儀器執行標準化精準護理，省時省力且效果倍增，輕鬆翻倍單店獲利。</p>
                </div>
              </div>

              {/* Bottom Glow Decoration */}
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neon-cyan/20 to-transparent pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;