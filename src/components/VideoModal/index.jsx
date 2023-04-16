import React from 'react';

import Overlay from '../Overlay';

const VideoModal = ({ src, close }) => {
  return (
    <Overlay onClick={close}>
      <div
        className="bg-white w-[600px] rounded shadow-lg overflow-hidden"
      >
        <div className="relative w-full pb-[56.25%]">
          <iframe
            className="block absolute top-0 left-0 right-0 bottom-0 w-full h-full"
            src={src}
            title="YouTube video player"
            frameorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Overlay>
  )
}

export default VideoModal;
