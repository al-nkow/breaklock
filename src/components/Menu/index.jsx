import React from 'react';
import { MENU_ITEMS } from '../../constants';
import SvgIcon from '../SvgIcon';
import clickMenuItem from '../../utils/clickMenuItem';
import useSwipe from '../../hooks/useSwipe';

const commonClasses = 'flex mx-auto lg:justify-between flex-wrap ease-in-out duration-200';
const mobMenuClasses = 'fixed z-50 top-4 right-4 bg-white max-w-[300px] w-[90%] p-5 rounded shadow-md flex-col';
const mdClasses = 'font-gilroyMedium md:flex-row md:static md:w-full md:max-w-full md:bg-transparent md:p-0 md:shadow-none md:translate-x-0';

const Menu = ({
  open, toggleMenu,
}) => {
  const swipeHandlers = useSwipe({ onSwipedRight: toggleMenu });

  const clickItemHandler = (target, link) => {
    clickMenuItem(target, link);
    toggleMenu();
  };

  return (
    <div
      {...swipeHandlers}
      className={`${mdClasses} ${commonClasses} ${mobMenuClasses} ${open ? 'translate-x-0' : 'translate-x-[350px]'}`}
    >
      <SvgIcon
        onClick={toggleMenu}
        icon="close"
        className="md:hidden absolute top-4 right-4 w-[28px] h-[28px] cursor-pointer"
      />
      {MENU_ITEMS.map(({
        id, title, target, link,
      }) => (
        <span
          key={id}
          onClick={() => clickItemHandler(target, link)}
          className="hover:text-blred-500 text-center p-4 cursor-pointer"
        >
          {title}
        </span>
      ))}
    </div>
  );
};

export default Menu;
