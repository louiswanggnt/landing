import React from 'react';

const Syllabus: React.FC = () => {
  const highlights = [
    {
      title: "AI 智能分析儀",
      desc: "學習解讀深層皮膚數據，用數據精準定義護理方向。",
      bgImage: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "皮膚與肌肉結構",
      desc: "重新認識表皮至真皮層的運作機制、與筋膜按摩的真實理論。",
      bgImage: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=2061&auto=format&fit=crop"
    },
    {
      title: "無創導入",
      desc: "電穿孔、超聲波、霧化、離子導入的理論，及實作課程。",
      bgImage: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=2072&auto=format&fit=crop"
    },
    {
      title: "光電美容儀",
      desc: "掌握光聲電磁熱等儀器的原理、控制、安全使用。",
      bgImage: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "API 有效成分",
      desc: "剖析現代活性成分，拒絕盲目跟風品牌廣告。",
      bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "智能管理系統",
      desc: "數位化客戶歷史數據，打造高效能經營體系。",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop"
    }
  ];

  const schedule = [
    { week: "DAY 0 線上課程", title: "(學)各單元基本知識", date: "8hr " },
    { week: "DAY 1", title: "(術)皮膚結構、AI 檢測分析、API科學活性成分", date: "8hr 3/21" },
    { week: "DAY 2", title: "(術)無創導入儀、無創美容儀", date: "8hr 3/22" },
  ];

  return (
    <section id="syllabus" className="py-24 bg-midnight-950 relative border-t border-slate-800/50">
      {/* Section Marker */}
      <div className="absolute top-0 left-0 z-20 pl-6 pt-6 pointer-events-none">
        <span className="text-5xl md:text-6xl font-black text-white/30 font-mono tracking-tighter">04</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">課程大綱與亮點</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            整合最新 AI 技術與科學護膚理論，為您建構不可替代的專業護城河。
          </p>
        </div>

        {/* Highlights Grid with Translucent Background Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {highlights.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl aspect-[16/10] border border-slate-800 hover:border-neon-cyan/50 transition-all duration-500 shadow-xl">
              
              {/* Background Image Layer */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.bgImage} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-40"
                />
                {/* Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/60 to-midnight-950/20"></div>
                <div className="absolute inset-0 bg-midnight-950/40 group-hover:bg-midnight-950/20 transition-colors duration-500"></div>
              </div>

              {/* Content Layer */}
              <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                <div className="mb-4 w-10 h-1 bg-neon-cyan transition-all duration-500 group-hover:w-20"></div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed opacity-90 group-hover:opacity-100">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule Timeline */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-neon-cyan"></span>
            課程時間表
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-neon-cyan"></span>
          </h3>
          <div className="space-y-4">
            {schedule.map((slot, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-center bg-midnight-900/40 rounded-lg p-4 md:p-6 border border-slate-800 hover:border-neon-cyan/30 hover:bg-midnight-800/60 transition-colors group">
                <div className="flex-shrink-0 w-24 text-center md:text-left mb-2 md:mb-0">
                  <span className="text-neon-cyan font-bold block font-mono group-hover:text-white transition-colors">{slot.week}</span>
                </div>
                <div className="flex-grow text-center md:text-left mb-2 md:mb-0">
                  <span className="text-white font-medium text-lg">{slot.title}</span>
                </div>
                <div className="flex-shrink-0 text-slate-500 text-sm font-mono">
                  {slot.date}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Syllabus;