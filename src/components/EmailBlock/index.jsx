import React from 'react';
import SvgIcon from '../SvgIcon';
import { EMAIL } from '../../constants';

const MailBlock = ({ className }) => (
  <a href={`mailto:${EMAIL}`} className={`cursor-pointer no-underline text-current ${className}`}>
    <div className="flex flex-row items-center">
      <SvgIcon className="w-[16px] h-[16px] mr-2 fill-blred-500" icon="mail" />
      <span className="lg:text-lg xl:text-xl">{EMAIL}</span>
    </div>
    <div className="font-gilroyLight pl-5 text-sm text-blblue-500 font-semibold"><u>Написать нам</u></div>
  </a>
);

export default MailBlock;
