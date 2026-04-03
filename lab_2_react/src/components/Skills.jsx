export default function Skills() {
  const skills = ["JavaScript & React", "Python", "Cybersecurity Fundamentals", "Git & GitHub"];
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-[#6c057c] border-l-4 border-[#6c057c] pl-4 mb-4 uppercase tracking-wider">
        Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="bg-[#6c057c]/20 text-[#6c057c] border border-[#6c057c]/40 px-3 py-1 rounded-full text-sm font-medium hover:bg-[#6c057c] hover:text-white transition-all">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}