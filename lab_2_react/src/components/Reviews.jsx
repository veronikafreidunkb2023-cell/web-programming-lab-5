import { useEffect, useState } from 'react';

export default function Reviews() {
  const [comments, setComments] = useState([]); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/30/comments')
      .then(response => response.json()) 
      .then(data => {
        setComments(data); 
      })
      .catch(error => console.error('Помилка завантаження:', error));
  }, []); 

  return (
    <section className="mt-[2rem]">
      {}
      <h2 className="text-[#6c057c] border-l-[4px] border-[#6c057c] pl-[15px] uppercase tracking-[1px] text-[1.5rem] font-bold mb-6 flex items-center gap-4">
        Відгуки роботодавців
        <div className="h-px flex-grow bg-[#333]"></div>
      </h2>

      <div className="grid grid-cols-1 gap-6">
        {}
        {comments.map((comment) => (
          <div key={comment.id} className="p-5 bg-[#111] rounded-xl border border-neutral-800 hover:border-[#6c057c] transition-colors shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              {}
              <div className="w-8 h-8 rounded-full bg-[#6c057c] flex items-center justify-center text-white font-bold text-xs uppercase">
                {comment.email[0]}
              </div>
              <span className="text-sm font-bold text-[#6c057c] italic">{comment.email}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {comment.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}