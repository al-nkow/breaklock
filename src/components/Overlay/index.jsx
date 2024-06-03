import React, { useEffect } from 'react';

const Overlay = ({ children, onClick }) => {
  useEffect(() => {
    const htmlElement = document.getElementsByTagName('html')[0];
    htmlElement.style.overflow = 'hidden';
    document.body.style['overflow-y'] = 'scroll';
    return () => {
      htmlElement.style.overflow = 'unset';
      document.body.style['overflow-y'] = 'unset';
    };
  }, []);

  return (
    <div
      onClick={onClick}
      className="z-50 fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 overscroll-none flex items-center justify-center"
    >
      {children}
    </div>
  );
};

export default Overlay;
