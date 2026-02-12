import React, { useState } from 'react';
import { X } from 'lucide-react';
import Button from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-midnight-950/90 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative bg-midnight-900 border border-slate-700 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-2xl w-full max-w-md p-8 transform transition-all animate-fadeIn">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-neon-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-neon-cyan/50 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              <svg className="w-8 h-8 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">報名成功！</h3>
            <p className="text-slate-300">我們已將課程資訊寄送至您的信箱。</p>
            <Button onClick={onClose} variant="outline" className="mt-6">關閉視窗</Button>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-white mb-2 text-center">保留免費席位</h3>
            <p className="text-slate-400 text-center mb-6 text-sm">請填寫下方資料，顧問將於 24 小時內與您聯繫。</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-slate-300 text-sm mb-1">姓名</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-midnight-950/50 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_10px_rgba(0,240,255,0.1)] transition-all"
                  placeholder="請輸入您的姓名"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm mb-1">電話</label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-midnight-950/50 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_10px_rgba(0,240,255,0.1)] transition-all"
                  placeholder="09xx-xxx-xxx"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm mb-1">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-midnight-950/50 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_10px_rgba(0,240,255,0.1)] transition-all"
                  placeholder="your@email.com"
                />
              </div>
              
              <Button type="submit" fullWidth className="mt-4" variant="primary">
                立即送出
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;