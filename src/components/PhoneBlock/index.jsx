import React from 'react';
import SvgIcon from '../SvgIcon';
import { PHONE } from '../../constants';

const PhoneBlock = ({ className, collapsed }) => (
  <div
    className={`${collapsed ? 'flex justify-end mr-4 md:mr-0 md:block flex-1' : 'mr-0'} text-center ${className}`}
  >
    <a
      href={`tel:${PHONE}`}
      className={
        `${collapsed
          ? 'rounded-full md:border-none border-2 border-slate-400 w-10 h-10 md:w-auto md:h-auto md:pl-2'
          : ''
        }
        flex flex-row justify-center items-center cursor-pointer no-underline text-current`
      }
    >
      <SvgIcon className="w-[16px] h-[16px] mx-2 fill-blred-500" icon="phone" />
      <div className={`font-gilroyMedium lg:text-lg xl:text-xl ${collapsed && 'hidden md:block'}`}>{PHONE}</div>
    </a>
    <div
      className={`${collapsed && 'hidden md:block text-slate-600'} font-gilroyLight text-sm`}
    >
      круглосуточно
    </div>
  </div>
);

export default PhoneBlock;
