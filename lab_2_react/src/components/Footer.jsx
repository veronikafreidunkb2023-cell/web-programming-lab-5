import { useEffect, useState } from 'react'; 

export default function Footer() {
  const [systemInfo, setSystemInfo] = useState(''); 

  useEffect(() => {

    const info = `Браузер: ${navigator.userAgent} | Платформа: ${navigator.platform}`;
    localStorage.setItem('os_browser_info', info);
    const savedData = localStorage.getItem('os_browser_info');
    setSystemInfo(savedData);
  }, []); 

  return (
    <footer className="mt-[2rem] pt-[20px] border-t border-[#333] text-center">
      <div className="mb-4 text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">
        Системні дані з localStorage: <br />
        <span className="text-[#6c057c] font-medium">{systemInfo}</span>
      </div>

      <p className="text-gray-500 text-sm">
        © 2026 Veronika Freidun. Created for <span className="text-[#6c057c] font-medium">Web Programming Lab</span>
      </p>
    </footer>
  );
}