import React from 'react';

const VideoModal = ({ src, close }) => {
  return (
    <div
      onClick={close}
      className="cursor-pointer fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 overscroll-none flex items-center justify-center"
    >
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
    </div>
  )
}

export default VideoModal;
