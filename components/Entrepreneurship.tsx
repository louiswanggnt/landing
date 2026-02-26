import React from 'react';
import { Rocket, Megaphone, GraduationCap, TrendingUp, ArrowRight } from 'lucide-react';

const Entrepreneurship: React.FC = () => {
  const features = [
    {
      icon: <Rocket size={40} className="text-amber-400" />,
      title: "創業輔導",
      subtitle: "Business Incubation",
      desc: "針對優秀創業學員，我們提供資源輔導。共創雙贏。"
    },
    {
      icon: <Megaphone size={40} className="text-neon-cyan" />,
      title: "策略合作",
      subtitle: "Marketing Support",
      desc: "平台準備中"
    },
    {
      icon: <GraduationCap size={40} className="text-amber-400" />,
      title: "培育種子教師",
      subtitle: "Seed Instructor",
      desc: "經考核優異學員,可成為種子講師,服務學員"
    }
  ];

  const scrollToRegistration = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-midnight-950 relative border-t border-slate-800/50 overflow-hidden">
      {/* Section Marker */}
      <div className="absolute top-0 left-0 z-20 pl-6 pt-6 pointer-events-none">
        <span className="text-5xl md:text-6xl font-black text-white/30 font-mono tracking-tighter">08</span>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-bold tracking-wider mb-4">
            <TrendingUp size={16} />
            <span>菁英人才培育計畫</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            我們培訓的不只是技能<br />
            <span className="text-gradient-gold">還有您的未來</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            針對修畢課程的優秀人才，我們提供多方位的發展機會。
            <br className="hidden md:block" />
            這不只是一堂課，而是您事業起飛的加速器。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group relative p-8 rounded-2xl bg-midnight-900/50 border border-slate-800 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]"
            >
              {/* Card bg gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              <div className="relative z-10">
                <div className="mb-6 p-4 bg-midnight-950 rounded-xl inline-block border border-slate-800 group-hover:border-amber-500/30 shadow-lg">
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-neon-cyan font-mono text-sm tracking-widest mb-4 uppercase opacity-80">
                  {feature.subtitle}
                </p>
                <p className="text-slate-400 leading-relaxed border-t border-slate-800 pt-4 group-hover:border-amber-500/20 transition-colors">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-midnight-900 to-midnight-800 border border-slate-700 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="relative z-10">
                <h4 className="text-2xl font-bold text-white mb-2">尋找優秀合夥人</h4>
                <p className="text-slate-400">您準備好接受挑戰，成為我們重點培育的對象了嗎？</p>
            </div>
            
            <button 
              onClick={scrollToRegistration}
              className="relative z-10 group px-8 py-4 bg-amber-500 hover:bg-amber-400 text-midnight-950 font-bold rounded-full cursor-pointer shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all flex items-center gap-2"
            >
                限額招募中
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-amber-500/10 to-transparent skew-x-12 pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};

export default Entrepreneurship;