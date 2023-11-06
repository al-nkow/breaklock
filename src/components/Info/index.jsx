import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import background from './images/bg.jpg';
import Menu from '../Menu';
import Wrap from '../Wrap';
import Button from '../Button';
import { ANIMATION_PROPS } from '../../constants';

const Info = ({
  open, toggleMenu, toggleCallModal, children,
}) => (
  <Wrap
    style={{ backgroundImage: `url(${background})` }}
    extClassName="bg-cover showscroll"
    intClassName="min-h-[300px] md:h-[530px] min-[875px]:h-[600px] relative overflow-hidden"
  >
    <Menu open={open} toggleMenu={toggleMenu} />
    <div className="pt-7 md:pl-5 md:pt-[10%] lg:pl-10" {...ANIMATION_PROPS}>
      <h1 className="text-3xl md:text-4xl min-[960px]:text-5xl min-[960px]:leading-[52px] font-gilroyBold">
        {children}
      </h1>
      <div className="mt-2 mb-8 font-gilroyLight text-xl sm:text-2xl sm:leading-8">
        Срочный сервис в<br />
        Санкт-Петербурге и Области
      </div>
      <Button
        className="mb-8"
        onClick={toggleCallModal}
      >
        Оставить заявку
      </Button>
    </div>
    <div
      className="
        w-[85%] min-[578px]:w-[240px] md:w-[400px] min-[875px]:w-auto
        min-[578px]:absolute min-[578px]:bottom-0 min-[578px]:right-[15px]
        mb-[-20%] min-[578px]:mb-0
        block mx-auto"
    >
      <StaticImage
        placeholder="blurred"
        class="block"
        height={540}
        src="./images/dudes.png"
        formats={['auto', 'webp', 'avif']}
        alt=""
      />
    </div>
  </Wrap>
);

export default Info;
