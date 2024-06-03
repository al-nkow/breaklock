import React from 'react';
import Wrap from '../Wrap';

import img1 from './images/l1.jpg';
import img2 from './images/l2.jpg';
import img3 from './images/l3.jpg';

import { ANIMATION_PROPS } from '../../constants';

const DATA = [
  {
    id: 1,
    image: img1,
    title: 'ZOLE WX-2',
    open: 'дистанционное открытие по протоколу Wi-Fi, временный или постоянный код-пароль, Face ID, отпечаток пальца, IC-карта, механический ключ.',
    app: '«Smart Life»',
    handle: '76 мм на 420 мм',
    plank: '24 мм на 240 мм',
    temp: '- 20 до + 60',
    users: 'до 100',
    power: 'аккумуляторная батарея 4200 мА',
    speed: '0.52 сек',
    price: 22300,
  },
  {
    id: 2,
    image: img2,
    title: 'ZOLE SG-17',
    open: 'дистанционное открытие по протоколу Wi-Fi, временный или постоянный код-пароль, отпечаток пальца, IC-карта, механический ключ.',
    app: '«Smart Life»',
    handle: '75 мм на 365 мм',
    plank: '24 мм на 240 мм',
    temp: '- 20 до + 60',
    users: 'до 100',
    power: 'литиевые батарейки, 4 шт',
    speed: '0.48 сек',
    price: 17000,
  },
  {
    id: 3,
    image: img3,
    info: 'Замок полностью на русском языке.',
    title: 'ZOLE DR-35',
    open: 'дистанционное открытие по протоколу Wi-Fi, временный или постоянный код-пароль, Face ID, отпечаток пальца, IC-карта, механический ключ.',
    app: '«Smart Life»',
    handle: '76 мм на 420 мм',
    plank: '24 мм на 240 мм',
    temp: '- 25 до + 40',
    users: 'до 100',
    power: 'аккумуляторная батарея 4200 мА',
    speed: '0.38 сек',
    price: 25000,
  },
];

const ZoleLocks = () => (
  <Wrap extClassName="py-12 lg:py-16 text-center">
    <div className="sm:grid lg:grid-cols-3 xl:grid-cols-3 grid-cols-2 gap-4" {...ANIMATION_PROPS}>
      {DATA.map(({
        id, info, title, open, app, handle, plank, temp, users, power, speed, price, image,
      }) => (
        <div key={id} className="w-full shadow-md rounded mb-6 overflow-hidden relative">
          <img className="w-full" src={image} alt="" />
          <div className="p-5 pb-28">
            <h3 className="mb-4 font-gilroyMedium text-2xl">{title}</h3>
            <div className="text-left">
              {info && (<div>{info}</div>)}
              <span className="font-gilroySemiBold">Способы открытия:</span> {open}<br />
              <span className="font-gilroySemiBold">Рабочее приложение:</span> {app}<br />
              <span className="font-gilroySemiBold">Размеры ручек:</span> {handle}<br />
              <span className="font-gilroySemiBold">Размер планки торцевого замка:</span> {plank}<br />
              <span className="font-gilroySemiBold">Рабочая температура:</span> {temp}<br />
              <span className="font-gilroySemiBold">Количество пользователей:</span> {users}<br />
              <span className="font-gilroySemiBold">Питание:</span> {power}<br />
              <span className="font-gilroySemiBold">Скорость распознания:</span> {speed}<br />
              <div className="font-gilroySemiBold pt-2">
                Цена: <span className="text-xl ml-1 text-blred-500">{price}<span className="font-gilroyMedium">₽</span></span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Wrap>
);

export default ZoleLocks;
