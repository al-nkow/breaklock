import React from 'react';
import AliceCarousel from 'react-alice-carousel';

import Title from '../Title';

import img1 from './images/v1.png';
import img2 from './images/v2.png';
import img3 from './images/v3.png';
import img4 from './images/v4.png';

const data = [
  { id: 1, preview: img1, src: 'https://www.youtube.com/embed/cic1qili1qY' },
  { id: 2, preview: img2, src: 'https://www.youtube.com/embed/2NxyN7cEvao' },
  { id: 3, preview: img3, src: 'https://www.youtube.com/embed/TmJ6cUdkK_E' },
  { id: 4, preview: img4, src: 'https://www.youtube.com/embed/j1Z6Gygx7lw' },
];

const Reviews = ({ open }) => {
  return (
    <div className="lg:py-16 py-12 px-6 text-center" id="reviewsSection">
      <Title className="mb-10">Отзывы клиентов</Title>
      <div className="w-[90%] max-w-[900px] mx-auto">
        <AliceCarousel
          responsive={{
            0: { items: 1 },
            568: { items: 2 },
            820: { items: 3 },
            1140: { items: 4 },
          }}
          mouseTracking
          disableButtonsControls
          items={data.map(({ id, src, preview }) => (
            <div
              key={id}
              onClick={() => open(src)}
              className="overflow-hidden relative rounded shadow-md w-[90%] mx-auto flex items-center justify-center"
            >
              <div className="w-full pb-[150%] bg-cover" style={{ backgroundImage: `url(${preview})` }} />
              <div
                className="-translate-x-[50%] -translate-y-[50%] absolute top-1/2 left-1/2 cursor-pointer w-[91px] h-[91px] bg-blred-500 hover:bg-red-700 rounded-full border-[14px] border-red-100 flex items-center justify-center"
              >
                <svg className="mr-[-2px]" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 6.76795C16.3333 7.53775 16.3333 9.46225 15 10.2321L3.75 16.7272C2.41667 17.497 0.749999 16.5348 0.749999 14.9952L0.75 2.00481C0.75 0.46521 2.41667 -0.497043 3.75 0.272758L15 6.76795Z" fill="white"/>
                </svg>
              </div>
            </div>
          ))}
        />
      </div>
    </div>
  )
}

export default Reviews;
