import * as React from 'react';

import Seo from '../components/seo';
import Promo from '../components/Promo';
import Wrap from '../components/Wrap';
import usePage from '../hooks/usePage';
import { SERVICE_DATA } from '../constants';

const InfoBlock = (
  <Wrap extClassName="pt-12 pb-6 lg:pt-16 lg:pb-8" intClassName="md:flex">
    <p className="md:text-lg text-center">
      Установка надежных замков - это важнейшая составляющая обеспечения безопасности
      вашего жилья или офиса в Санкт-Петербурге. Компания &quot;Помогайкин&quot; предоставляет
      профессиональные услуги по установке замков, гарантируя вашу защиту и покой.
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
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Ситуации, когда может потребоваться установка замков</h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2"><em>Повышение безопасности</em>&nbsp;<em>:</em>&nbsp; Установка современных и надежных замков усилит защиту вашего дома или офиса от несанкционированного доступа.</li>
      <li className="mb-2"><em>Замена старых замков</em>&nbsp;<em>:</em>&nbsp; Старые или изношенные замки могут стать легкой мишенью для злоумышленников. Их замена повысит уровень безопасности.</li>
      <li className="mb-2"><em>Исключение доступа</em>&nbsp;<em>:</em>&nbsp; В случае утери ключей или необходимости исключить доступ некоторых лиц, установка новых замков становится неотложной мерой.</li>
    </ul>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Законность процедуры установки замков</h2>
    <p className="mb-20 px-4 block mx-auto">Процедура установки замков абсолютно законна и не нарушает никаких законов. &quot;Помогайкин&quot; всегда действует в рамках законодательства.</p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Порядок действий при установке замков</h2>
    <ol className="list-decimal px-4 mx-auto mb-20">
      <li className="mb-2"><em>Консультация и выбор замков</em>&nbsp;<em>:</em>&nbsp; Сначала наши эксперты проводят консультацию с вами и помогают выбрать наиболее подходящие замки для ваших нужд.</li>
      <li className="mb-2"><em>Установка замков</em>&nbsp;<em>:</em>&nbsp; После согласования выбора, наши профессиональные мастера производят установку замков качественно и оперативно.</li>
    </ol>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Преимущества вызова службы установки замков</h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2"><em>Профессионализм и опыт</em>&nbsp;<em>:</em>&nbsp; Наши специалисты имеют богатый опыт в установке замков, обеспечивая высший стандарт качества и безопасности.</li>
      <li className="mb-2"><em>Скорость реагирования</em>&nbsp;<em>:</em>&nbsp; Мы доступны круглосуточно и готовы приехать к вам в любое время для решения вашей проблемы.</li>
      <li className="mb-2"><em>Использование надежных материалов</em>&nbsp;<em>:</em>&nbsp; Мы работаем только с надежными замками и оборудованием, чтобы гарантировать их долговечность и надежность.</li>
    </ul>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Рекомендации по действиям</h3>
    <p className="mb-20 px-4 block mx-auto">Регулярная проверка состояния ваших замков и оперативное их обслуживание помогут избежать неприятных сюрпризов и обеспечат вашу безопасность.</p>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Типы замков</h3>
    <p className="mb-20 px-4 block mx-auto">&quot;Помогайкин&quot; предлагает разнообразные типы замков, включая механические, электронные, с кодовыми и биометрическими системами управления доступом.</p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Вызов нашего специалиста для установки замка в Санкт-Петербурге и Ленобласти</h2>
    <ul className="list-disc px-4 mx-auto mb-10">
      <li className="mb-2">Наша компания предоставляет качественные услуги по установке замков в Санкт-Петербурге и Ленобласти.</li>
      <li className="mb-2">Мы ценим вашу безопасность и комфорт, предоставляя быстрое реагирование и опытных мастеров.</li>
      <li className="mb-2">С нами вы получаете гарантию надежности и высокого уровня обслуживания.</li>
    </ul>
    <p className="mb-10 px-4 block mx-auto">&quot;Помогайкин&quot; готов предоставить услуги по установке замков в Санкт-Петербурге и Ленинградской области. Независимо от вашей локации, мы всегда рядом, чтобы обеспечить вашу безопасность и комфорт. Обратитесь к нам уже сегодня и получите профессиональную консультацию!</p>
  </Wrap>
);

const InstallLock = ({ location }) => {
  usePage(location.search);
  return (
    <Promo info={InfoBlock} table={Table} description={Description}>
      <span className="text-blred-500">Установка</span> замков<br />
      в <span className="text-blred-500">Санкт-Петербурге</span>
    </Promo>
  );
};

export const Head = () => (
  <Seo
    title="Установка замков в СПб круглосуточно, срочно и недорого – цены от 1100 рублей"
    description="Установка замков в СПб и ЛО круглосуточно с выездом от 15 минут. 100% гарантия качества работы мастера. Работаем со всеми видами механизмов."
  />
);

export default InstallLock;
