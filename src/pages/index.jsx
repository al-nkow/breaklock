import React, { useState, useCallback, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

import scroll from '../utils/scroll';

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

  useEffect(() => {
    AOS.init();
    const params = new URLSearchParams(location.search);
    const target = params.get('target');
    if (target) {
      setTimeout(() => {
        scroll(target);
      }, 100);
    }
  }, []);

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

export const Head = () => <Seo title="Pomogaykin" />;

export default MainPage;
