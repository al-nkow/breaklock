/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Title from '../Title';
import Wrap from '../Wrap';
import Door from './icons/door.svg';
import Truck from './icons/truck.svg';
import Location from './icons/location.svg';
import Percentage from './icons/percentage.svg';
import { ANIMATION_PROPS } from '../../constants';

const iconClassName = 'absolute top-6 left-4 h-[52px] w-[52px] sm:h-[78px] sm:w-[78px] sm:top-4';
const truckIconClassName = 'absolute top-4 left-2 h-[64px] w-[64px] sm:h-[96px] sm:w-[96px] sm:top-2';
const Items = [
  {
    id: 1,
    icon: <Location className={iconClassName} />,
    text: <>Работаем во всех<br />районах СПб</>,
  }, {
    id: 2,
    icon: <Door className={iconClassName} />,
    text: <>Открываем без<br />повреждения двери</>,
  }, {
    id: 3,
    icon: <Percentage className={iconClassName} />,
    text: <>Скидки на замену<br />после вскрытия</>,
  }, {
    id: 4,
    icon: <Truck className={truckIconClassName} />,
    text: <>Приезд специалиста<br />от 15 мин.</>,
  },
];

const Advantages = () => (
  <Wrap extClassName="py-12 lg:py-16 text-center">
    <Title>Почему выбирают нас</Title>
    <div
      {...ANIMATION_PROPS}
      className="grid gap-4 sm:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1
      max-w-6xl mx-auto"
    >
      {Items.map(({ id, text, icon }) => (
        <div
          key={id}
          className="
            p-5 pl-28 sm:pt-28 sm:pl-5
            relative w-full shadow-md rounded
            text-left lg:text-lg"
        >
          {icon}
          {text}
        </div>
      ))}
    </div>
  </Wrap>
);

export default Advantages;
