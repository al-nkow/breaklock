/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Title from '../Title';
import Wrap from '../Wrap';
import Lock from './icons/lock.svg';
import Alert from './icons/alert.svg';
import Door from './icons/door.svg';
import Guard from './icons/guard.svg';
import Safe from './icons/safe.svg';
import Settings from './icons/settings.svg';

const iconClassName = 'h-[52px] w-[52px] sm:h-[78px] sm:w-[78px]';

const Items = [
  {
    id: 1, icon: <Lock className={iconClassName} />, text: <>Вскрытие<br />замков</>,
  }, {
    id: 2, icon: <Door className={iconClassName} />, text: <>Вскрытие<br />автомобилей</>,
  }, {
    id: 3, icon: <Guard className={iconClassName} />, text: <>Установка<br />нового замка</>,
  }, {
    id: 4, icon: <Alert className={iconClassName} />, text: <>Замена<br />старого замка</>,
  }, {
    id: 5, icon: <Safe className={iconClassName} />, text: <>Вскрытие<br />сейфов</>,
  }, {
    id: 6, icon: <Settings className={iconClassName} />, text: <>Ремонт и<br />прочие услуги</>,
  },
];

const Services = () => (
  <Wrap extClassName="lg:py-16 py-12 text-center" id="servicesSection">
    <Title>Наши услуги</Title>
    <div
      className="
        md:grid-cols-2 md:grid-rows-3
        lg:grid-cols-3 lg:grid-rows-2
        max-w-6xl mx-auto
        grid gap-4"
    >
      {Items.map(({ id, text, icon }) => (
        <div
          key={id}
          className="
            shadow-md rounded sm:h-[120px] p-5
            relative text-left
            flex align-stretch
          "
        >
          <div className="flex flex-none items-center justify-center w-[58px] sm:w-[77px]">{icon}</div>
          <div className="flex items-center pl-7 lg:text-lg">{text}</div>
        </div>
      ))}
    </div>
  </Wrap>
);

export default Services;
