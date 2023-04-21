import React from 'react';
import Menu from '../Menu';
import { StaticImage } from 'gatsby-plugin-image';
import background from './images/bg.jpg';

import Button from '../Button';

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
          <Button
            onClick={toggleCallModal}
            bold
          >
            Оставить заявку
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Info;