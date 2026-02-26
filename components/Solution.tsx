import React, { useState, useEffect } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { IMAGES } from '../src/constants/images';

const Solution: React.FC = () => {
  const images = [
    IMAGES.solution.slide1,
    IMAGES.solution.slide2,
    IMAGES.solution.slide3
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-midnight-950 to-midnight-900 overflow-hidden relative border-t border-slate-800/50">
      {/* Section Marker */}
      <div className="absolute top-0 left-0 z-20 pl-6 pt-6 pointer-events-none">
        <span className="text-5xl md:text-6xl font-black text-white/30 font-mono tracking-tighter">03</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 relative group">
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-neon-cyan/10 rounded-full blur-3xl"></div>
             
             {/* Carousel Container */}
             <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-neon-cyan/5 aspect-[4/3]">
               {images.map((img, index) => (
                 <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                 >
                   <img 
                     src={img} 
                     alt={`High Tech Beauty Treatment ${index + 1}`} 
                     className="w-full h-full object-cover opacity-90 mix-blend-lighten grayscale hover:grayscale-0 transition-all duration-700"
                   />
                   <div className="absolute inset-0 bg-midnight-950/20"></div>
                 </div>
               ))}
               
               {/* Navigation Buttons */}
               <button 
                 onClick={prevSlide}
                 className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-neon-cyan/20 hover:text-neon-cyan transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100 duration-300"
               >
                 <ChevronLeft size={24} />
               </button>
               <button 
                 onClick={nextSlide}
                 className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-neon-cyan/20 hover:text-neon-cyan transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100 duration-300"
               >
                 <ChevronRight size={24} />
               </button>

               {/* Dots */}
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                 {images.map((_, idx) => (
                   <button
                     key={idx}
                     onClick={() => setCurrentSlide(idx)}
                     className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-neon-cyan w-6' : 'bg-white/30 hover:bg-white/50'}`}
                   />
                 ))}
               </div>
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
                無侵入的療程設備,搭配AI智能分析<br/ >
                以無創導入技術將有效成分漸進滲透保養<br/ >
                實現"高效、無創、有感"的護膚體驗<br/ >
                重塑服務價值。
              </p>
            </div>

            <div className="space-y-4">
              {[
                "AI 智能：數據化分析頭皮、臉皮。設計精準客製療程，自動記錄、管理",
                "API活性成分：運用最新合法科學實證保養成分,對症下藥解決問題",
                "無創導入：無創無痛突破角質屏障,高效提升產品吸收,有效解決深層問題",
                "科技保養：如何善用光、電、熱、磁、聲刺激療法,改善肌膚健康"
            
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle2 className="text-neon-cyan mt-1 shrink-0 group-hover:text-white transition-colors" size={20} />
                  <span className="text-slate-300 group-hover:text-neon-cyan transition-colors">
                    {item.split('：').map((part, i) => i === 0 ? <strong key={i} className="text-lg">{part}</strong> : <span key={i}>：{part}</span>)}
                  </span>
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