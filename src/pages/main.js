import React, { useState, useCallback } from 'react';
import '@pixelpay/fonts/dist/gilroy.css';
import 'react-alice-carousel/lib/alice-carousel.css';

import Header from '../components/headerNew';
import Layout from '../components/LayoutNew';
import Info from '../components/Info';
import Advantages from '../components/Advantages'
import Survey from '../components/Survey';
import Services from '../components/Services';
import Examples from '../components/Examples';
import Reviews from '../components/Reviews';
import VideoModal from '../components/VideoModal';
import Documents from '../components/Documents';
import Discount from '../components/Discount';
import Team from '../components/Team';
import Map from '../components/Map';
import Footer from '../components/Footer';

// import { graphql } from "gatsby";

const MainPage = ({ data }) => {
  // console.log('DATA >>>>>>>>>>', data);
  const [videoSrc, setVideoSrc] = useState(null);

  const closeVideoModal = useCallback(() => {
    setVideoSrc(null);
  }, []);


  return (
    <Layout>
      <Header />
      <Info />
      <Advantages />
      <Survey />
      <Services />
      <Examples />
      <Reviews open={setVideoSrc} />
      <Documents />
      <Discount />
      <Team />
      <Map />
      <Footer />
      {videoSrc && <VideoModal src={videoSrc} close={closeVideoModal} />}
    </Layout>
  )
};

export default MainPage;

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
