import * as React from 'react';

import Seo from '../components/seo';
import Promo from '../components/Promo';
import Wrap from '../components/Wrap';
import usePage from '../hooks/usePage';
import { SERVICE_DATA } from '../constants';

const InfoBlock = (
  <Wrap extClassName="pt-12 pb-6 lg:pt-16 lg:pb-8" intClassName="md:flex">
    <p className="md:text-lg text-center">
      Компания &quot;Помогайкин&quot; предлагает профессиональные услуги по установке
      дверных доводчиков в Санкт-Петербурге. Установка дверных доводчиков – надежный
      способ усилить безопасность вашего дома. Наша команда специалистов имеет богатый
      опыт в области аварийного вскрытия замков, установки и замены замков.
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
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Ситуации, когда может потребоваться установка дверных доводчиков</h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2">Двери, особенно входные, подвержены высокому риску взлома.</li>
      <li className="mb-2">Жители Санкт-Петербурга сталкиваются с участившимися случаями краж и незаконного проникновения.</li>
      <li className="mb-2">Установка дверных доводчиков является эффективным способом предотвратить проникновение злоумышленников.</li>
    </ul>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Законность установки дверных доводчиков</h2>
    <p className="mb-20 px-4 block mx-auto">Установка дверных доводчиков является законной и предусмотрена законодательством Российской Федерации. Обратившись в &quot;Помогайкин&quot;, вы можете быть уверены в соблюдении всех норм и правил при проведении данной процедуры.</p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Порядок действий при установке дверных доводчиков</h2>
    <ol className="list-decimal px-4 mx-auto mb-20">
      <li className="mb-2"><em>Консультация и оценка:</em>&nbsp; Наш эксперт приедет к вам, оценит ситуацию и поможет выбрать подходящий тип дверного доводчика.</li>
      <li className="mb-2"><em>Подготовка и установка:</em>&nbsp; Наши специалисты произведут необходимые работы по установке доводчика.</li>
      <li className="mb-2"><em>Тестирование и настройка:</em>&nbsp; После установки будет проведено тестирование и настройка доводчика для оптимальной работы.</li>
    </ol>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Преимущества вызова службы установки дверных доводчиков</h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2"><em>Быстрое реагирование:</em>&nbsp; наша команда готова прийти на помощь в любое время суток, 7 дней в неделю.</li>
      <li className="mb-2"><em>Профессиональные специалисты:</em>&nbsp; наши сотрудники обладают опытом и знаниями для решения любых проблем с замками.</li>
      <li className="mb-2"><em>Качественное оборудование:</em>&nbsp; мы используем современное оборудование, что гарантирует безопасность и эффективность проводимых работ.</li>
    </ul>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Рекомендации по действиям</h3>
    <p className="mb-20 px-4 block mx-auto">При обнаружении проблем с замком, не пытайтесь самостоятельно проводить ремонт или установку доводчика. Обратитесь к профессионалам &quot;Помогайкин&quot; для получения консультации и качественных услуг.</p>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Типы замков</h3>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2"><em>Врезные замки:</em>&nbsp; Обеспечивают высокий уровень безопасности и надежности.</li>
      <li className="mb-2"><em>Цилиндровые замки:</em>&nbsp; Отличаются простотой использования и удобством обслуживания.</li>
      <li className="mb-2"><em>Электромеханические замки:</em>&nbsp; Позволяют дистанционно управлять доступом и повышают уровень безопасности.</li>
    </ul>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Вызов нашего специалиста для установки дверных доводчиков в Санкт-Петербурге и Ленобласти</h2>
    <ul className="list-disc px-4 mx-auto mb-10">
      <li className="mb-2"><em>Опыт и надежность:</em>&nbsp; Наша компания &quot;Помогайкин&quot; имеет многолетний опыт работы в сфере аварийного вскрытия замков и установки доводчиков.</li>
      <li className="mb-2"><em>Квалифицированные специалисты:</em>&nbsp; Наша команда состоит из профессионалов, прошедших специальное обучение и сертификацию.</li>
      <li className="mb-2"><em>Индивидуальный подход:</em>&nbsp; Мы учитываем особенности каждого клиента и предлагаем оптимальные решения в соответствии с их потребностями и бюджетом.</li>
      <li className="mb-2"><em>Гарантия качества:</em>&nbsp; Мы предоставляем гарантию на выполненные нами работы и используем только высококачественные материалы.</li>
    </ul>
    <p className="mb-10 px-4 block mx-auto">Наша компания предоставляет услуги по установке дверных доводчиков не только в Санкт-Петербурге, но и в Ленобласти. Мы оперативно реагируем на вызовы клиентов в различных районах и предлагаем быстрое и качественное обслуживание.</p>
    <p className="mb-10 px-4 block mx-auto">Установка дверных доводчиков является эффективным способом обеспечить безопасность вашего дома. Компания &quot;Помогайкин&quot; предлагает профессиональные услуги по установке дверных доводчиков в Санкт-Петербурге и Ленобласти. Наши квалифицированные специалисты помогут вам выбрать и установить подходящий доводчик, обеспечивая безопасность и комфорт вашего жилья. Обратитесь к нам сегодня, и мы сделаем все возможное, чтобы защитить ваш дом от нежелательного проникновения и обеспечить вам спокойствие.</p>
  </Wrap>
);

const InstallCloser = ({ location }) => {
  usePage(location.search);
  return (
    <Promo info={InfoBlock} table={Table} description={Description}>
      <span className="text-blred-500">Установка</span><br />дверных доводчиков<br />
      в <span className="text-blred-500">Санкт-Петербурге</span>
    </Promo>
  );
};

export const Head = () => (
  <Seo
    title="Установка дверных доводчиков в СПб круглосуточно, срочно и недорого – цены от 1100 рублей"
    description="Установка дверных доводчиков в СПб и ЛО круглосуточно с выездом от 15 минут. 100% гарантия качества работы мастера. Работаем со всеми видами механизмов."
  />
);

export default InstallCloser;
