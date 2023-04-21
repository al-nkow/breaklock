import React from 'react';

const STYLES = {
  fill: 'bg-blred-500 hover:bg-red-700 text-white',
  transparent: 'hover:bg-gray-200',
  borderBlack: 'bg-transparent hover:bg-gray-200 border-2 border-black',
  borderRed: 'bg-transparent hover:bg-red-200 border-2 border-blred-500 text-blred-500',
};

const SIZES = {
  'big': '',
  'medium': 'w-[210px] h-[44px] md:h-[58px] md:text-base',
  'small': 'w-[140px] h-[38px]'
};

const Button = ({ children, onClick, className, type = 'fill', size = 'medium', bold }) => {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-full
        text-sm
        ${bold ? '' : 'font-gilroyLight font-semibold'}
        ${className}
        ${SIZES[size]}
        ${STYLES[type]}
      `}
    >
      { children }
    </button>
  );
}

export default Button;