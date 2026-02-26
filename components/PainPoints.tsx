import React from 'react';
import { AlertTriangle, Cpu, TrendingUp } from 'lucide-react';

const PainPoints: React.FC = () => {
  const points = [
    {
      id: 1,
      icon: <Cpu size={36} className="text-neon-cyan" />,
      title: "精準分析",
      desc: "告別推銷。讓圖表替你觀察說話，直擊客戶心底，讓成交變得理所當然。",
      bgImage: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      icon: <AlertTriangle size={36} className="text-amber-400" />,
      title: "類醫美護理",
      desc: "解放雙手。駕馭光電熱磁聲，讓設備轉換成業績與聲譽",
      bgImage: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop",
    },
    {
      id: 3,
      icon: <TrendingUp size={36} className="text-neon-cyan" />,
      title: "API科學活性成分",
      desc: "善用合法有效成分,滿足客戶需求,解決問題痛點",
      bgImage: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
      highlight: true
    }
  ];

  return (
    <section className="py-24 bg-midnight-950 relative border-t border-slate-800/50">
      {/* Section Marker */}
      <div className="absolute top-0 left-0 z-20 pl-6 pt-6 pointer-events-none">
        <span className="text-5xl md:text-6xl font-black text-white/30 font-mono tracking-tighter">02</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">科技美容</span>
            <span className="text-gradient-gold"> 突破點</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            在 AI 浪潮下，傳統美容正邁向前所未有的新時代。
          </p>
        </div>

        {/* Vertical Stack of Full-Width Background Image Cards */}
        <div className="space-y-4 max-w-6xl mx-auto">
          {points.map((point) => (
            <div 
              key={point.id} 
              className={`group relative overflow-hidden rounded-3xl min-h-[220px] flex items-center border transition-all duration-500
                ${point.highlight ? 'border-neon-cyan/40 shadow-[0_0_30px_rgba(0,240,255,0.1)]' : 'border-slate-800/60 hover:border-slate-600'}
              `}
            >
              {/* Background Image with increased visibility (transparency lowered) */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={point.bgImage} 
                  alt={point.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-95"
                />
                {/* Dark Gradient Overlay softened to reveal image more */}
                <div className="absolute inset-0 bg-gradient-to-r from-midnight-950/90 via-midnight-950/60 to-midnight-950/30"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 w-full px-8 py-10 md:px-12 flex flex-col md:flex-row items-center gap-8">
                {/* Icon Circle */}
                <div className={`shrink-0 p-5 rounded-2xl bg-midnight-950/80 backdrop-blur-md border border-slate-700/50 transition-all duration-500 group-hover:border-neon-cyan/50 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]`}>
                  {point.icon}
                </div>

                {/* Text Group */}
                <div className="flex-grow text-center md:text-left">
                  <h3 className={`text-2xl md:text-3xl font-bold mb-3 transition-colors ${point.highlight ? 'text-neon-cyan' : 'text-white group-hover:text-neon-cyan'}`}>
                    {point.title}
                  </h3>
                  <p className="text-slate-100 text-lg leading-relaxed max-w-3xl drop-shadow-md">
                    {point.desc}
                  </p>
                </div>

                {/* Side Marker */}
                <div className="hidden lg:block shrink-0 pr-4">
                  <span className={`text-6xl font-black font-mono opacity-20 group-hover:opacity-40 transition-opacity ${point.highlight ? 'text-neon-cyan' : 'text-white'}`}>
                    0{point.id}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;