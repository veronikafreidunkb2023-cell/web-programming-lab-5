export default function Languages() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-[#6c057c] border-l-4 border-[#6c057c] pl-4 mb-3 uppercase tracking-wider">
        Languages
      </h2>
      <ul className="grid grid-cols-2 gap-4">
        <li className="text-gray-300 flex items-center gap-2"><span className="w-2 h-2 bg-[#6c057c] rounded-full"></span> Ukrainian (Native)</li>
        <li className="text-gray-300 flex items-center gap-2"><span className="w-2 h-2 bg-[#6c057c] rounded-full"></span> English (Intermediate)</li>
      </ul>
    </section>
  );
}