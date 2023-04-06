import React from 'react';
import Title from '../Title';

import Lock from './icons/lock.svg';
import Alert from './icons/alert.svg';
import Door from './icons/door.svg';
import Guard from './icons/guard.svg';
import Safe from './icons/safe.svg';
import Settings from './icons/settings.svg';

const Items = [
  {
    id: 1, icon: <Lock />, text: <>Вскрытие<br />замков</>,
  }, {
    id: 2, icon: <Door />, text: <>Вскрытие<br />автомобилей</>,
  }, {
    id: 3, icon: <Guard />, text: <>Установка<br />нового замка</>,
  }, {
    id: 4, icon: <Alert />, text: <>Замена<br />старого замка</>,
  }, {
    id: 5, icon: <Safe />, text: <>Вскрытие<br />сейфов</>,
  }, {
    id: 6, icon: <Settings />, text: <>Ремонт и<br />прочие услуги</>,
  },
];

const Services = () => {
  return (
    <div className="lg:py-16 py-12 px-6 text-center">
      <Title className="mb-10">Наши услуги</Title>
      <div
        className="
          md:grid-cols-2
          md:grid-rows-3
          lg:grid-cols-3
          lg:grid-rows-2
          max-w-6xl
          grid
          gap-4
          mx-auto
        "
      >
        {Items.map(({ id, text, icon }) => (
          <div
            key={id}
            className="
              shadow-md
              rounded
              p-5
              text-left
              relative
              flex
              align-stretch
              h-[120px]
            "
          >
            <div className="flex flex-none items-center justify-center w-[77px]">{icon}</div>
            <div className="flex items-center pl-7 font-gilroyLight font-semibold">{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
