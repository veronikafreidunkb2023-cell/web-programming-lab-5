export default function Header() {
  return (
    <header className="mb-10 border-b-2 border-[#6c057c] pb-6">
      <h1 className="text-5xl font-black text-white mb-2 tracking-tight">
        Veronika Freidun
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 text-gray-400">
        <p><span className="text-[#6c057c] font-bold uppercase text-sm">Email:</span> veronika.kb.2023@lpnu.ua</p>
        <p><span className="text-[#6c057c] font-bold uppercase text-sm">Location:</span> Lviv, Ukraine</p>
      </div>
    </header>
  );
}