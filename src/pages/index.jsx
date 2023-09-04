import React, { useState, useCallback } from 'react';

import Header from '../components/Header';
import Layout from '../components/Layout';
import Info from '../components/Info';
import Advantages from '../components/Advantages';
import Action from '../components/Action';
import Services from '../components/Services';
import Examples from '../components/Examples';
import Reviews from '../components/Reviews';
import VideoModal from '../components/VideoModal';
import Documents from '../components/Documents';
import Discount from '../components/Discount';
import Team from '../components/Team';
import Map from '../components/Map';
import CallModal from '../components/CallModal';
import Seo from '../components/seo';

import usePage from '../hooks/usePage';

const MainPage = ({ location }) => {
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

  usePage(location.search);

  return (
    <Layout>
      <Header toggleMenu={toggleMenu} toggleCallModal={toggleCallModal} />
      <Info open={openMenu} toggleMenu={toggleMenu} toggleCallModal={toggleCallModal} />
      <Advantages />
      <Action toggleCallModal={toggleCallModal} />
      <Services />
      <Examples />
      <Reviews open={setVideoSrc} />
      <Documents />
      <Discount toggleCallModal={toggleCallModal} />
      <Team />
      <Map />
      {videoSrc && <VideoModal src={videoSrc} close={closeVideoModal} />}
      {openCallModal && <CallModal close={toggleCallModal} />}
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Аварийное вскрытие замков в СПб круглосуточно и срочно | Служба вскрытия замков и дверей «Помогайкин»"
    description="Срочное аварийное вскрытие любых замков и дверей 24/7. Квалифицированные мастера во всех районах СПб и ЛО. Выезд от 15 минут. Работаем без повреждений."
  />
);

export default MainPage;
