import React, { useState } from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import Syllabus from './components/Syllabus';
import Instructor from './components/Instructor';
import FAQ from './components/FAQ';
import Comparison from './components/Comparison';
import Entrepreneurship from './components/Entrepreneurship';
import RegistrationSection from './components/RegistrationSection';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Function to scroll to registration form
  const scrollToRegistration = () => {
    const section = document.getElementById('registration-form');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      openModal(); // Fallback if section not found
    }
  };

  return (
    <div className="min-h-screen bg-midnight-950 text-slate-200 font-sans selection:bg-neon-cyan/30 selection:text-white">
      {/* P.01: Now includes course details */}
      <Hero onRegister={scrollToRegistration} />
      
      {/* P.02: Pain Points */}
      <PainPoints />
      
      {/* P.03: Solution */}
      <Solution />
      
      {/* P.04: Syllabus */}
      <Syllabus />
      
      {/* P.05: Instructors */}
      <Instructor />
      
      {/* P.06: FAQ */}
      <FAQ />
      
      {/* P.07: Comparison */}
      <Comparison />
      
      {/* P.08: Entrepreneurship */}
      <Entrepreneurship />
      
      {/* P.09: Removed per user request (Info moved to Hero) */}
      
      {/* P.10: Registration Section */}
      <RegistrationSection />
      
      {/* P.11: Sponsors */}
      <Sponsors />
      
      <Footer />
      
      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;