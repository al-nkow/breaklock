import React from 'react';
import Title from '../Title';
import Percentage from './icons/percentage.svg';
import Location from './icons/location.svg';
import Door from './icons/door.svg';
import Truck from './icons/truck.svg';

const iconClassName =      'absolute top-6 left-4 h-[52px] w-[52px] sm:h-[78px] sm:w-[78px] sm:top-4';
const truckIconClassName = 'absolute top-4 left-2 h-[64px] w-[64px] sm:h-[96px] sm:w-[96px] sm:top-2';
const Items = [
  {
    id: 1, icon: <Location className={iconClassName} />, text: <>Работаем во всех<br />районах СПб</>,
  }, {
    id: 2, icon: <Door className={iconClassName} />, text: <>Открываем без<br />повреждения двери</>,
  }, {
    id: 3, icon: <Percentage className={iconClassName} />, text: <>Скидки на замену<br />после вскрытия</>,
  }, {
    id: 4, icon: <Truck className={truckIconClassName} />, text: <>Приезд специалиста<br />от 15 мин.</>,
  }
];

const Advantages = () => {
  return (
    <div className="lg:py-16 py-12 text-center">
      <Title>Почему выбирают нас</Title>
      <div className="flex flex-wrap justify-center">
        {Items.map(({ id, icon, text}) => (
          <div
            key={id}
            className="
              sm:w-[240px] sm:pt-28 sm:pl-4 sm:h-auto md:m-5 xl:w-[270px]
              w-full m-3 p-4 pl-24 h-24 flex items-center
              shadow-md rounded relative
              font-gilroyLight font-semibold text-left
            ">
            {icon}
            {text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Advantages;