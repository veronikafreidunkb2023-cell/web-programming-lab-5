import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000); 

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4">
      <div className="bg-[#0a0a0a] border border-[#6c057c] rounded-[2rem] p-8 max-w-md w-full shadow-2xl relative">
        
        {}
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-6 right-6 text-gray-500 hover:text-[#6c057c] transition-colors"
        >
          ✕
        </button>
        
        <h3 className="text-2xl font-black text-white mb-2">Зворотний зв'язок</h3>
        <p className="text-gray-500 text-sm mb-6">Будь ласка, заповніть форму нижче</p>
        
        {}
        <form 
          action="https://formspree.io/f/mgoplolr" 
          method="POST" 
          className="space-y-4"
        >
          <div>
            <label className="block text-[10px] font-black text-gray-500 uppercase mb-1 ml-1">Ім'я</label>
            <input type="text" name="name" required className="w-full p-3 bg-black border border-neutral-800 rounded-xl focus:border-[#6c057c] outline-none text-white transition-all" />
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-500 uppercase mb-1 ml-1">Email</label>
            <input type="email" name="email" required className="w-full p-3 bg-black border border-neutral-800 rounded-xl focus:border-[#6c057c] outline-none text-white transition-all" />
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-500 uppercase mb-1 ml-1">Телефон</label>
            <input type="tel" name="phone" required className="w-full p-3 bg-black border border-neutral-800 rounded-xl focus:border-[#6c057c] outline-none text-white transition-all" />
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-500 uppercase mb-1 ml-1">Повідомлення</label>
            <textarea name="message" required className="w-full p-3 bg-black border border-neutral-800 rounded-xl h-24 focus:border-[#6c057c] outline-none text-white resize-none transition-all"></textarea>
          </div>
          <button type="submit" className="w-full py-4 bg-[#6c057c] text-white font-black rounded-xl hover:bg-[#8a0ba1] shadow-lg shadow-[#6c057c]/20 transition-all active:scale-95 uppercase">
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}