import React, { useCallback, useState } from 'react';

import CallModal from '../components/CallModal';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import Menu from '../components/Menu';
import Wrap from '../components/Wrap';
import Prices from '../components/Prices';

const SecondPage = () => {
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
      <Wrap>
        <Menu open={openMenu} toggleMenu={toggleMenu} />
        <div className="mb-4 flex items-center justify-center pt-[50px] sm:pt-[100px] text-3xl md:text-4xl min-[960px]:text-5xl min-[960px]:leading-[52px] font-gilroyBold text-center">
          <span><span className="text-blred-500">Цены</span> на наши услуги</span>
        </div>
        <div className="mx-auto w-32 h-1 bg-blred-500 rounded" />
      </Wrap>
      <Prices />
      {openCallModal && <CallModal close={toggleCallModal} />}
    </Layout>
  );
};

export const Head = () => <Seo title="Page two" />;

export default SecondPage;
