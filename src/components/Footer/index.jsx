import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { MENU_ITEMS } from '../../constants';
import EmailBlock from '../EmailBlock';
import PhoneBlock from '../PhoneBlock';
import scroll from '../../utils/scroll';

const YEAR = new Date().getFullYear();

const Footer = () => (
  <>
    <div className="p-5 sm:p-8 min-h-[200px] bg-[#272727]">
      <div className="text-center sm:text-left sm:flex max-w-screen-2xl mx-auto items-stretch">
        <div className="mb-8 px-2 sm:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[25%]">
          <StaticImage
            width={231}
            placeholder="blurred"
            src="./images/logoWhite.png"
            formats={['auto', 'webp', 'avif']}
            alt=""
          />
        </div>
        <div className="hidden lg:grid lg:w-[45%] xl:w-[35%] px-2 text-white grid-rows-3 grid-flow-col gap-4 font-gilroyLight font-semibold">
          {MENU_ITEMS.map(({ id, title, target }) => (
            <div onClick={() => scroll(target)} className="cursor-pointer hover:text-blblue-500" key={id}>{title}</div>
          ))}
        </div>
        <div className="sm:w-[50%] md:flex md:w-[55%] lg:w-[25%] lg:block xl:flex xl:w-[40%]">
          <div className="sm:justify-end md:w-[50%] lg:w-full px-2 flex justify-center mb-4">
            <EmailBlock className="text-white" />
          </div>
          <div className="sm:justify-end md:w-[50%] lg:w-full px-2 flex justify-center">
            <PhoneBlock className="text-white" />
          </div>
        </div>
      </div>
    </div>
    <div
      className="h-[60px] text-white bg-[#222222] flex flex-col items-center justify-center text-sm font-gilroyLight font-semibold"
    >
      Все права защищены. {YEAR}
    </div>
  </>
);

export default Footer;
