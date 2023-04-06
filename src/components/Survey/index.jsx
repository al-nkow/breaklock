import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Survey = () => {
  return (
    <div className="px-4 py-10 bg-[#f9f9f9]">
      <div className="max-w-screen-xl mx-auto text-center md:flex">
        <div
          className="
            sm:block
            md:w-1/2
            md:p-5
            lg:p-10
            hidden
            w-2/3
            mx-auto
            mb-6
          "
        >
          <StaticImage
            placeholder="blurred"
            width={600}
            src="./images/manLg.png"
            formats={["auto", "webp", "avif"]}
            alt=""
          />
        </div>
        <div className="md:w-1/2 md:text-left md:p-6">
          <div
            className="
              text-lg
              mb-5
              md:text-2xl
              lg:text-3xl
              lg:pr-20
              lg:pt-10
            "
          >
            Пройдите небольшой опрос и узнайте цену на нужную услугу, 
            ну а если времени нет, звоните прямо сейчас
          </div>
          <StaticImage
            className="mb-6 sm:hidden"
            placeholder="blurred"
            width={205}
            src="./images/man.png"
            formats={["auto", "webp", "avif"]}
            alt=""
          />
          <div>
            <button
              className="
                md:ml-0
                md:text-base
                md:h-[58px]
                md:text-base
                mx-3
                mb-3
                text-sm
                text-white
                w-[210px]
                h-[44px]
                bg-blred-500
                hover:bg-red-700
                rounded-full
              "
            >
              Заказать звонок
            </button>
            <button
              className="
                md:mx-0
                md:text-base
                md:h-[58px]
                md:text-base
                mx-3
                border-2
                border-black
                text-sm
                hover:bg-gray-200
                w-[210px]
                h-[44px]
                bg-transparent
                rounded-full
              "
            >
              Пройти тест
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Survey;
