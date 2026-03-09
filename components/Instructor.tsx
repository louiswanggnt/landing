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
  secondaryTitle: string;
  publications: string[];
}

const Instructor: React.FC = () => {
  const instructors: InstructorData[] = [
    {
      name: "戴念梓",
      title: "臨床教師",
      specialty: "教授 醫師",
      image: IMAGES.instructors.dai,
      desc: "擁有 15 年臨床經驗，專精於問題肌膚的數據化分析與光電療程規劃。",
      fullBio: "中華長生美學再生醫學會 理事長。美亞健康長壽診所 創辦者。國防醫學院醫學系臨床教授，具有多年實務與專業經驗。",
      experiences: [
        "中華長生美學再生醫學會 理事長",
        "國防醫學院醫學系臨床教授",
        "三軍總醫院外科部部主任",
        "台灣燒傷暨傷口照護學會理事長",
      ],
      secondaryTitle: "學經歷",
      publications: [
        "前三軍總醫院外科部主任",
        "細胞中心主任",
        "整形外科主任",
        "燒傷中心主任",
      ]
    },

    {
      name: "王惠欣",
      title: "美容與美學設計教育專家",
      specialty: "美學 碩士",
      image: IMAGES.instructors.wang,
      desc: "。",
      fullBio: "結合產學資深背景與設計思維，專精美容教育與美學系統建構。著有多本彩妝造型專書及能力本位教材，致力於將美容從技術操作提升為理論支撐的專業學科。以科學解析皮膚機制，以美學重塑技術價值，培養兼具專業判斷力與產業競爭力的新世代美容專業人才。",
      experiences: [
        "小雅、瑪格麗特婚紗攝影造型師",
        "中華文化社會福利事業基金會附設職業訓練中心職訓師",
        "安婕妤化妝品公司教學部副主任",
        "稻江護家美容科主任",
        "德育護理健康學院美容流行設計系專任講師",
      ],
      secondaryTitle: "著作",
      publications: [
        "《創意彩妝造型設計》 全華出版",
        "《新娘秘書-時尚新娘造型設計》 全華出版",
        "《職訓局能力本位教材 –美體》",
        "《職訓局能力本位教材 –推脂按摩》"
      ]
    },
    {
      name: "馬天祥",
      title: "關鍵禾芯精準醫療部生醫總監",
      specialty: "博士",
      image: IMAGES.instructors.ma,
      desc: "。",
      fullBio: "長期深耕學術與產業界，熟悉雙方運作與需求，能有效串聯研究與實務。專長於醫療器材臨床試驗設計與取證策略，協助企業加速產品開發與上市；並運用生物醫學專業，研發具實證基礎且有效的美容保養品配方，推動科學化保養的普及。  ",
      experiences: [
        "康博醫創 資深科學家",
        "康健基因 資深產品開發研究員",
        "長庚價創 產品部經理",
        "晉加CRO 臨床試驗專員"
      ],
      secondaryTitle: "專長",
      publications: [
        "醫療器材開發",
        "藥品/醫材臨床試驗",
        "基因轉殖",
        "發育生物學"
      ]
    },
        {
      name: "唐上文",
      title: "無創導入/奈米科技",
      specialty: "董事長",
      image: IMAGES.instructors.tang,
      desc: "。",
      fullBio: "多年產品研發與上市經驗。",
      experiences: [
        "京華堂實業股份有限公司 創辦人",
        "生醫級奈米金製程管理規劃與醫學運用",
        "無創導入技術開發與應用",
  
      ],
      secondaryTitle: "相關著作/研究",
      publications: [
        "2003《黃金的妙用》",
        "食用金箔許可證"
      ]
    },

    {
      name: "顏尚彬",
      title: "無創導入美容儀器",
      specialty: "資深工程師",
      image: IMAGES.instructors.frank,
      desc: "",
      fullBio: "容師",
      experiences: [
        "儀器使用經歷15年",
        "京華堂 金牌業務",
      ],
      secondaryTitle: " ",
      publications: []
    },
        {
      name: "汪冠霖",
      title: "生物物理",
      specialty: "研發專員",
      image: IMAGES.instructors.louis,
      desc: "",
      fullBio: "專業的物理學知識、美容儀器操作及基本原理",
      experiences: [
        "生物物理 碩士",
        "京華堂 產品研發專員",
      ],
      secondaryTitle: " ",
      publications: []
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

                <div className="grid grid-cols-1 gap-6 mt-auto">
                    <div>
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
                    
                    <div>
                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">{instructor.secondaryTitle}</h4>
                        <div className="space-y-2">
                            {instructor.publications.map((pub, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"></div>
                                    <span className="text-slate-400 text-xs italic">{pub}</span>
                                </div>
                            ))}
                        </div>
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
