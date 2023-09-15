import * as React from 'react';

import Seo from '../components/seo';
import Promo from '../components/Promo';
import Wrap from '../components/Wrap';
import usePage from '../hooks/usePage';
import { SERVICE_DATA } from '../constants';

const InfoBlock = (
  <Wrap extClassName="pt-12 pb-6 lg:pt-16 lg:pb-8" intClassName="md:flex">
    <p className="md:text-lg text-center">
      Установка дверных ручек - это простой и эффективный способ повысить комфорт
      и безопасность вашего жилья или офиса в Санкт-Петербурге. Компания &quot;Помогайкин&quot;
      предоставляет высококачественные услуги по установке дверных ручек, гарантируя
      надежную защиту и легкость использования.
    </p>
  </Wrap>
);

const Table = (
  <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] border-t border-gray-300 my-10 mx-auto">
    {SERVICE_DATA[1].items.map((s) => (
      <div
        key={s.id}
        className="bg-[#f2f2f2] inline-block text-center p-4 cursor-pointer flex justify-between items-start border-b border-l border-r border-gray-300"
      >
        <span className="max-w-[60%] text-left lowercase">{SERVICE_DATA[1].title} {s.title}</span>
        <span>от <span className="text-lg">{s.price} ₽</span></span>
      </div>
    ))}
  </div>
);

const Description = (
  <Wrap extClassName="pt-12 pb-20 lg:pt-16 md:text-lg">
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Ситуации, когда может потребоваться установка дверных ручек</h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2"><em>Обновление двери</em>&nbsp;<em>:</em>&nbsp; При смене двери или ее ремонте, установка новых дверных ручек позволяет сделать вход в ваш дом более современным и функциональным.</li>
      <li className="mb-2"><em>Износ и поломка</em>&nbsp;<em>:</em>&nbsp; Если дверные ручки старые, изношены или сломаны, их замена обеспечит нормальное функционирование вашей двери.</li>
      <li className="mb-2"><em>Повышение безопасности</em>&nbsp;<em>:</em>&nbsp; Установка современных дверных ручек с дополнительными механизмами защиты помогает предотвратить незаконный доступ.</li>
    </ul>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Законность процедуры установки дверных ручек</h2>
    <p className="mb-20 px-4 block mx-auto">Установка дверных ручек является законной и стандартной процедурой. Она не нарушает никаких норм и правил, и компания &quot;Помогайкин&quot; всегда действует в соответствии с законом.</p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Порядок действий при установке дверных ручек</h2>
    <ol className="list-decimal px-4 mx-auto mb-20">
      <li className="mb-2"><em>Консультация и выбор ручек</em>&nbsp;<em>:</em>&nbsp; Наши специалисты проводят консультацию с вами и помогают выбрать подходящие дверные ручки.</li>
      <li className="mb-2"><em>Установка ручек</em>&nbsp;<em>:</em>&nbsp; После вашего согласия, наши квалифицированные мастера производят быструю и профессиональную установку ручек.</li>
    </ol>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Преимущества вызова службы установки дверных ручек</h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2"><em>Опыт и профессионализм</em>&nbsp;<em>:</em>&nbsp; Наши мастера имеют богатый опыт в установке дверных ручек, гарантируя их надежную работу.</li>
      <li className="mb-2"><em>Быстрое реагирование</em>&nbsp;<em>:</em>&nbsp; Мы готовы приехать к вам в любое время для решения вашей проблемы.</li>
      <li className="mb-2"><em>Качественные ручки</em>&nbsp;<em>:</em>&nbsp; Мы используем только высококачественные дверные ручки, обеспечивая их долговечность и надежность.</li>
    </ul>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Рекомендации по действиям</h3>
    <p className="mb-20 px-4 block mx-auto">Регулярная проверка состояния дверных ручек и своевременная замена помогут избежать неожиданных поломок и обеспечат вам безопасность.</p>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Типы дверных ручек</h3>
    <p className="mb-20 px-4 block mx-auto">&quot;Помогайкин&quot; предлагает разнообразные типы дверных ручек, включая классические, с кодовыми замками, электронными системами управления и многое другое.</p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Вызов нашего специалиста для установки дверных ручек в Санкт-Петербурге и Ленобласти</h2>
    <ul className="list-disc px-4 mx-auto mb-10">
      <li className="mb-2">Наша компания предоставляет качественные услуги по установке дверных ручек в Санкт-Петербурге и Ленобласти.</li>
      <li className="mb-2">Мы ценим вашу безопасность и комфорт, предоставляя быстрое реагирование и квалифицированных мастеров.</li>
      <li className="mb-2">С нами вы получаете гарантию надежности и высокого уровня обслуживания.</li>
    </ul>
    <p className="mb-10 px-4 block mx-auto">&quot;Помогайкин&quot; готов предоставить услуги по установке дверных ручек в Санкт-Петербурге и Ленинградской области. Мы всегда рядом, чтобы обеспечить вашу безопасность и комфорт. Обратитесь к нам уже сегодня и получите профессиональную консультацию!</p>
  </Wrap>
);

const InstallHandle = ({ location }) => {
  usePage(location.search);
  return (
    <Promo info={InfoBlock} table={Table} description={Description}>
      <span className="text-blred-500">Установка</span><br />дверных ручек<br />
      в <span className="text-blred-500">Санкт-Петербурге</span>
    </Promo>
  );
};

export const Head = () => (
  <Seo
    title="Установка дверных ручек в СПб круглосуточно, срочно и недорого – цены от 1100 рублей"
    description="Установка дверных ручек в СПб и ЛО круглосуточно с выездом от 15 минут. 100% гарантия качества работы мастера. Работаем со всеми видами механизмов."
  />
);

export default InstallHandle;
