import React, { useState } from 'react';

const FAQItem = ({ qstn, resp }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 bg-[#ffffff] p-4 sm:p-8 rounded max-w-[960px] mx-auto relative">
      <div onClick={() => setOpen(!open)} className="pr-10 cursor-pointer font-gilroyBold text-lg mb-2">{qstn}</div>
      {open && <div data-aos="fade-in" data-aos-duration="500" data-aos-once="true">{resp}</div>}
      <svg
        onClick={() => setOpen(!open)}
        style={{ transform: open ? 'rotate(-45deg)' : 'none' }}
        className="absolute top-7 right-5 cursor-pointer w-[28px] h-[28px] transition-transform duration-300"
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.6096 0.55957V30.5596" strokeWidth="2" stroke="#d01829" />
        <path d="M0.609619 15.5596L30.6096 15.5596" strokeWidth="2" stroke="#d01829" />
      </svg>
    </div>
  );
};

export default FAQItem;

// {open && <div data-aos="fade-in" data-aos-duration="500" data-aos-once="true">{children}</div>}
