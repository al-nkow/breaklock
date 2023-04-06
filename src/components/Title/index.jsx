import React from 'react';

const Title = ({ children, className }) => {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-3xl mb-5 lg:text-4xl">{children}</h2>
      <div className="mx-auto w-32 h-1 bg-blred-500 rounded mb-5" />
    </div>
  )
}

export default Title;
