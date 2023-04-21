/* eslint-disable react/no-unknown-property */
import React from 'react';

import Overlay from '../Overlay';
import SvgIcon from '../SvgIcon';
import Loader from '../Loader';

const VideoModal = ({ src, close }) => (
  <Overlay onClick={close}>
    <div
      className="relative bg-white max-w-[600px] lg:max-w-[900px] rounded shadow-lg w-[90%]"
    >
      <div className="absolute top-[-16px] right-[-16px] z-10 bg-white rounded-full p-2 border-2 border-blred-500">
        <SvgIcon onClick={close} icon="close" className="w-[22px] h-[22px] cursor-pointer" />
      </div>
      <div className="relative w-full pb-[56.25%] rounded overflow-hidden flext items-center justify-center">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <Loader />
        </div>
        <iframe
          className="block absolute top-0 left-0 right-0 bottom-0 w-full h-full"
          src={`${src}?autoplay=1`}
          title="YouTube video player"
          frameorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  </Overlay>
);

export default VideoModal;
