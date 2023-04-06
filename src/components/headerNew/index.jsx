import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import EmailBlock from '../EmailBlock';
import PhoneBlock from '../PhoneBlock';

const Header = () => {
  return (
    <div className="py-6 px-4 border border-b-slate-300">
      <div className='max-w-screen-xl mx-auto'>
        <div className="flex flex-row items-center">
          <div className="flex-none w-2/3 md:w-2/6 lg:w-2/5">
            <StaticImage placeholder="blurred" width={231} src="./images/logo.png" formats={["auto", "webp", "avif"]} alt="" />
          </div>
          <EmailBlock className="flex-1 hidden md:block" />
          <PhoneBlock collapsed />
          <div className="flex-none md:flex-1 text-right">
            <button className="font-medium bg-blred-500 hover:bg-red-700 text-white py-4 sm:px-4 lg:px-8 xl:px-9 rounded-full hidden md:inline">
              Заказать звонок
            </button>
            <svg className="fill-blred-500 md:hidden inline p-2 w-12 cursor-pointer" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="22" height="3" rx="1.5"/>
              <rect y="7" width="22" height="3" rx="1.5"/>
              <rect y="14" width="22" height="3" rx="1.5"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Header;
