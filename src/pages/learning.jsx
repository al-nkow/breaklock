import React, { useCallback, useState } from 'react';

import CallModal from '../components/CallModal';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Info from '../components/Info';
import List from '../components/List';
import Wrap from '../components/Wrap';
import Seo from '../components/seo';
import usePage from '../hooks/usePage';

const ITEMS = [
  'Автомобили',
  'Цилиндровый механизм',
  'Сувальдные замки',
  'Навесные замки',
  'Дисковые замки',
];

const Training = ({ location }) => {
  usePage(location.search);

  const [openMenu, setOpenMenu] = useState(false);
  const [openCallModal, setCallModalOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setOpenMenu((value) => !value);
  }, []);

  const toggleCallModal = useCallback(() => {
    setCallModalOpen((value) => !value);
  }, []);

  return (
    <Layout>
      <Header toggleMenu={toggleMenu} toggleCallModal={toggleCallModal} />
      <Info open={openMenu} toggleMenu={toggleMenu} toggleCallModal={toggleCallModal} hideDesc>
        <span className="text-blred-500">Обучение</span><br />вскрытию замков<br />
        c <span className="text-blred-500">гарантированным</span><br />трудоустройством
      </Info>
      <Wrap extClassName="lg:py-16 py-12 text-center">
        <Title>Почему стоит начать обучение?</Title>
        <ul className="list-disc px-4 mx-auto mb-20 max-w-[800px] text-left text-xl">
          <li className="mb-2 pl-6">
            <span className="font-gilroySemiBold mb-1">Свободный график</span> -
            Работаете когда удобно
          </li>
          <li className="mb-2 pl-6">
            <span className="font-gilroySemiBold mb-1">Достойный заработок</span> -
            Доход мастеров от 100 000 до 300 000₽
          </li>
          <li className="mb-2 pl-6">
            <span className="font-gilroySemiBold mb-1">Гарантированное трудоустройство в Cпб</span>
          </li>
          <li className="mb-2 pl-6">
            <span className="font-gilroySemiBold mb-1">Актуальность профессия</span> -
            Замки установлены почти на всех дверях
          </li>
          <li className="mb-2 pl-6">
            <span className="font-gilroySemiBold mb-1">Быстрые сроки обучения</span> -
            начать работать можно через 3 - 4 дня
          </li>
        </ul>
        <div className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">
          За время обучения вы научитесь открывать:
        </div>
        <List data={ITEMS} />
      </Wrap>
      <Wrap extClassName="lg:py-16 py-12 text-center bg-[#f9f9f9]">
        <Title>Цены на обучение</Title>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 max-w-[1000px] m-auto">
          <div className="shadow-md rounded flex-1 p-4 bg-white">
            <div className="font-gilroySemiBold text-xl mb-2">Единовременно</div>
            <div className="font-gilroySemiBold mb-6 text-2xl">50 000 руб</div>
            Онлайн полный видеокурс поддержка и
            консультация опытных мастеров
          </div>
          <div className="shadow-md rounded flex-1 p-4 bg-white">
            <div className="font-gilroySemiBold text-xl mb-2">В рассрочку</div>
            <div className="font-gilroySemiBold mb-6 text-2xl">60 000 руб</div>
            Только для жителей Cпб. Оплачиваете обучение
            процентами с предоставленных заказов. Полные условия уточните по телефону
          </div>
        </div>
      </Wrap>
      <Wrap extClassName="py-12 text-center">
        <Title>Плюсы работы мастером по вскрытию замков:</Title>
        <ol className="list-disc px-4 mx-auto mb-20 text-left">
          <li className="mb-4 pl-6">
            <div className="font-gilroySemiBold text-xl mb-1">Возможность достойно зарабатывать</div>
            Минимальная цена выезда мастера в
            Санкт-Петербурге - 3000 руб. Спектр производимых работ очень разнообразен.
            Замены ручек, смена ключей, установка новых замков, монтаж умных замков,
            вскрытие автомобилей, вскрытие сейфов и т.д.
          </li>
          <li className="mb-4 pl-6">
            <div className="font-gilroySemiBold text-xl mb-1">Гибкий график работы</div>
            мастера по вскрытию замков могут работать
            как самостоятельно, так и в составе сервисных компаний. Это позволяет
            им выбирать удобный график работы, который будет соответствовать их
            личным потребностям и предпочтениям.
          </li>
          <li className="mb-4 pl-6">
            <div className="font-gilroySemiBold text-xl mb-1">Возможность дополнительного обучения</div>
            многие мастера по вскрытию замков проходят
            обучение, которое позволяет им совершенствовать свои навыки и расширять спектр
            предоставляемых услуг. Обучение может включать изучение различных типов замков,
            методов их вскрытия и правил безопасности.
          </li>
          <li className="mb-4 pl-6">
            <div className="font-gilroySemiBold text-xl mb-1">Востребованность профессии</div>
            мастера по вскрытию замков всегда востребованы,
            поскольку люди регулярно сталкиваются с проблемами, связанными с замками.
          </li>
          <li className="mb-4 pl-6">
            <div className="font-gilroySemiBold text-xl mb-1">Возможность работать на себя</div>
            многие мастера по вскрытию замков предпочитают работать
            самостоятельно, что позволяет им устанавливать свои цены на услуги и контролировать
            рабочий процесс.
          </li>
        </ol>
      </Wrap>
      {openCallModal && (
        <CallModal
          close={toggleCallModal}
          details="Поступила заявка на обучение"
        />
      )}
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Обучение вскрытию замков"
    description="Обучение вскрытию замков с гарантированным трудоустройством"
  />
);

export default Training;
