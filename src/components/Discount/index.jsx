import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// 482 px

const Discount = () => {
  return (
    <div className="h-[360px] bg-[#f9f9f9] relative overflow-hidden">
      <StaticImage
        className="absolute top-0 bottom-0"
        placeholder="blurred"
        src="./images/bg.jpg"
        formats={["auto", "webp", "avif"]}
        alt=""
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 text-white text-center py-8 flex flex-col justify-center items-center">
        <div className="text-4xl mb-3">
          Дарим скидку <span className="text-blred-500">20%</span> на<br />замену после вскрытия
        </div>
        <div className="font-gilroyLight text-2xl mb-5">Оставьте заявку чтобы получить скидку</div>
        <button
          className="
            md:my-0
            md:text-base
            md:h-[58px]
            md:text-base
            text-sm
            text-white
            w-[210px]
            h-[44px]
            bg-blred-500
            hover:bg-red-700
            rounded-full
            font-gilroyLight
            font-semibold
          "
        >
          Оставить заявку
        </button>
      </div>
    </div>
  )
}

export default Discount;

// import { withPrefix } from 'gatsby';
// <div style={{ backgroundImage: `url(${withPrefix('/images/image.png')})` }} />
