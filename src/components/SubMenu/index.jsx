import React from 'react';
import { Link } from 'gatsby';

const data = [
  {
    id: 1,
    title: 'Вскрытие',
    width: 30,
    items: [
      { id: 1, title: 'Гаража', link: '/open-garage' },
      { id: 2, title: 'Дверей', link: '/open-doors' },
      { id: 3, title: 'Автомобиля', link: '/open-car' },
      { id: 4, title: 'Багажника', link: '/open-trunk' },
      { id: 5, title: 'Сейфов', link: '/open-safe' },
    ],
  }, {
    id: 2,
    title: 'Установка',
    width: 30,
    items: [
      { id: 1, title: 'Дверных доводчиков', link: '/install-closer' },
      { id: 2, title: 'Броненакладок', link: '/install-armor' },
      { id: 3, title: 'Дверного глазка', link: '/install-peephole' },
      { id: 4, title: 'Дверных ручек', link: '/install-handle' },
      { id: 5, title: 'Замков', link: '/install-lock' },
    ],
  }, {
    id: 3,
    title: 'Услуги по замкам',
    width: 40,
    items: [
      { id: 1, title: 'Врезка замков', link: '/insert-lock' },
      { id: 2, title: 'Замена замков', link: '/replace-lock' },
      { id: 3, title: 'Замена личинки замка', link: '/lock-pick-replacement' },
      { id: 4, title: 'Ремонт дверных замков', link: '/door-lock-repair' },
      { id: 5, title: 'Ремонт сейфовых замков', link: '/safe-lock-repair' },
      { id: 6, title: 'Обслуживание сейфов', link: '/safe-service' },
      { id: 7, title: 'Ремонт сейфов', link: '/safe-repair' },
    ],
  },
];

const SubMenu = ({ className }) => (
  <div
    onClick={(e) => e.stopPropagation()}
    className={`hidden static md:absolute top-[100%] left-0 bg-white z-50 p-2 shadow-md rounded w-[620px] text-left ${className}`}
  >
    {data.map((block) => (
      <div className={`p-6 w-[${block.width}%]`}>
        <div className="text-xl mb-4 font-gilroySemiBold">{block.title}</div>
        {block.items.map((subMenu) => (
          <Link key={subMenu.id} className="mb-3 block hover:text-blred-500 cursor-pointer" to={subMenu.link}>
            {subMenu.title}
          </Link>
        ))}
      </div>
    ))}
  </div>
);

export const MobSubMenu = () => (
  <div className="md:hidden">
    {data.map((item) => (
      <div key={item.id} className="pt-5 pb-2 mt-2 bg-[#f2f2f2] rounded">
        <div className="text-xl mb-4 font-gilroySemiBold text-center">{item.title}</div>
        {item.items.map((s) => (
          <Link
            key={s.id}
            className="block hover:text-blred-500 text-center p-4 cursor-pointer"
            to={s.link}
          >
            {s.title}
          </Link>
        ))}
      </div>
    ))}
  </div>
);

export default SubMenu;
