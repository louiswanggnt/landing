import React, { useState } from 'react';
import { Award, Star, Zap, X, ChevronRight, Check } from 'lucide-react';

interface InstructorData {
  name: string;
  title: string;
  specialty: string;
  image: string;
  desc: string;
  fullBio: string;
  experiences: string[];
}

const Instructor: React.FC = () => {
  const [selectedInstructor, setSelectedInstructor] = useState<InstructorData | null>(null);

  const instructors: InstructorData[] = [
    {
      name: "唐上文",
      title: "董事長",
      specialty: "皮膚生理學 / 雷射原理",
      image: "https://i.postimg.cc/XJ7ynJ6L/Gemini-Generated-Image-in9x7yin9x7yin9x.png",
      desc: "擁有 15 年臨床經驗，專精於問題肌膚的數據化分析與光電療程規劃。",
      fullBio: "畢業於台大醫學系，曾任職於長庚醫院皮膚科主治醫師。Sarah 老師致力於將繁澀的醫學理論轉化為美容師易懂的實務知識。她深信，未來的美容師不僅是操作者，更是「肌膚數據的分析師」，必須具備判讀數據與制定精準療程的能力。",
      experiences: [
        "2024 亞洲科技美容傑出貢獻獎",
        "英國 ITEC 高階雷射光療認證",
        "發表 20+ 篇國際醫美期刊論文",
        "前長庚醫院皮膚科 主治醫師"
      ]
    },
    {
      name: "王惠欣",
      title: "高階美容導師",
      specialty: "光電工程 / AI 數據分析",
      image: "https://i.postimg.cc/P50jtFGy/Gemini-Generated-Image-91d2f691d2f691d2.png",
      desc: "曾任職於國際醫療大廠，主導多款 AI 智能肌膚檢測儀的演算法開發。",
      fullBio: "擁有電機工程博士學位，專攻生物醫學工程。James 曾任職於國際醫療大廠 GE Healthcare，主導多款 AI 智能肌膚檢測儀的演算法開發。他擅長用工程師的邏輯解析儀器原理，讓學員真正了解「能量」與「波長」如何作用於肌膚。",
      experiences: [
        "擁有 10 項肌膚檢測專利",
        "韓國 K-Beauty 儀器開發顧問",
        "AI 影像辨識演算法架構師",
        "前 GE Healthcare 資深工程師"
      ]
    },
    {
      name: "馬天祥",
      title: "博士",
      specialty: "無創手法 / 營運管理",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
      desc: "成功輔導超過 50 家傳統美容院轉型，打造高回購率的科技美容服務流程。",
      fullBio: "從事美容產業超過 20 年，從基層美容師做到連鎖店營運長。Linda 最了解第一線人員的痛點，擅長將高科技儀器融入傳統手技，獨創「科技手感」操作法，不僅提升療程效果，更大幅提高客單價與顧客滿意度。",
      experiences: [
        "輔導 50+ 家傳統美容院轉型",
        "知名連鎖醫美集團 營運總監",
        "年度最佳美容教育培訓講師",
        "百萬業績店長培訓教練"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-t from-midnight-950 to-midnight-900 relative overflow-hidden border-t border-slate-800/50">
      {/* Section Marker */}
      <div className="absolute top-0 left-0 z-20 pl-6 pt-6 pointer-events-none">
        <span className="text-5xl md:text-6xl font-black text-white/30 font-mono tracking-tighter">05</span>
      </div>

      {/* Background Graphic */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            金牌講師 <span className="text-neon-cyan font-mono">陣容</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            由醫學、工程與實務領域的頂尖專家聯手授課，給您最全面的科技美容視野。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {instructors.map((instructor, index) => (
            <div 
                key={index} 
                className="group relative cursor-pointer" 
                onClick={() => setSelectedInstructor(instructor)}
            >
              
              {/* Card Background & Border Effect */}
              <div className="absolute inset-0 bg-midnight-900/40 rounded-2xl border border-slate-800 group-hover:border-neon-cyan/50 transition-colors duration-500"></div>
              
              {/* Hover Glow Behind Character - slightly stronger on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-neon-cyan/10 blur-[80px] rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>

              <div className="relative p-6 pt-0 flex flex-col h-full">
                {/* Character Image Area */}
                <div className="relative w-full aspect-[3/4] mb-4 overflow-hidden rounded-t-2xl">
                  {/* Image Gradient Mask (Fade at bottom to blend) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-900 via-transparent to-transparent z-10"></div>
                  
                  {/* View Details Badge Overlay */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                      <div className="px-4 py-2 border border-neon-cyan/50 bg-midnight-950/80 rounded-full text-neon-cyan text-sm font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          查看完整資歷 <ChevronRight size={16} />
                      </div>
                  </div>

                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>

                {/* Text Info */}
                <div className="relative z-20 text-center -mt-12">
                   <div className="inline-block px-3 py-1 bg-midnight-950 border border-neon-cyan/30 rounded-full text-neon-cyan text-xs font-mono mb-3 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                      {instructor.title}
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-1">{instructor.name}</h3>
                   <p className="text-amber-400 text-sm font-medium mb-4">{instructor.specialty}</p>
                   <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 pt-4">
                     {instructor.desc}
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      {/* Detail Modal Overlay */}
      {selectedInstructor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
             {/* Backdrop */}
            <div className="absolute inset-0 bg-midnight-950/90 backdrop-blur-md animate-fadeIn" onClick={() => setSelectedInstructor(null)}></div>
            
            {/* Modal Card */}
            <div className="relative w-full max-w-5xl bg-midnight-900 border border-slate-700 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row animate-fadeInUp max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible">
                
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedInstructor(null)}
                  className="absolute top-4 right-4 z-50 p-2 bg-black/20 hover:bg-neon-cyan/20 rounded-full text-slate-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>

                {/* Left: Image Section */}
                <div className="w-full md:w-2/5 relative h-64 md:h-auto">
                    <img 
                        src={selectedInstructor.image} 
                        alt={selectedInstructor.name} 
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-midnight-900 via-transparent to-transparent"></div>
                </div>

                {/* Right: Content Section */}
                <div className="w-full md:w-3/5 p-8 md:p-12 bg-gradient-to-b from-midnight-800 to-midnight-900">
                    <div className="inline-block px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-neon-cyan text-sm font-mono mb-4">
                      {selectedInstructor.title}
                    </div>
                    
                    <h2 className="text-4xl font-bold text-white mb-2">{selectedInstructor.name}</h2>
                    <p className="text-amber-400 text-lg font-medium mb-8 flex items-center gap-2">
                        <Zap size={18} fill="currentColor" />
                        {selectedInstructor.specialty}
                    </p>

                    <h4 className="text-slate-200 font-bold mb-3 border-l-4 border-neon-cyan pl-3">關於講師</h4>
                    <p className="text-slate-400 leading-relaxed mb-8">
                        {selectedInstructor.fullBio}
                    </p>

                    <h4 className="text-slate-200 font-bold mb-4 border-l-4 border-amber-400 pl-3">專業經歷與成就</h4>
                    <div className="grid gap-3">
                        {selectedInstructor.experiences.map((exp, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-midnight-950/50 border border-slate-800">
                                <div className="mt-1">
                                  <Check className="text-neon-cyan" size={16} />
                                </div>
                                <span className="text-slate-300 text-sm">{exp}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      )}

    </section>
  );
};

export default Instructor;