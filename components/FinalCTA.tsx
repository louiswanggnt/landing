import React from 'react';
import Button from './Button';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface FinalCTAProps {
  onRegister: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onRegister }) => {
  return (
    <section className="py-24 relative bg-midnight-950 overflow-hidden border-t border-slate-800/50">
      {/* Section Marker */}
      <div className="absolute top-0 left-0 z-20 pl-6 pt-6 pointer-events-none">
        <span className="text-5xl md:text-6xl font-black text-white/30 font-mono tracking-tighter">09</span>
      </div>

      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-midnight-900/50 via-midnight-950 to-midnight-950"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-midnight-900/30 backdrop-blur-lg border border-slate-700/50 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          
          {/* Shine effect */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-neon-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            啟動您的 <span className="text-neon-cyan">科技美容事業</span>
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            機會稍縱即逝。現在報名，即可獲得「首堂免費」體驗資格，親身感受 AI 儀器帶來的震撼效果。
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 mb-10 text-slate-300">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="text-amber-400" size={20} />
              <span>開課日期：2026/04/04-05 (六、日)<br />2026/04/12 (日)</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="text-amber-400" size={20} />
              <span>時間：08:00 - 17:00</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="text-amber-400" size={20} />
              <span>地點：TNA中華民國指甲彩繪美容職業工會聯合會</span>
              
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Button onClick={onRegister} variant="amber" className="text-xl px-12 py-4 w-full md:w-auto font-bold tracking-widest text-midnight-950">
              立即領取首堂免費資格
            </Button>
            <p className="text-slate-500 text-sm">
              * 限量 30 名，額滿為止
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;