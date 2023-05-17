import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import EmailBlock from '../EmailBlock';
import PhoneBlock from '../PhoneBlock';
import SvgIcon from '../SvgIcon';
import Button from '../Button';
import Wrap from '../Wrap';

const Header = ({ toggleMenu, toggleCallModal }) => (
  <Wrap extClassName="py-6 border border-b-slate-300">
    <div className="flex flex-row items-center">
      <Link to="/" className="flex-none w-[62%] md:w-[35%] xl:w-2/5">
        <StaticImage
          placeholder="blurred"
          width={231}
          src="./images/logo.png"
          formats={['auto', 'webp', 'avif']}
          alt=""
        />
      </Link>
      <EmailBlock className="hidden lg:block" />
      <PhoneBlock className="" collapsed />
      <div className="flex-none md:ml-10 text-right">
        <Button
          className="sm:px-4 lg:px-8 xl:px-9 hidden md:inline"
          onClick={toggleCallModal}
        >
          Заказать звонок
        </Button>
        <SvgIcon
          icon="menu"
          onClick={toggleMenu}
          className="fill-blred-500 md:hidden inline p-2 w-12 cursor-pointer"
        />
      </div>
    </div>
  </Wrap>
);

export default Header;
