import * as React from 'react';

import Seo from '../components/seo';
import Promo from '../components/Promo';
import Wrap from '../components/Wrap';
import usePage from '../hooks/usePage';
import { SERVICE_DATA } from '../constants';

const InfoBlock = (
  <Wrap extClassName="pt-12 pb-6 lg:pt-16 lg:pb-8" intClassName="md:flex">
    <p className="md:text-lg text-center">
      Установка броненакладок на дверной замок - надежная мера для обеспечения
      безопасности вашего жилья в Санкт-Петербурге. Компания &quot;Помогайкин&quot; предлагает
      профессиональные услуги по установке и замене броненакладок, обеспечивая надежную
      защиту от несанкционированного доступа и взломов.
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
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Ситуации когда может потребоваться установка броненакладок</h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2"><em>Повышение безопасности:</em>&nbsp; Если вам важна безопасность вашего дома или офиса, установка броненакладок станет надежным шагом для защиты от вторжений и краж.</li>
      <li className="mb-2"><em>Смена двери:</em>&nbsp; При замене двери или усилении существующей, установка броненакладок сделает ваше помещение еще более надежным.</li>
      <li className="mb-2"><em>Аварийные ситуации:</em>&nbsp; В случае утери ключей или исключения доступа кому-то, кто имел доступ ранее, броненакладки могут предотвратить неправомерное вторжение.</li>
    </ul>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Законность процедуры </h2>
    <p className="mb-20 px-4 block mx-auto">Установка броненакладок абсолютно законна и не нарушает правопорядок. Это стандартная мера для укрепления безопасности, и &quot;Помогайкин&quot; следует всем необходимым нормативам и правилам.</p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Порядок действий при установке броненакладок</h2>
    <ol className="list-decimal px-4 mx-auto mb-20">
      <li className="mb-2"><em>Консультация и оценка:</em>&nbsp; Сначала наши специалисты проводят консультацию и оценивают вашу ситуацию.</li>
      <li className="mb-2"><em>Выбор броненакладок:</em>&nbsp; Мы предложим вам различные варианты броненакладок, подходящих под ваши потребности и бюджет.</li>
      <li className="mb-2"><em>Установка:</em>&nbsp; После вашего согласия на выбор броненакладок, наши профессионалы выполняют установку быстро и качественно.</li>
    </ol>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Преимущества вызова службы установки броненакладок на дверной замок</h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2"><em>Опытные мастера:</em>&nbsp; Наши специалисты обладают богатым опытом в установке броненакладок, гарантируя высший уровень безопасности.</li>
      <li className="mb-2"><em>Быстрое реагирование:</em>&nbsp; Мы готовы приехать к вам в любое время суток в Санкт-Петербурге и Ленобласти, чтобы решить вашу проблему.</li>
      <li className="mb-2"><em>Качественные материалы:</em>&nbsp; Мы используем только надежные и качественные материалы, чтобы обеспечить долговечность броненакладок.</li>
      <li className="mb-2"><em>Гарантия безопасности:</em>&nbsp; Установка броненакладок от &quot;Помогайкин&quot; гарантирует вам спокойствие и безопасность ваших близких и имущества.</li>
    </ul>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Рекомендации по действиям</h3>
    <p className="mb-20 px-4 block mx-auto">Помните, что безопасность вашего жилья начинается с качественных замков и броненакладок. Рекомендуется периодически проверять их состояние и при необходимости обращаться к профессионалам для установки новых или замены старых.</p>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Типы броненакладок</h3>
    <p className="mb-20 px-4 block mx-auto">У &quot;Помогайкин&quot; вы можете выбрать из различных типов броненакладок, включая электронные, механические и биометрические системы.</p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Вызов нашего специалиста для установки броненакладки на замок в Санкт-Петербурге и Ленобласти</h2>
    <ul className="list-disc px-4 mx-auto mb-10">
      <li className="mb-2">Мы предоставляем высококачественные услуги по установке броненакладок в Санкт-Петербурге и Ленобласти.</li>
      <li className="mb-2">У нас работают профессиональные мастера с опытом.</li>
      <li className="mb-2">Мы ценим ваше время и предлагаем быстрое реагирование на ваши запросы.</li>
    </ul>
    <p className="mb-10 px-4 block mx-auto">Мы готовы оказывать услуги по установке броненакладок в Санкт-Петербурге и во всей Ленинградской области. Независимо от вашей локации, &quot;Помогайкин&quot; всегда рядом, чтобы обеспечить вашу безопасность.</p>
    <p className="mb-10 px-4 block mx-auto">Защитите свой дом или офис с помощью броненакладок от &quot;Помогайкин&quot; и спите спокойно, зная, что ваше имущество и близкие в надежных руках. Свяжитесь с нами сегодня и получите консультацию по вашей ситуации!</p>
  </Wrap>
);

const InstallArmor = ({ location }) => {
  usePage(location.search);
  return (
    <Promo info={InfoBlock} table={Table} description={Description}>
      <span className="text-blred-500">Установка</span><br />броненакладок<br />
      в <span className="text-blred-500">Санкт-Петербурге</span>
    </Promo>
  );
};

export const Head = () => (
  <Seo
    title="Установка броненакладок в СПб круглосуточно, срочно и недорого – цены от 1100 рублей"
    description="Установка броненакладок в СПб и ЛО круглосуточно с выездом от 15 минут. 100% гарантия качества работы мастера. Работаем со всеми видами механизмов."
  />
);

export default InstallArmor;
