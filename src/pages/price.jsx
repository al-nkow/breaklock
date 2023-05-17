import React, { useCallback, useState } from 'react';
import { Link } from 'gatsby';

import CallModal from '../components/CallModal';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import Menu from '../components/Menu';
import Wrap from '../components/Wrap';

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
      </Wrap>
      <div className="min-h-[500px] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl">Hi from the second page</h1>
          <p>Welcome to page 2</p>
          <div className="p-20 text-red-500"><Link to="/">Go back to the homepage</Link></div>
        </div>
      </div>
      {openCallModal && <CallModal close={toggleCallModal} />}
    </Layout>
  );
};

export const Head = () => <Seo title="Page two" />;

export default SecondPage;
