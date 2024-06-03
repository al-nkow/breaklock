import React, { useState, useCallback } from 'react';

import Seo from '../components/seo';
import AdvSmartLock from '../components/Advantages/AdvSmartLock';
import ReviewsSmartLock from '../components/Reviews/ReviewsSmartLock';
import VideoModal from '../components/VideoModal';
import Action from '../components/Action';
import Brands from '../components/Brands';
import ExamplesSmartLock from '../components/Examples/ExamplesSmartLock';
import ZoleLocks from '../components/ZoleLocks';
import StepsInstall from '../components/StepsInstall';
import FAQ from '../components/FAQ';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Info from '../components/Info';
import CallModal from '../components/CallModal';
import Districts from '../components/Districts';
import Map from '../components/Map';
import Wrap from '../components/Wrap';
import Title from '../components/Title';

import usePage from '../hooks/usePage';
import { SMART_LOCK_BRANDS } from '../constants';

const FAQ_DATA = [
  {
    qstn: 'Сколько времени занимает установка умного замка?',
    resp: 'Установка умного замка занимает от 30 минут до 4 часов. Все зависит от замка, который хотите установить и Вашей двери.',
  }, {
    qstn: 'Установили умный замок на входную дверь, пароль меняется в квартире, если выхожу из дома ничего не работает, что делать?',
    resp: 'Скорее всего Ваш замок работает на протоколе Bluetooth, для удаленного доступа Вам необходим Wi-Fi шлюз.',
  }, {
    qstn: 'Купили умный замок SmartLock, можете ли помочь с установкой?',
    resp: 'Да, мы устанавливаем любые замки, но на них гарантия не распространяется.',
  }, {
    qstn: 'Если сядет аккумулятор, как попасть в помещение?',
    resp: 'У наших умных замков есть механический ключ для аварийного вскрытия.',
  }, {
    qstn: 'Открывается ли ваш замок из другого места?',
    resp: 'Да, для того чтобы открыть наш умный замок, вам нужен смартфон на базе iOS или Android и интернет внутри помещения.',
  },
];

const InstallLock = ({ location }) => {
  usePage(location.search);

  const [videoSrc, setVideoSrc] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openCallModal, setCallModalOpen] = useState(false);

  const closeVideoModal = useCallback(() => {
    setVideoSrc(null);
  }, []);

  const toggleMenu = useCallback(() => {
    setOpenMenu((value) => !value);
  }, []);

  const toggleCallModal = useCallback(() => {
    setCallModalOpen((value) => !value);
  }, []);

  return (
    <Layout>
      <Header toggleMenu={toggleMenu} toggleCallModal={toggleCallModal} />
      <Info
        open={openMenu}
        toggleMenu={toggleMenu}
        toggleCallModal={toggleCallModal}
        description="Отправьте фотографию двери, подберем подходящий замок за 15 минут"
      >
        <span className="text-blred-500">Установка<br />умного</span> замка<br />
        в <span className="text-blred-500">Санкт-Петербурге</span><br />
      </Info>
      <AdvSmartLock />
      <ReviewsSmartLock open={setVideoSrc} />
      <Action
        toggleCallModal={toggleCallModal}
        text="Оставьте заявку или позвоните нам! Мы&nbsp;полностью проконсультируем по протоколам работы, техническим характеристикам и по совместимости с Вашей дверью."
      />
      <ExamplesSmartLock />
      <div className="bg-[#f9f9f9]"><Brands data={SMART_LOCK_BRANDS} /></div>
      <ZoleLocks />
      <StepsInstall />
      <FAQ data={FAQ_DATA} />
      <Wrap extClassName="py-12 lg:py-16">
        <Title className="mb-10">Почему стоит установить умный замок</Title>
        <div className="mb-4">
          Установка умного замка выгодное решение для обеспечения безопасности
          вашего дома или офиса. Smart Lock— это современноеустройство, которое
          заменяет традиционный дверной замок и открывает новые возможности для
          контроля доступа.
        </div>
        <div className="mb-4">Умный замок на входную дверь – это:</div>
        <ol className="list-disc px-4 mx-auto mb-20 text-left mb-8">
          <li className="mb-4 pl-6">
            <div className="font-gilroySemiBold text-xl mb-1">Безопасность</div>
            умный замок предотвращает взлом и кражу благодаря специальному датчику.
            При попытке вскрытия включает громкую сирену и мгновенно отправляет
            уведомление на ваш смартфон
          </li>
          <li className="mb-4 pl-6">
            <div className="font-gilroySemiBold text-xl mb-1">Журнал посещений</div>
            после каждого открывания, в мобильном приложении отображается информация
            о времени и пользователе, который открыл дверь, а если умный замок оснащен
            модулем Face ID, то вы увидите всех посетителей. Это особо актуально при
            посуточной сдаче квартир.
          </li>
          <li className="mb-4 pl-6">
            <div className="font-gilroySemiBold text-xl mb-1">Удобство</div>
            вы можете открывать дверь с помощью различныхустройств, таких как цифровые
            коды, дистанционные пультыили биометрические сканеры.
          </li>
          <li className="mb-4 pl-6">
            <div className="font-gilroySemiBold text-xl mb-1">Автоматическое запирание</div>
            умный замок может автоматически закрываться после определённого времени или
            при выходе из зоны действия Wi-Fi.
          </li>
          <li className="mb-4 pl-6">
            <div className="font-gilroySemiBold text-xl mb-1">Дистанционное управление</div>
            вы можете контролировать доступ к вашему дому или офису из любой точки мира через
            мобильное приложение
          </li>
        </ol>
        <div>
          Установка умного замка в Санкт-Петербурге доступна в нашей компании. Мы предлагаем
          широкий выбор моделей Smart Lock с различными функциями и ценами. Чтобы купить
          умные замки просто напишите нам или позвоните, мы поможем вам выбрать подходящий
          вариант и установить его быстро и качественно.
        </div>
      </Wrap>
      <Districts />
      <Map />
      {videoSrc && <VideoModal src={videoSrc} close={closeVideoModal} />}
      {openCallModal && <CallModal close={toggleCallModal} details="Поступила заявка на подбор умного замка" file />}
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Установка умных замков в СПб круглосуточно, срочно и недорого – цены от 1100 рублей"
    description="Установка замков в СПб и ЛО круглосуточно с выездом от 15 минут. 100% гарантия качества работы мастера. Работаем со всеми видами механизмов."
  />
);

export default InstallLock;
