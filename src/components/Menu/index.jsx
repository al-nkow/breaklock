import React from 'react';
import { MENU_ITEMS } from '../../constants';

const Menu = () => {
  return (
    <div className="mx-auto flex justify-between flex-wrap">
      {MENU_ITEMS.map(({id, title}) => (
        <span key={id} className="hover:text-blred-500 text-center p-4 cursor-pointer">
          {title}
        </span>
      ))}
    </div>
  )
}

export default Menu;
