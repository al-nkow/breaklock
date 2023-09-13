import React, { useState, useCallback } from 'react';

import Header from '../Header';
import Layout from '../Layout';
import Info from '../Info';
import Advantages from '../Advantages';
import Action from '../Action';
import Examples from '../Examples';
import Reviews from '../Reviews';
import VideoModal from '../VideoModal';
import Documents from '../Documents';
import Discount from '../Discount';
import Team from '../Team';
import Map from '../Map';
import CallModal from '../CallModal';

const Promo = ({
  children, info, table, description,
}) => {
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
      <Info open={openMenu} toggleMenu={toggleMenu} toggleCallModal={toggleCallModal}>
        {children}
      </Info>
      {info}
      {table}
      <Advantages />
      <Action toggleCallModal={toggleCallModal} />
      <Examples />
      <Reviews open={setVideoSrc} />
      <Documents />
      <Discount toggleCallModal={toggleCallModal} />
      <Team />
      {description}
      <Map />
      {videoSrc && <VideoModal src={videoSrc} close={closeVideoModal} />}
      {openCallModal && <CallModal close={toggleCallModal} />}
    </Layout>
  );
};

export default Promo;
