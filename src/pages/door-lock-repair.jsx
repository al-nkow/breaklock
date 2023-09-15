import * as React from 'react';

import Seo from '../components/seo';
import Promo from '../components/Promo';
import Wrap from '../components/Wrap';
import usePage from '../hooks/usePage';
import { SERVICE_DATA } from '../constants';

const InfoBlock = (
  <Wrap extClassName="pt-12 pb-6 lg:pt-16 lg:pb-8" intClassName="md:flex">
    <p className="md:text-lg text-center">
      Компания &quot;Помогайкин&quot; является вашим надежным партнером в Санкт-Петербурге,
      предоставляя профессиональные услуги по ремонту дверных замков. Мы специализируемся
      на аварийном вскрытии замков, установке и замене замков, и готовы прийти на помощь
      в любое время дня и ночи.
    </p>
  </Wrap>
);

const Table = (
  <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] border-t border-gray-300 my-10 mx-auto">
    {SERVICE_DATA[2].items.map((s) => (
      <div
        key={s.id}
        className="bg-[#f2f2f2] inline-block text-center p-4 cursor-pointer flex justify-between items-start border-b border-l border-r border-gray-300"
      >
        <span className="max-w-[60%] text-left lowercase">{s.title}</span>
        <span>от <span className="text-lg">{s.price} ₽</span></span>
      </div>
    ))}
  </div>
);

const Description = (
  <Wrap extClassName="pt-12 pb-20 lg:pt-16 md:text-lg">
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Ситуации, когда может потребоваться ремонт дверных замков</h2>
    <ul className="list-disc px-4 mx-auto mb-10">
      <li className="mb-2"><em>Утеря ключей:</em>&nbsp; Потеря ключей может произойти внезапно, и в такой момент необходима быстрая реакция. Мы предоставляем услугу аварийного вскрытия замков для быстрого доступа к вашему жилищу или офису.</li>
    </ul>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2"><em>Повреждение замков:</em>&nbsp; Старение или механические повреждения могут вызвать необходимость в ремонте дверных замков. Наши специалисты могут быстро восстановить замок или заменить его при необходимости.</li>
      <li className="mb-2"><em>Улучшение безопасности:</em>&nbsp; При желании повысить уровень безопасности вашего дома или бизнеса, мы предлагаем установку более надежных замков.</li>
    </ul>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Законность процедуры ремонта дверных замков</h2>
    <p className="mb-20 px-4 block mx-auto">Наши специалисты обладают необходимыми навыками и лицензиями, что подтверждает законность наших действий при ремонте дверных замков. Мы соблюдаем все законы и правила, обеспечивая безопасность и комфорт наших клиентов.</p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Порядок действий при ремонте дверных замков</h2>
    <ol className="list-decimal px-4 mx-auto mb-20">
      <li className="mb-2"><em>Вызов:</em>&nbsp; Свяжитесь с нами по телефону, и наша аварийная служба будет на связи 24/7.</li>
      <li className="mb-2"><em>Диагностика:</em>&nbsp; Наши специалисты оценят состояние замка и предложат наилучшее решение.</li>
      <li className="mb-2"><em>Ремонт или замена:</em>&nbsp; Мы проведем ремонт или замену замка, используя только качественные материалы и оборудование.</li>
      <li className="mb-2"><em>Гарантия:</em>&nbsp; Мы предоставляем гарантию на все выполненные работы.</li>
    </ol>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Преимущества вызова аварийной службы ремонта дверных замков</h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2">Быстрота реакции и оперативность при приеме заказа.</li>
      <li className="mb-2">Опытные мастера с профессиональным оборудованием.</li>
      <li className="mb-2">Прозрачная ценовая политика без скрытых платежей.</li>
      <li className="mb-2">Гарантия на выполняемые работы.</li>
    </ul>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Рекомендации по действиям</h3>
    <p className="mb-20 px-4 block mx-auto">В случае утери ключей, не пытайтесь сами вскрывать замок, это может повредить его и увеличить расходы на ремонт. В случае повреждения замка, избегайте самостоятельных попыток ремонта, обратитесь к профессионалам.</p>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Типы замков</h3>
    <p className="mb-20 px-4 block mx-auto">Мы работаем с различными типами замков, включая механические и электронные, цилиндровые и врезные. Мы подберем оптимальное решение для ваших потребностей.</p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Вызов нашего специалиста для ремонта дверного замка в Санкт-Петербурге и Ленобласти</h2>
    <ul className="list-disc px-4 mx-auto mb-10">
      <li className="mb-2">Профессионализм и опыт наших мастеров.</li>
      <li className="mb-2">Широкий спектр услуг, связанных с замками.</li>
      <li className="mb-2">Гарантия качества и безопасности.</li>
      <li className="mb-2">Доступность круглосуточно в Санкт-Петербурге и Ленобласти.</li>
    </ul>
    <p className="mb-10 px-4 block mx-auto">Мы гордимся тем, что делаем, и наша компания &quot;Помогайкин&quot; всегда готова помочь вам в решении всех вопросов, связанных с дверными замками в Санкт-Петербурге. Ваша безопасность и удовлетворение нашей главная цель.</p>
  </Wrap>
);

const DoorlockRepair = ({ location }) => {
  usePage(location.search);
  return (
    <Promo info={InfoBlock} table={Table} description={Description}>
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

export default DoorlockRepair;
