import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-midnight-950 to-midnight-900 overflow-hidden relative border-t border-slate-800/50">
      {/* Section Marker */}
      <div className="absolute top-0 left-0 z-20 pl-6 pt-6 pointer-events-none">
        <span className="text-5xl md:text-6xl font-black text-white/30 font-mono tracking-tighter">03</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 relative">
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-neon-cyan/10 rounded-full blur-3xl"></div>
             <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-neon-cyan/5">
               <img 
                 src="https://i.postimg.cc/qMgn9q4y/T6-qiang-ti-tou-shi.jpg" 
                 alt="High Tech Beauty Treatment" 
                 className="w-full h-auto object-cover opacity-90 mix-blend-lighten grayscale hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-midnight-950/20"></div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-midnight-800/80 rounded-full backdrop-blur-md border border-neon-cyan/30 flex items-center justify-center animate-bounce-slow shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <span className="text-neon-cyan font-bold text-lg font-mono">AI DRIVEN</span>
             </div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-neon-cyan font-medium tracking-widest text-sm mb-2 uppercase font-mono">The Solution</h2>
              <h3 className="text-4xl font-bold text-white mb-6">
                什麼是 <span className="text-gradient-gold">無創與科技美容</span>？
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                不依賴有風險的侵入式療程，利用AI智能分析、無創導入、無創保養等高科技，
                實現"高效、無創、有感"的護膚體驗。重塑服務價值。
              </p>
            </div>

            <div className="space-y-4">
              {[
                "AI 智能：數據化分析頭皮、臉皮。設計精準客製療程，自動記錄",
                "API活性成分：業界最新的化妝保養成分，從源頭改善",
                "無創導入：無創突破角質層屏障，大幅提升產品吸收",
                "無創保養：安全高效，改善肌膚健康"
            
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle2 className="text-neon-cyan mt-1 shrink-0 group-hover:text-white transition-colors" size={20} />
                  <span className="text-slate-300 group-hover:text-neon-cyan transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Solution;