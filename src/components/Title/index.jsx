import React from 'react';

const Title = ({ children, className }) => (
  <div className={`font-gilroySemiBold text-center mb-10 ${className}`}>
    <h2 className="text-2xl mb-3 sm:text-3xl sm:mb-5 lg:text-4xl">{children}</h2>
    <div className="mx-auto w-32 h-1 bg-blred-500 rounded mb-5" />
  </div>
);

export default Title;
