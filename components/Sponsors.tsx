import React from 'react';
import Button from './Button';
import { Globe } from 'lucide-react';
import { IMAGES } from '../src/constants/images';

const Sponsors: React.FC = () => {
  const sponsors = [
    {
      name: "TNA美甲工會",
      enName: "TNail",
      logoUrl: IMAGES.sponsors.tna,
      desc: "頂尖光電美容儀器代理與研發，提供最高規格的設備支持。",
      color: "border-neon-cyan text-neon-cyan",
      btnVariant: "outline" as const,
      qrUrl: IMAGES.sponsors.qrPlaceholder,
      websiteUrl: "#", 
    },
    {
      name: "GNT京華堂",
      enName: "Gold Nano Tech",
      logoUrl: IMAGES.sponsors.gnt,
      desc: "專注於無創霧化導入儀，以科技驅動美麗。",
      color: "border-amber-400 text-amber-400",
      btnVariant: "amber" as const,
      qrUrl: IMAGES.sponsors.qrPlaceholder,
      websiteUrl: "#", 
    },
    {
      name: "BOHUI博惠生技",
      enName: "BO HUI BIOTECH",
      logoUrl: IMAGES.sponsors.bohui,
      desc: "頂尖外泌體與幹細胞公司。",
      color: "border-neon-cobalt text-neon-cobalt",
      btnVariant: "outline" as const,
      qrUrl: IMAGES.sponsors.qrPlaceholder,
      websiteUrl: "#", 
    }
  ];

  const handleVisitSite = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-24 bg-midnight-950 relative border-t border-slate-800/50">
      {/* Section Marker */}
      <div className="absolute top-0 left-0 z-20 pl-6 pt-6 pointer-events-none">
        <span className="text-5xl md:text-6xl font-black text-white/30 font-mono tracking-tighter">11</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            合作夥伴 <span className="text-neon-cyan">&</span> 贊助廠商
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            感謝以下頂尖企業提供設備、技術與行銷資源支持，共同培育未來美容人才。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sponsors.map((sponsor, idx) => (
            <div 
              key={idx} 
              className="bg-midnight-900/40 border border-slate-800 rounded-2xl p-8 flex flex-col items-center text-center hover:border-slate-600 transition-colors group"
            >
              {/* Sponsor Logo Image */}
              <div className={`w-20 h-20 rounded-full border-2 ${sponsor.color} flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,0,0,0.3)] bg-midnight-950 overflow-hidden`}>
                <img 
                  src={sponsor.logoUrl} 
                  alt={`${sponsor.name} logo`} 
                  className="w-full h-full object-cover p-2"
                />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1">{sponsor.name}</h3>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">{sponsor.enName}</p>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-8 min-h-[40px]">
                {sponsor.desc}
              </p>

              {/* QR Code Image */}
              <div className="relative w-32 h-32 bg-white p-2 rounded-lg mb-6 group-hover:scale-105 transition-transform duration-300 overflow-hidden shadow-inner">
                <img 
                  src={sponsor.qrUrl} 
                  alt={`${sponsor.name} QR Code`}
                  className="w-full h-full object-contain"
                />
                <div className="absolute -bottom-2 -right-2 bg-[#06C755] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md">
                    LINE
                </div>
              </div>

              <Button 
                onClick={() => handleVisitSite(sponsor.websiteUrl)}
                variant={sponsor.btnVariant === 'amber' ? 'amber' : 'outline'} 
                className="w-full text-sm py-2 flex items-center justify-center gap-2 mt-auto"
              >
                <Globe size={16} /> 訪問官網
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;