import React, { useCallback, useState } from 'react';

import CallModal from '../components/CallModal';
import OrderModal from '../components/OrderModal';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import Menu from '../components/Menu';
import Wrap from '../components/Wrap';
import Prices from '../components/Prices';
import Title from '../components/Title';

import usePage from '../hooks/usePage';
import { SERVICE_DATA } from '../constants';

const SecondPage = ({ location }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCallModal, setCallModalOpen] = useState(false);
  const [order, setOrder] = useState('');

  const toggleMenu = useCallback(() => {
    setOpenMenu((value) => !value);
  }, []);

  const toggleCallModal = useCallback(() => {
    setCallModalOpen((value) => !value);
  }, []);

  usePage(location.search);

  return (
    <Layout>
      <Header toggleMenu={toggleMenu} toggleCallModal={toggleCallModal} />
      <Wrap extClassName="showscroll">
        <Menu open={openMenu} toggleMenu={toggleMenu} />
        <div className="mb-4 flex items-center justify-center pt-[50px] sm:pt-[100px] text-3xl md:text-4xl min-[960px]:text-5xl min-[960px]:leading-[52px] font-gilroyBold text-center">
          <h1><span className="text-blred-500">Цены</span> на наши услуги</h1>
        </div>
        <div className="mx-auto w-32 h-1 bg-blred-500 rounded" />
        <Prices setOrder={setOrder} toggleCallModal={toggleCallModal} />
      </Wrap>

      <Wrap extClassName="pt-10 pb-28 flex flex-row" intClassName="pl-2 pr-2 flex justify-between w-full flex-wrap">
        {SERVICE_DATA.map((item) => (
          <div key={item.id} className="w-full sm:w-[49%] md:w-[32%] border-t border-gray-300 mb-2">
            {item.items.map((s) => (
              <div
                key={s.id}
                className="bg-[#f2f2f2] inline-block text-center p-4 cursor-pointer flex justify-between items-start border-b border-l border-r border-gray-300"
              >
                <span className="max-w-[60%] text-left lowercase">{item.id !== 3 && item.title} {s.title}</span>
                <span>от <span className="text-lg">{s.price} ₽</span></span>
              </div>
            ))}
          </div>
        ))}
      </Wrap>

      <Wrap extClassName="pt-20 pb-28 bg-[#f9f9f9]">
        <div className="text-center">
          <Title>От чего зависит стоимость вскрытия замка</Title>
          <div className="mb-5">
            Класса секретности цилиндра, класса взломостойкости замка, наличия броненакладки,
            наличия марганцевой пластины, толщины полотна.
          </div>
          Ложный выезд специалиста - 1000&nbsp;₽<br />
          Выезд после 23:00 - 1000&nbsp;₽
        </div>
      </Wrap>
      {openCallModal && <CallModal close={toggleCallModal} />}
      {order && <OrderModal details={order} close={() => setOrder('')} />}
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Цены на вскрытие замков дверей, авто и сейфов в СПб | Прайс лист по вскрытию, установке и замене"
    description="Прайс лист на все услуги по вскрытию любых замков и сейфов, замене и установке замков. Оказываем все услуги с гарантией качества и быстрого выезда по СПб и ЛО."
  />
);

export default SecondPage;
