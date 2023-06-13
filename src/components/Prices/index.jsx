import React from 'react';
import Wrap from '../Wrap';
import data from './data';
import Button from '../Button';

import { ANIMATION_PROPS } from '../../constants';

const Prices = ({ toggleCallModal, setOrder }) => (
  <Wrap extClassName="py-12 lg:py-16 text-center">
    <div className="sm:grid lg:grid-cols-3 xl:grid-cols-3 grid-cols-2 gap-4" {...ANIMATION_PROPS}>
      {data.map(({
        id, title, description, disclaimer, price, image, button, target,
      }) => (
        <div className="w-full shadow-md rounded mb-6 overflow-hidden relative" id={target || id} key={id}>
          <img className="w-full" src={image} alt="" />
          <div className="p-5 pb-28">
            <div className="mb-4 font-gilroyMedium text-2xl">{title}</div>
            <div className="mb-2">
              {description}
            </div>
            {disclaimer && <div className="text-sm italic opacity-60">* {disclaimer}</div>}
            {price && (
              <Button
                className="absolute bottom-8 left-[50%] -translate-x-[50%]"
                onClick={() => setOrder(`${title}. Стоимость от ${price} ₽`)}
              >
                Заказать от {price} ₽
              </Button>
            )}
            {button && (
              <Button className="absolute bottom-8 left-[50%] -translate-x-[50%]" onClick={toggleCallModal}>
                Оставить заявку
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  </Wrap>
);

export default Prices;
