import React from 'react';
import Door from '../icons/door.svg';
import Cabinet from '../icons/cabinet.svg';
import Lock from '../icons/lock.svg';
import Settings from '../icons/settings.svg';

import AdvantagesBase from '../AdvantagesBase';

const iconClassName = 'absolute top-6 left-4 h-[52px] w-[52px] sm:h-[78px] sm:w-[78px] sm:top-4';
const cabinetClassName = 'absolute top-6 left-5 h-[46px] w-[46px] sm:h-[68px] sm:w-[68px] sm:top-6';
const Items = [
  {
    id: 1,
    icon: <Lock className={iconClassName} />,
    text: <>Устанавливаем замки,<br />приобретенные Вами</>,
  }, {
    id: 2,
    icon: <Door className={iconClassName} />,
    text: <>Удаленное отпирание<br />из любой точки мира</>,
  }, {
    id: 3,
    icon: <Settings className={iconClassName} />,
    text: <>Бесплатная настройка<br />после установки</>,
  }, {
    id: 4,
    icon: <Cabinet className={cabinetClassName} />,
    text: <>Несколько вариантов<br />на выбор</>,
  },
];

const Advantages = () => (
  <AdvantagesBase items={Items} />
);

export default Advantages;
