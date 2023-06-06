import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { MENU_ITEMS } from '../../constants';
import EmailBlock from '../EmailBlock';
import PhoneBlock from '../PhoneBlock';
import clickMenuItem from '../../utils/clickMenuItem';
import Wrap from '../Wrap';

const YEAR = new Date().getFullYear();

const MENU = MENU_ITEMS.filter(({ id }) => id !== '6');

const Footer = () => (
  <>
    <Wrap extClassName="py-8 min-h-[200px] bg-[#272727]" intClassName="text-center sm:text-left sm:flex max-w-screen-xl mx-auto items-stretch">
      <div className="mb-8 px-2 sm:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[25%]">
        <StaticImage
          width={231}
          placeholder="blurred"
          src="./images/logoWhite.png"
          formats={['auto', 'webp', 'avif']}
          alt=""
        />
      </div>
      <div className="hidden lg:grid lg:w-[45%] xl:w-[35%] px-2 text-white grid-rows-3 grid-flow-col gap-4">
        {MENU.map(({
          id, title, target, link,
        }) => (
          <div onClick={() => clickMenuItem(target, link)} className="cursor-pointer hover:text-blblue-500" key={id}>
            {title}
          </div>
        ))}
      </div>
      <div className="sm:w-[50%] md:flex md:w-[55%] lg:w-[25%] lg:block xl:flex xl:w-[40%]">
        <div className="md:justify-end md:w-[50%] lg:w-full px-2 flex justify-center mb-4">
          <EmailBlock className="text-white" />
        </div>
        <div className="md:justify-end md:w-[50%] lg:w-full px-2 flex justify-center">
          <PhoneBlock className="text-white" />
        </div>
      </div>
    </Wrap>
    <div
      className="h-[60px] text-white bg-[#222222] flex flex-col items-center justify-center text-sm"
    >
      Все права защищены. {YEAR}
    </div>
  </>
);

export default Footer;
