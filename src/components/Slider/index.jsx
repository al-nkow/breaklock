/* eslint-disable no-multiple-empty-lines */
import React, { useEffect, useRef, useState } from 'react';
import useSwipe from '../../hooks/useSwipe';

const Slider = ({
  children, slides, arrows, responsive,
}) => {
  const wrap = useRef();
  const timer = useRef(false);
  const [slideWidth, setSlideWidth] = useState(0);
  const [shift, setShift] = useState(0);
  const [dots, setDots] = useState([]);

  const next = () => {
    if ((dots.length - 1) * slideWidth + shift) setShift(shift - slideWidth);
  };

  const prev = () => {
    if (shift !== 0) setShift(shift + slideWidth);
  };

  const swipeHandlers = useSwipe({ onSwipedLeft: next, onSwipedRight: prev });

  const getItems = (size) => {
    const keys = Object.keys(responsive);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < keys.length; i++) {
      const nextEl = keys[i + 1];
      const isLast = !nextEl;

      if (size >= keys[i] && (isLast || size < nextEl)) {
        return responsive[keys[i]].items;
      }
    }
    return 0;
  };

  const initSlider = () => {
    const slidesCount = responsive ? getItems(window.innerWidth) : slides;
    const wrapWidth = wrap.current.offsetWidth;
    const itemWidth = wrapWidth / slidesCount;
    const dotsCount = children.length - slidesCount + 1;

    setSlideWidth(itemWidth);
    if (dotsCount > 1) {
      setDots([...Array(dotsCount)].map((_, index) => (index * itemWidth * -1)));
    } else {
      setDots([]);
    }
  };

  const debouncedInitSlider = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(initSlider, 500);
  };

  useEffect(() => {
    initSlider();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', debouncedInitSlider);
    return () => window.removeEventListener('resize', debouncedInitSlider);
  }, []);

  return (
    <div ref={wrap}>
      <div {...swipeHandlers} className="overflow-hidden">
        <div
          className="transition-transform duration-300"
          style={{ width: `${slideWidth * children.length}px`, transform: `translate3d(${shift}px, 0px, 0px)` }}
        >
          {children.map((item, index) => (
            <div key={index} style={{ width: `${slideWidth}px` }} className="float-left">
              {item}
            </div>
          ))}
        </div>
      </div>
      {arrows && (
        <>
          <div onClick={prev}>PREV</div>
          <div onClick={next}>NEXT</div>
        </>
      )}
      {dots.length ? (
        <div className="flex justify-center py-8">
          {dots.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer m-2 w-[18px] h-[18px] rounded-full ${item === shift ? 'bg-[#d01829]' : 'bg-[#fca5a5]'}`}
              onClick={() => setShift(item)}
            />
          ))}
        </div>
      ) : ''}
    </div>
  );
};

export default Slider;
