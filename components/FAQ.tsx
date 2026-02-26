import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "報名資格有限制嗎？",
      answer: "本課程適合所有對科技美容有興趣的人士<br />無論您是老師、美容從業人員<br />或是想創業的初學者<br/ >我們的教學都能讓您快速上手。"
    },
    {
      question: "如何報名？",
      answer: "點擊頁面上的「立即報名」按鈕，填寫基本資料表單。我們後續將通知您是否報名成功。"
    },
    {
      question: "課程中會使用到哪些儀器？",
      answer: "我們將實機操作目前市場主流的非侵入式設備，包含 AI 智能肌膚、頭皮檢測儀、無創導入儀、無創美容儀(光聲電熱)，讓您具備全方位的操作能力。"
    },
  ];

  return (
    <section className="py-24 bg-midnight-950 relative border-t border-slate-800/50">
      {/* Section Marker */}
      <div className="absolute top-0 left-0 z-20 pl-6 pt-6 pointer-events-none">
        <span className="text-5xl md:text-6xl font-black text-white/30 font-mono tracking-tighter">06</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
             <div className="p-3 rounded-full bg-midnight-900 border border-neon-cyan/30 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <HelpCircle className="text-neon-cyan" size={32} />
             </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            常見問題 <span className="text-neon-cyan font-mono">Q&A</span>
          </h2>
          <p className="text-slate-400">消除您的疑慮，放心邁向科技美容之路</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index 
                  ? 'bg-midnight-900/60 border-neon-cyan shadow-[0_0_15px_rgba(0,240,255,0.1)]' 
                  : 'bg-midnight-900/20 border-slate-800 hover:border-slate-600'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-lg font-medium transition-colors ${openIndex === index ? 'text-white' : 'text-slate-300'}`}>
                  {faq.question}
                </span>
                <span className={`ml-4 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-neon-cyan' : 'text-slate-500'}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50" dangerouslySetInnerHTML={{ __html: faq.answer }}>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;