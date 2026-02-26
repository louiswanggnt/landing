import React from 'react';
import Button from './Button';
import { ArrowRight, Sparkles, Calendar, Clock, MapPin } from 'lucide-react';
import { IMAGES } from '../src/constants/images';

interface HeroProps {
  onRegister: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegister }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-midnight-950">
      {/* Section Marker */}
      <div className="absolute top-0 left-0 z-20 pl-6 pt-6 pointer-events-none">
        <span className="text-5xl md:text-6xl font-black text-white/30 font-mono tracking-tighter">01</span>
      </div>

      {/* Full Page Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.hero.bg} 
          alt="Professional Instructor Background" 
          className="w-full h-full object-cover object-top opacity-100" 
        />
        {/* Softened Gradient Overlays to make image clearer */}
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-950 via-midnight-950/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-transparent to-midnight-950/20"></div>
        
        {/* Abstract Tech Shapes */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-neon-cobalt/10 rounded-full blur-3xl"></div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-sm font-medium tracking-wider mb-2 shadow-[0_0_10px_rgba(0,240,255,0.1)]">
              <Sparkles size={16} />
              <span>2026 趨勢搶先看</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-white tracking-tight">2026 </span>
                <span className="block text-white tracking-tight">無創導入暨科技美容培訓</span>
                <span className="text-gradient-cyan">迎向科技美容</span>
              </h1>
              
              <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
                掌握未來美容產業的核心競爭力，結合人工智能與頂尖儀器，打造無可取代的專業護理體驗。
              </p>
            </div>

            {/* Course Information Block */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-y border-white/10 max-w-3xl">
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-neon-cyan/50 transition-colors">
                  <Calendar className="text-neon-cyan" size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 text-xs font-mono uppercase tracking-wider">開課日期</span>
                  <span className="text-white font-medium">2026/03/21、22 (週日)</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-neon-cyan/50 transition-colors">
                  <Clock className="text-neon-cyan" size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 text-xs font-mono uppercase tracking-wider">上課時間</span>
                  <span className="text-white font-medium">09:00 - 18:00</span>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-neon-cyan/50 transition-colors">
                  <MapPin className="text-neon-cyan" size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 text-xs font-mono uppercase tracking-wider">地點</span>
                  <span className="text-white font-medium">TNA中華民國指甲彩繪美容職業工會聯合會</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button onClick={onRegister} variant="primary" className="flex items-center justify-center gap-2 px-10 h-14">
                立即限額報名 <ArrowRight size={20} />
              </Button>
              <Button 
                onClick={() => document.getElementById('syllabus')?.scrollIntoView({ behavior: 'smooth' })} 
                variant="outline"
                className="h-14"
              >
                了解課程詳情
              </Button>
            </div>
            
            <div className="pt-4 flex items-center gap-8 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_8px_#00f0ff] animate-pulse"></div>
                <span className="text-neon-cyan/80">名額剩餘 30 位</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]"></div>
                <span className="text-amber-400/80">首堂優惠倒數中</span>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;