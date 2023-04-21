import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../Button';

const Discount = ({ toggleCallModal }) => (
  <div className="h-[360px] bg-[#f9f9f9] relative overflow-hidden">
    <StaticImage
      className="absolute top-0 bottom-0"
      placeholder="blurred"
      src="./images/bg.jpg"
      formats={['auto', 'webp', 'avif']}
      alt=""
    />
    <div className="absolute top-0 bottom-0 left-0 right-0 text-white text-center py-8 px-4 flex flex-col justify-center items-center">
      <div className="text-4xl mb-3">
        Дарим скидку <span className="text-blred-500">20%</span> на<br />замену после вскрытия
      </div>
      <div className="font-gilroyLight text-2xl mb-6">Оставьте заявку чтобы получить скидку</div>
      <Button
        className="md:ml-0 mx-3 mb-3"
        onClick={toggleCallModal}
      >
        Оставить заявку
      </Button>
    </div>
  </div>
);

export default Discount;
