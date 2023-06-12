import React, { useCallback, useState, useEffect } from 'react';
import AOS from 'aos';

import CallModal from '../components/CallModal';
import OrderModal from '../components/OrderModal';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import Menu from '../components/Menu';
import Wrap from '../components/Wrap';
import Prices from '../components/Prices';
import Title from '../components/Title';

const SecondPage = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCallModal, setCallModalOpen] = useState(false);
  const [order, setOrder] = useState('');

  const toggleMenu = useCallback(() => {
    setOpenMenu((value) => !value);
  }, []);

  const toggleCallModal = useCallback(() => {
    setCallModalOpen((value) => !value);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <Header toggleMenu={toggleMenu} toggleCallModal={toggleCallModal} />
      <Wrap>
        <Menu open={openMenu} toggleMenu={toggleMenu} />
        <div className="mb-4 flex items-center justify-center pt-[50px] sm:pt-[100px] text-3xl md:text-4xl min-[960px]:text-5xl min-[960px]:leading-[52px] font-gilroyBold text-center">
          <h1><span className="text-blred-500">Цены</span> на наши услуги</h1>
        </div>
        <div className="mx-auto w-32 h-1 bg-blred-500 rounded" />
        <Prices setOrder={setOrder} toggleCallModal={toggleCallModal} />
      </Wrap>
      <Wrap extClassName="pt-20 pb-28 bg-[#f9f9f9]">
        <div className="text-center">
          <Title>От чего зависит стоимость вскрытия замка:</Title>
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

export const Head = () => <Seo title="Prices" />;

export default SecondPage;
