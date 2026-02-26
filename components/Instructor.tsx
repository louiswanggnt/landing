import React from 'react';
import { Check, Zap } from 'lucide-react';
import { IMAGES } from '../src/constants/images';

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
  const instructors: InstructorData[] = [
    {
      name: "唐上文",
      title: "董事長",
      specialty: "京華堂 董事長",
      image: IMAGES.instructors.tang,
      desc: " 。",
      fullBio: " 。",
      experiences: [
        "奈米技術",
        "無創美容儀器研發",
      ]
    },
    {
      name: "王惠欣",
      title: "高階美容導師",
      specialty: "美學 碩士",
      image: IMAGES.instructors.wang,
      desc: "。",
      fullBio: "。",
      experiences: [
        "美學",
        "皮膚結構學",
      ]
    },
    {
      name: "馬天祥",
      title: "博士",
      specialty: "生物醫學 博士",
      image: IMAGES.instructors.ma,
      desc: "  ",
      fullBio: " ",
      experiences: [
        "分子醫學",
        "基因槍技術",
        "細胞轉殖",
        "臨床試驗相關技能"
      ]
    },
    {
      name: "汪冠霖",
      title: "講師",
      specialty: "生物物理 碩士",
      image: IMAGES.instructors.new1,
      desc: "  ",
      fullBio: " ",
      experiences: [
        "美容儀器原理",
        "",
      ]
    },
    {
      name: "FRANK",
      title: "講師",
      specialty: "行銷專員",
      image: IMAGES.instructors.new2,
      desc: "  ",
      fullBio: " ",
      experiences: [
        "美容",
        "",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {instructors.map((instructor, index) => (
            <div 
                key={index} 
                className="group relative bg-midnight-900/40 rounded-2xl border border-slate-800 hover:border-neon-cyan/50 transition-colors duration-500 overflow-hidden flex flex-col"
            >
              
              {/* Hover Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-neon-cyan/5 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Image Section */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-900 via-transparent to-transparent z-10"></div>
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute bottom-4 left-4 z-20">
                   <div className="inline-block px-3 py-1 bg-midnight-950/80 backdrop-blur-sm border border-neon-cyan/30 rounded-full text-neon-cyan text-xs font-mono shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                      {instructor.title}
                   </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow relative z-20">
                <h3 className="text-2xl font-bold text-white mb-1">{instructor.name}</h3>
                <p className="text-amber-400 text-sm font-medium mb-4 flex items-center gap-1">
                    <Zap size={14} fill="currentColor" />
                    {instructor.specialty}
                </p>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-6 border-b border-slate-800/50 pb-4">
                  {instructor.fullBio}
                </p>

                <div className="mt-auto">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">專長</h4>
                    <div className="space-y-2">
                        {instructor.experiences.map((exp, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                                <Check className="text-neon-cyan mt-0.5 shrink-0" size={14} />
                                <span className="text-slate-400 text-xs">{exp}</span>
                            </div>
                        ))}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Instructor;