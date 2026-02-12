import React, { useState } from 'react';
import Button from './Button';
import { Send, Check, User, Phone, Mail, Award, Loader2 } from 'lucide-react';

const RegistrationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    qualification: '' // Changed from array to single string
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // ★★★ 請將下方的網址替換成您部署後的 Google Apps Script 網址 ★★★
  const GOOGLE_SCRIPT_URL = "您的_GOOGLE_SCRIPT_URL_填在這裡";

  const qualificationOptions = [
    { id: 'teacher', label: '學校老師' },
    { id: 'b-class', label: '乙級美容師' },
    { id: 'practitioner', label: '美容從業人員' },
    { id: 'interested', label: '有興入職者' }
  ];

  const handleSelectionChange = (label: string) => {
    setFormData(prev => ({ ...prev, qualification: label }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.qualification) {
      setErrorMsg('請選擇您的目前資歷');
      return;
    }
    
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      if (GOOGLE_SCRIPT_URL === "您的_GOOGLE_SCRIPT_URL_填在這裡") {
        // 模擬模式 (尚未設定 URL 時)
        console.warn("尚未設定 Google Script URL，僅執行模擬送出");
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form Data:', formData);
        setSubmitted(true);
      } else {
        // 真實送出模式
        // 使用 no-cors 模式以避開 Google 的 CORS 限制，雖然無法讀取回應，但資料會成功送達
        await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        
        // 假設成功 (因為 no-cors 模式無法讀取 response status)
        setSubmitted(true);
        setFormData({
            name: '',
            phone: '',
            email: '',
            qualification: ''
        });
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setErrorMsg("傳送失敗，請檢查網路連線或稍後再試。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="registration-form" className="py-24 bg-gradient-to-b from-midnight-950 to-black relative border-t border-slate-800/50">
      {/* Section Marker */}
      <div className="absolute top-0 left-0 z-20 pl-6 pt-6 pointer-events-none">
        <span className="text-5xl md:text-6xl font-black text-white/30 font-mono tracking-tighter">10</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              線上 <span className="text-neon-cyan">預約報名</span>
            </h2>
            <p className="text-slate-400">
              請填寫下方資訊，我們將保留您的優先席次，並盡快與您聯繫確認。
            </p>
          </div>

          <div className="bg-midnight-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.3)] relative overflow-hidden">
            
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-[80px] pointer-events-none"></div>

            {submitted ? (
              <div className="text-center py-12 animate-fadeIn">
                <div className="w-20 h-20 bg-neon-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-neon-cyan/50 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                  <Check className="w-10 h-10 text-neon-cyan" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">報名資料已送出！</h3>
                <p className="text-slate-300 text-lg mb-8">
                  感謝您的報名，我們的課程顧問將於 24 小時內與您聯繫。<br/>
                  請留意您的手機與電子信箱。
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline">
                  返回表單
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                
                {/* Personal Info Group */}
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                        <User size={16} className="text-neon-cyan" /> 姓名
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full bg-midnight-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all disabled:opacity-50"
                        placeholder="請輸入您的真實姓名"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                        <Phone size={16} className="text-neon-cyan" /> 手機號碼
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full bg-midnight-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all disabled:opacity-50"
                        placeholder="09xx-xxx-xxx"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                      <Mail size={16} className="text-neon-cyan" /> 電子郵件
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-midnight-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all disabled:opacity-50"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                {/* Qualifications Group - Single Select */}
                <div className="space-y-4 pt-4 border-t border-slate-800">
                  <label className="flex items-center gap-2 text-slate-300 text-sm font-medium mb-2">
                    <Award size={16} className="text-amber-400" /> 目前資歷 (單選)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {qualificationOptions.map((option) => (
                      <label 
                        key={option.id}
                        className={`
                          flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-300
                          ${formData.qualification === option.label 
                            ? 'bg-neon-cyan/10 border-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.1)]' 
                            : 'bg-midnight-950/50 border-slate-700 hover:border-slate-500'}
                          ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
                        `}
                      >
                        <div className={`
                          w-5 h-5 rounded-full border flex items-center justify-center transition-colors
                          ${formData.qualification === option.label
                            ? 'bg-neon-cyan border-neon-cyan text-midnight-950'
                            : 'bg-transparent border-slate-500'}
                        `}>
                          {formData.qualification === option.label && <div className="w-2 h-2 rounded-full bg-midnight-950" />}
                        </div>
                        <input 
                          type="radio" 
                          name="qualification"
                          className="hidden"
                          checked={formData.qualification === option.label}
                          onChange={() => !isSubmitting && handleSelectionChange(option.label)}
                          disabled={isSubmitting}
                        />
                        <span className={`${formData.qualification === option.label ? 'text-white' : 'text-slate-400'}`}>
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {errorMsg && (
                    <div className="text-red-400 text-sm text-center bg-red-900/20 p-2 rounded-lg border border-red-900/50">
                        {errorMsg}
                    </div>
                )}

                <div className="pt-6">
                  <Button type="submit" fullWidth variant="primary" className="flex items-center justify-center gap-2 text-lg h-14" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <>
                            <Loader2 className="animate-spin" size={20} /> 資料傳送中...
                        </>
                    ) : (
                        <>
                            確認送出資料 <Send size={20} />
                        </>
                    )}
                  </Button>
                  <p className="text-center text-slate-500 text-sm mt-4">
                    提交即代表您同意本課程之服務條款與隱私權政策
                  </p>
                </div>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;