import React, { useEffect, useState } from 'react';

const ScrollUp = () => {
  const [visible, setVisible] = useState(typeof window !== 'undefined' && window.scrollY > 100);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    if (typeof window !== 'undefined') window.addEventListener('scroll', handleScroll);
    return () => (typeof window !== 'undefined') && window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return '';

  return (
    <div
      onClick={scrollTop}
      className="hidden md:block fixed text-blred-500 bottom-12 right-6 w-11 h-11 bg-[#f9f9f9] shadow-lg rounded cursor-pointer border-2 border-slate-400"
    >
      <svg className="w-10 h-10" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z"
          fill="#333333"
        />
      </svg>
    </div>
  );
};

export default ScrollUp;
