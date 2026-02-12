import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-midnight-950 border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
      <div className="container mx-auto px-4">
        <p>&copy; 2026 Future Beauty Academy. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="hover:text-neon-cyan transition-colors">隱私權政策</a>
          <a href="#" className="hover:text-neon-cyan transition-colors">服務條款</a>
          <a href="#" className="hover:text-neon-cyan transition-colors">聯絡我們</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;