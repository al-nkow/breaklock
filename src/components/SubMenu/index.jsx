import React from 'react';
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

export const MobSubMenu = () => (
  <div className="md:hidden">
    {SERVICE_DATA.map((item) => (
      <div key={item.id} className="pt-5 pb-2 mt-2 bg-[#f2f2f2] rounded">
        <div className="text-xl mb-4 font-gilroySemiBold text-center">{item.title}</div>
        {item.items.map((s) => (
          <Link
            key={s.id}
            className="block hover:text-blred-500 text-center p-4 cursor-pointer"
            to={s.link}
          >
            {s.title}
          </Link>
        ))}
      </div>
    ))}
  </div>
);

export default SubMenu;
