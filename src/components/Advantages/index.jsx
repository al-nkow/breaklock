import React from 'react';
import Door from './icons/door.svg';
import Truck from './icons/truck.svg';
import Location from './icons/location.svg';
import Percentage from './icons/percentage.svg';

import AdvantagesBase from './AdvantagesBase';

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
  <AdvantagesBase items={Items} />
);

export default Advantages;
