import React from 'react';
import Menu from '../Menu';
import background from './images/bg.jpg';
import { StaticImage } from 'gatsby-plugin-image';

const Info = ({ open, toggleMenu, toggleCallModal }) => {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="bg-cover">
      <div className='h-[600px] relative max-w-screen-xl mx-auto'>
        <Menu open={open} toggleMenu={toggleMenu} />
        <StaticImage
          placeholder="blurred"
          class="absolute bottom-0 right-[100px]"
          height={540}
          src="./images/dudes.png"
          formats={["auto", "webp", "avif"]}
          alt="" />
        <div className="pt-[10%] pl-10">
          <span className="text-5xl leading-[52px] font-semibold">
            <span className="text-blred-500">Вскрытие</span> всех типов<br/>
            <span className="text-blred-500">Замков</span> 24/7
          </span>
          <div className="mt-2 mb-8 font-gilroyLight text-2xl leading-8">
            Срочный сервис в<br/>
            Санкт-Петербурге и Области
          </div>
          <button
            onClick={toggleCallModal}
            className="font-medium bg-blred-500 hover:bg-red-700 text-white font-bold py-4 sm:px-4 lg:px-8 xl:px-9 rounded-full hidden md:inline"
          >
            Оставить заявку
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info;