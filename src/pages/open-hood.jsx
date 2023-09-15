import * as React from 'react';

import Seo from '../components/seo';
import Promo from '../components/Promo';
import Wrap from '../components/Wrap';
import usePage from '../hooks/usePage';
import { SERVICE_DATA } from '../constants';

const InfoBlock = (
  <Wrap extClassName="pt-12 pb-6 lg:pt-16 lg:pb-8" intClassName="md:flex">
    <p className="md:text-lg text-center">
      Вы оказались в неприятной ситуации, когда ваш автомобиль не открывается, а
      важные вещи остались в багажнике? Компания &quot;Помогайкин&quot; предлагает вам свои
      профессиональные услуги по аварийному вскрытию капота автомобиля в Санкт-Петербурге.
      Мы готовы оперативно прийти на помощь в любое время суток, чтобы решить вашу проблему
      и обеспечить сохранность вашего автомобиля.
    </p>
  </Wrap>
);

const Table = (
  <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] border-t border-gray-300 my-10 mx-auto">
    {SERVICE_DATA[0].items.map((s) => (
      <div
        key={s.id}
        className="bg-[#f2f2f2] inline-block text-center p-4 cursor-pointer flex justify-between items-start border-b border-l border-r border-gray-300"
      >
        <span className="max-w-[60%] text-left lowercase">{SERVICE_DATA[0].title} {s.title}</span>
        <span>от <span className="text-lg">{s.price} ₽</span></span>
      </div>
    ))}
  </div>
);

const Description = (
  <Wrap extClassName="pt-12 pb-20 lg:pt-16 md:text-lg">
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">
      Ситуации, когда может потребоваться аварийное вскрытие капота автомобиля в Санкт-Петербурге:
    </h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2">Потеря ключей или их поломка.</li>
      <li className="mb-2">Замерзший замок капота.</li>
      <li className="mb-2">Застревание механизма открытия капота.</li>
      <li className="mb-2">Нарушение электронной системы открытия капота.</li>
    </ul>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Законность аварийного вскрытия капота автомобиля</h2>
    <p className="mb-20 px-4 block mx-auto">Важно отметить, что аварийное вскрытие капота автомобиля в Санкт-Петербурге является законной процедурой, осуществляемой только при наличии документов, подтверждающих право собственности на автомобиль или письменного согласия владельца.</p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Порядок действий при аварийном вскрытии капота автомобиля</h2>
    <ol className="list-decimal px-4 mx-auto mb-20">
      <li className="mb-2">Вызовите нашу аварийную службу вскрытия замков по телефону <a href="tel:+78127183016">+7 (812) 718-3016</a>.</li>
      <li className="mb-2">Уточните адрес и описание проблемы.</li>
      <li className="mb-2">Наш специалист прибудет на место в кратчайшие сроки.</li>
      <li className="mb-2">Он проведет профессиональное вскрытие капота автомобиля, минимизируя повреждения.</li>
      <li className="mb-2">После успешного выполнения работы, вы получите доступ к багажнику и сможете забрать свои вещи.</li>
    </ol>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Преимущества вызова аварийной службы вскрытия замков компании &quot;Помогайкин&quot;:</h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2">Опытные мастера, обладающие высокой квалификацией в области вскрытия автомобилей.</li>
      <li className="mb-2">Быстрое реагирование на вызовы клиентов и оперативное прибытие на место.</li>
      <li className="mb-2">Использование профессионального оборудования и инструментов, исключающих возможность повреждения автомобиля.</li>
      <li className="mb-2">Доступные цены и прозрачная система оплаты.</li>
    </ul>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Рекомендации по действиям</h3>
    <p className="mb-20 px-4 block mx-auto">Не пытайтесь вскрывать капот самостоятельно, чтобы избежать повреждений автомобиля. Обратитесь к нам как можно скорее, чтобы избежать дополнительных неудобств.</p>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Типы замков</h3>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2">Механические замки капота.</li>
      <li className="mb-2">Электронные замки капота.</li>
    </ul>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Вызов нашего специалиста для вскрытия капота автомобиля в Санкт-Петербурге и Ленобласти</h2>
    <ul className="list-disc px-4 mx-auto mb-10">
      <li className="mb-2">Большой опыт работы в сфере аварийного вскрытия замков.</li>
      <li className="mb-2">Высокая профессиональная подготовка наших специалистов.</li>
      <li className="mb-2">Использование современного оборудования и инструментов.</li>
      <li className="mb-2">Приемлемые цены и гибкая система оплаты.</li>
      <li className="mb-2">Гарантия сохранности вашего автомобиля и его компонентов при проведении вскрытия капота.</li>
    </ul>
    <p className="mb-10 px-4 block mx-auto">Мы предоставляем свои услуги не только в самом городе Санкт-Петербурге, но и во всей Ленинградской области. Независимо от того, где вы находитесь в этом регионе, наши мастера оперативно приедут к вам и окажут профессиональную помощь в аварийном вскрытии капота автомобиля.</p>
    <p className="mb-10 px-4 block mx-auto">Доверьтесь нам, и мы сделаем все возможное, чтобы решить вашу проблему с капотом автомобиля быстро, качественно и без повреждений. Мы понимаем, что потеря ключей или неработающий замок капота могут стать настоящей помехой в вашей повседневной жизни. Поэтому, при обращении к нам, вы можете рассчитывать на оперативное решение проблемы и восстановление доступа к вашему автомобилю.</p>
    <p className="mb-10 px-4 block mx-auto">Не откладывайте решение проблемы на потом, звоните нам прямо сейчас и получите квалифицированную помощь по аварийному вскрытию капота автомобиля в Санкт-Петербурге и Ленобласти. Мы гарантируем ваше удовлетворение от нашей работы и вашу полную безопасность при проведении процедуры вскрытия капота.</p>
  </Wrap>
);

const OpenHood = ({ location }) => {
  usePage(location.search);
  return (
    <Promo info={InfoBlock} table={Table} description={Description}>
      <span className="text-blred-500">Вскрытие</span> капота<br />
      в <span className="text-blred-500">Санкт-Петербурге</span>
    </Promo>
  );
};

export const Head = () => (
  <Seo
    title="Вскрытие капота в СПб круглосуточно, срочно и недорого – цены от 1100 рублей"
    description="Вскрытие капота в СПб и ЛО круглосуточно с выездом от 15 минут. 100% гарантия качества работы мастера. Работаем со всеми видами механизмов."
  />
);

export default OpenHood;
