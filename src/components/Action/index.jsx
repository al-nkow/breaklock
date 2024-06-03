import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../Button';
import Wrap from '../Wrap';
import { PHONE } from '../../constants';

const Action = ({ toggleCallModal, text }) => (
  <Wrap extClassName="py-10 bg-[#f9f9f9]" intClassName="text-center md:flex">
    <div
      className="
        sm:block
        md:w-1/2
        md:p-5
        lg:p-8
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
        formats={['auto', 'webp', 'avif']}
        alt=""
      />
    </div>
    <div className="md:w-1/2 md:text-left md:p-6">
      <div
        className="
          font-gilroyMedium
          text-lg
          mb-5
          md:text-2xl
          lg:pr-20
          lg:pt-10
          lg:mb-8
        "
      >
        {
          text || (
            <>
              Не тратьте драгоценное время! Доверьте Вашу ситуацию профессионалам.
              Оставьте заявку или позвоните нам, чтобы получить полную консультацию.
              Возможно выезд специалиста не потребуется.
            </>
          )
        }
      </div>
      <div className="mb-6 sm:hidden">
        <StaticImage
          placeholder="blurred"
          width={205}
          src="./images/man.png"
          formats={['auto', 'webp', 'avif']}
          alt=""
        />
      </div>
      <div>
        <Button
          className="md:ml-0 mx-3 mb-3"
          onClick={toggleCallModal}
        >
          Заказать звонок
        </Button>
        <Button
          className="md:ml-0 mx-3"
          type="borderBlack"
          onClick={() => window.open(`tel:${PHONE}`, '_self')}
        >
          Позвонить
        </Button>
      </div>
    </div>
  </Wrap>
);

export default Action;
