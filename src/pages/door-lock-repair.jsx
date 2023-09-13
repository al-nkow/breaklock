import * as React from 'react';

import Seo from '../components/seo';
import Promo from '../components/Promo';

import usePage from '../hooks/usePage';

const NotFoundPage = ({ location }) => {
  usePage(location.search);
  return (
    <Promo>
      <span className="text-blred-500">Ремонт</span><br />дверных замков<br />
      в <span className="text-blred-500">Санкт-Петербурге</span>
    </Promo>
  );
};

export const Head = () => (
  <Seo
    title="Ремонт дверных замков в СПб круглосуточно, срочно и недорого – цены от 1100 рублей"
    description="Ремонт дверных замков в СПб и ЛО круглосуточно с выездом от 15 минут. 100% гарантия качества работы мастера. Работаем со всеми видами механизмов."
  />
);

export default NotFoundPage;
