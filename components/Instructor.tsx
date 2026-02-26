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
      specialty: "皮膚生理學 / 雷射原理",
      image: IMAGES.instructors.tang,
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
      image: IMAGES.instructors.wang,
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
      image: IMAGES.instructors.ma,
      desc: "成功輔導超過 50 家傳統美容院轉型，打造高回購率的科技美容服務流程。",
      fullBio: "從事美容產業超過 20 年，從基層美容師做到連鎖店營運長。Linda 最了解第一線人員的痛點，擅長將高科技儀器融入傳統手技，獨創「科技手感」操作法，不僅提升療程效果，更大幅提高客單價與顧客滿意度。",
      experiences: [
        "輔導 50+ 家傳統美容院轉型",
        "知名連鎖醫美集團 營運總監",
        "年度最佳美容教育培訓講師",
        "百萬業績店長培訓教練"
      ]
    },
    {
      name: "林雅婷",
      title: "資深美容講師",
      specialty: "韓式皮膚管理 / 創業輔導",
      image: IMAGES.instructors.new1,
      desc: "致力於將最新的韓式皮膚管理技術引進台灣，協助學員掌握國際趨勢。",
      fullBio: "擁有豐富的海外進修經驗，專精於韓式皮膚管理與問題肌膚調理。Tina 老師擅長將複雜的理論簡單化，並結合實務操作，讓學員能夠快速上手。她也致力於協助學員創業，從選址、裝潢到行銷，提供全方位的輔導。",
      experiences: [
        "韓國美容協會認證講師",
        "輔導超過 100 位學員創業",
        "知名美容連鎖店 教育總監",
        "國際美容競賽 評審長"
      ]
    },
    {
      name: "陳志豪",
      title: "行銷總監",
      specialty: "社群行銷 / 品牌經營",
      image: IMAGES.instructors.new2,
      desc: "擅長運用社群媒體打造個人品牌，協助美容師建立專業形象與客源。",
      fullBio: "擁有 10 年以上的數位行銷經驗，曾協助多家美妝品牌成功打入市場。David 老師深知美容產業的特性，擅長運用社群媒體（如 Instagram、Facebook、Line OA）進行精準行銷，協助美容師建立個人品牌，吸引精準客源。",
      experiences: [
        "知名美妝品牌行銷顧問",
        "單月業績破百萬操盤手",
        "社群行銷實戰班 金牌講師",
        "暢銷書《美容師的社群行銷術》作者"
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
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">專業經歷</h4>
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