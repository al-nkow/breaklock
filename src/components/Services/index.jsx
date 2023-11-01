/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'gatsby';
import Title from '../Title';
import Wrap from '../Wrap';
import Lock from './icons/lock.svg';
import Alert from './icons/alert.svg';
import Door from './icons/door.svg';
import Guard from './icons/guard.svg';
import Safe from './icons/safe.svg';
import Settings from './icons/settings.svg';
import { ANIMATION_PROPS } from '../../constants';

const iconClassName = 'h-[52px] w-[52px] sm:h-[78px] sm:w-[78px]';

const Items = [
  {
    id: 1, icon: <Lock className={iconClassName} />, link: 'lock', text: <>Вскрытие<br className="hidden sm:block" /> замков</>,
  }, {
    id: 2, icon: <Door className={iconClassName} />, link: 'auto', text: <>Вскрытие<br className="hidden sm:block" /> автомобилей</>,
  }, {
    id: 3, icon: <Guard className={iconClassName} />, link: 'newlock', text: <>Установка<br className="hidden sm:block" /> нового замка</>,
  }, {
    id: 4, icon: <Alert className={iconClassName} />, link: 'oldlock', text: <>Замена<br className="hidden sm:block" /> старого замка</>,
  }, {
    id: 5, icon: <Safe className={iconClassName} />, link: 'safe', text: <>Вскрытие<br className="hidden sm:block" /> сейфов</>,
  }, {
    id: 6, icon: <Settings className={iconClassName} />, link: 'others', text: <>Ремонт и<br className="hidden sm:block" /> прочие услуги</>,
  },
];

const Services = () => (
  <Wrap extClassName="lg:py-16 py-12 text-center" id="servicesSection">
    <Title>Наши услуги</Title>
    <div
      {...ANIMATION_PROPS}
      className="
        grid-cols-2
        lg:grid-cols-3 lg:grid-rows-2
        max-w-6xl mx-auto
        grid gap-4"
    >
      {Items.map(({
        id, text, icon, link,
      }) => (
        <Link
          to={`/price?target=${link}`}
          key={id}
          className="
            shadow-md rounded sm:h-[120px] p-5
            relative text-left
            block sm:flex align-stretch hoverblock
          "
        >
          <div className="mx-auto mb-2 sm:m-0 flex flex-none items-center justify-center w-[58px] sm:w-[77px]">{icon}</div>
          <div className="text-center sm:text-left sm:flex items-center sm:pl-7 lg:text-lg">{text}</div>
        </Link>
      ))}
    </div>
  </Wrap>
);

export default Services;
