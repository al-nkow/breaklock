import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import EmailBlock from '../EmailBlock';
import PhoneBlock from '../PhoneBlock';
import SvgIcon from '../SvgIcon';

const Header = ({ toggleMenu, toggleCallModal }) => {
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
            <button
              onClick={toggleCallModal}
              className="font-medium bg-blred-500 hover:bg-red-700 text-white py-4 sm:px-4 lg:px-8 xl:px-9 rounded-full hidden md:inline"
            >
              Заказать звонок
            </button>
            <SvgIcon icon="menu" onClick={toggleMenu} className="fill-blred-500 md:hidden inline p-2 w-12 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Header;
