import React from 'react';
import Wrap from '../Wrap';
import Title from '../Title';

const StepsInstall = () => (
  <Wrap extClassName="py-12 lg:py-16 text-center">
    <Title className="mb-10">Умный замок. Этапы установки</Title>
    <div className="aspect-video w-[95%] max-w-[800px] m-auto">
      <iframe
        className="w-full h-full"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/AUETdQmeyZc?si=6nfytWpQHWWBjXL7"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      />
    </div>
    <div className="pt-8 max-w-[760px] m-auto">
      В этом видео Вы подробно увидите весь процесс установки умного замка.
      Какой инструмент потребуется для монтажа и сколько времени занимает весь процесс.
    </div>
  </Wrap>
);

export default StepsInstall;
