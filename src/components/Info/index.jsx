import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import background from './images/bg.jpg';
import Menu from '../Menu';
import Wrap from '../Wrap';
import Button from '../Button';

const Info = ({ open, toggleMenu, toggleCallModal }) => (
  <Wrap
    style={{ backgroundImage: `url(${background})` }}
    extClassName="bg-cover"
    intClassName="min-h-[300px] md:h-[530px] min-[875px]:h-[600px] relative overflow-hidden"
  >
    <Menu open={open} toggleMenu={toggleMenu} />
    <div className="pt-7 md:pl-5 md:pt-[10%] lg:pl-10">
      <span className="text-3xl md:text-4xl min-[960px]:text-5xl min-[960px]:leading-[52px] md:font-semibold">
        <span className="text-blred-500">Вскрытие</span> всех типов<br />
        <span className="text-blred-500">Замков</span> 24/7
      </span>
      <div className="mt-2 mb-8 font-gilroyLight text-xl sm:text-2xl sm:leading-8">
        Срочный сервис в<br />
        Санкт-Петербурге и Области
      </div>
      <Button
        className="mb-8"
        onClick={toggleCallModal}
        bold
      >
        Оставить заявку
      </Button>
    </div>
    <StaticImage
      placeholder="blurred"
      class="
        w-[85%] min-[578px]:w-[240px] md:w-[400px] min-[875px]:w-auto
        min-[578px]:absolute min-[578px]:bottom-0 min-[578px]:right-[15px]
        mb-[-20%] min-[578px]:mb-0
        block mx-auto
      "
      height={540}
      src="./images/dudes.png"
      formats={['auto', 'webp', 'avif']}
      alt=""
    />
  </Wrap>
);

export default Info;
