import React, { useState } from 'react';
import { Link } from 'gatsby';
import { SERVICE_DATA } from '../../constants';

const SubMenu = ({ className }) => (
  <div
    onClick={(e) => e.stopPropagation()}
    className={`hidden static md:absolute top-[100%] left-0 bg-white z-50 p-2 shadow-md rounded w-[620px] text-left ${className}`}
  >
    {SERVICE_DATA.map((block) => (
      <div className={`p-6 w-[${block.width}%]`}>
        <div className="text-xl mb-4 font-gilroySemiBold">{block.title}</div>
        {block.items.map((subMenu) => (
          <Link key={subMenu.id} className="mb-3 block hover:text-blred-500 cursor-pointer" to={subMenu.link}>
            {subMenu.title}
          </Link>
        ))}
      </div>
    ))}
  </div>
);

const MobSubMenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div key={item.id} className="pt-5 pb-2 mt-2 bg-[#f2f2f2] rounded">
      <div
        onClick={() => setOpen(!open)}
        className="text-xl mb-4 font-gilroySemiBold text-left pl-6 cursor-pointer relative"
      >
        <svg
          style={{ transform: open ? 'rotate(-45deg)' : 'none' }}
          className="absolute top-0 right-4 w-[22px] h-[22px] transition-transform duration-300"
          width="31"
          height="31"
          viewBox="0 0 31 31"
        >
          <path d="M15.6096 0.55957V30.5596" strokeWidth="2" stroke="#d01829" />
          <path d="M0.609619 15.5596L30.6096 15.5596" strokeWidth="2" stroke="#d01829" />
        </svg>
        {item.title}
      </div>
      {open && item.items.map((s) => (
        <Link
          key={s.id}
          className="block hover:text-blred-500 text-center p-4 cursor-pointer"
          to={s.link}
        >
          {s.title}
        </Link>
      ))}
    </div>
  );
};

export const MobSubMenu = () => (
  <div className="md:hidden">
    {SERVICE_DATA.map((item) => (<MobSubMenuItem key={item.id} item={item} />))}
  </div>
);

export default SubMenu;
