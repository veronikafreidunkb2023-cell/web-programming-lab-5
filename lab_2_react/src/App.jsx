import { useState, useEffect } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Languages from './components/Languages';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const currentHour = new Date().getHours(); 
    
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []); 


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 p-[40px] ${
      theme === 'dark' ? 'bg-[#0a0a0a] text-[#e5e7eb]' : 'bg-[#fafafa] text-[#1a1a1a]'
    }`}>
      
      {}
      <button 
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-[110] p-3 rounded-full bg-white shadow-xl border border-[#6c057c]/20 hover:scale-110 transition-all text-2xl"
      >
        {theme === 'light' ? '🌑' : '☀️'}
      </button>

      <div className="max-w-[900px] mx-auto leading-[1.6]">
        <Header />
        
        <div className="space-y-[20px]">
          <Profile />
          <Education />
          <Skills />
          <Experience />
          <Languages />
          <Reviews />
        </div>

        <Footer />
        <ContactForm />
      </div>
    </div>
  );
}