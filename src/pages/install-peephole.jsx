import * as React from 'react';

import Seo from '../components/seo';
import Promo from '../components/Promo';
import Wrap from '../components/Wrap';
import usePage from '../hooks/usePage';
import { SERVICE_DATA } from '../constants';

const InfoBlock = (
  <Wrap extClassName="pt-12 pb-6 lg:pt-16 lg:pb-8" intClassName="md:flex">
    <p className="md:text-lg text-center">
      Установка дверного глазка - это простая, но важная мера для обеспечения
      вашей безопасности и комфорта в Санкт-Петербурге. Компания &quot;Помогайкин&quot;
      предлагает профессиональные услуги по установке дверных глазков,
      гарантируя вашу защиту и спокойствие.
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
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Ситуации, когда может потребоваться установка дверного глазка</h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2"><em>Улучшение безопасности</em>&nbsp;<em>:</em>&nbsp; Дверной глазок позволяет видеть посетителей и неоткрывая дверь. Это особенно полезно в ночное время или при сомнительных посещениях.</li>
      <li className="mb-2"><em>Идентификация посетителей</em>&nbsp;<em>:</em>&nbsp; Установка дверного глазка позволяет вам убедиться, кто находится снаружи, прежде чем открывать дверь, что особенно важно для жителей многоэтажных домов.</li>
      <li className="mb-2"><em>Защита от нежелательных гостей</em>&nbsp;<em>:</em>&nbsp; Дверной глазок помогает избегать нежелательных посещений и внезапных вторжений.</li>
    </ul>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Законность процедуры установки дверного глазка</h2>
    <p className="mb-20 px-4 block mx-auto">Установка дверного глазка абсолютно законна и не нарушает никаких правил или нормативов. Это стандартная мера безопасности, и &quot;Помогайкин&quot; соблюдает все законные требования.</p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Порядок действий при установке дверного глазка:</h2>
    <ol className="list-decimal px-4 mx-auto mb-20">
      <li className="mb-2"><em>Консультация и выбор глазка</em>&nbsp;<em>:</em>&nbsp; Наши специалисты проводят консультацию и помогают вам выбрать подходящий дверной глазок для вашей двери.</li>
      <li className="mb-2"><em>Установка глазка</em>&nbsp;<em>:</em>&nbsp; После согласия на выбор глазка, наши опытные мастера выполняют установку аккуратно и профессионально.</li>
    </ol>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Преимущества вызова службы установки дверного глазка</h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2"><em>Опытные специалисты</em>&nbsp;<em>:</em>&nbsp; Наши мастера обладают большим опытом в установке дверных глазков, обеспечивая высший уровень качества и безопасности.</li>
      <li className="mb-2"><em>Быстрое реагирование</em>&nbsp;<em>:</em>&nbsp; Мы готовы приехать к вам в любое время, чтобы установить дверной глазок в Санкт-Петербурге и Ленобласти.</li>
      <li className="mb-2"><em>Качественные материалы</em>&nbsp;<em>:</em>&nbsp; Мы используем только надежные и высококачественные дверные глазки, чтобы обеспечить долговечность и надежность.</li>
    </ul>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Рекомендации по действиям</h3>
    <p className="mb-20 px-4 block mx-auto">Соблюдение простых мер безопасности, таких как установка дверного глазка, может существенно повысить ваше уровень защиты. Рекомендуется периодически проверять состояние глазка и обращаться к профессионалам для замены или обслуживания при необходимости.</p>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Типы глазков</h3>
    <p className="mb-20 px-4 block mx-auto">&quot;Помогайкин&quot; предлагает различные типы дверных глазков, включая оптические, электронные и цифровые варианты, чтобы удовлетворить ваши потребности.</p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Вызов нашего специалиста для установки дверного глазка в Санкт-Петербурге и Ленобласти</h2>
    <ul className="list-disc px-4 mx-auto mb-10">
      <li className="mb-2">Наша компания предоставляет высококачественные услуги по установке дверных глазков в Санкт-Петербурге и Ленобласти.</li>
      <li className="mb-2">Мы ценим вашу безопасность и комфорт, предоставляя быструю и профессиональную помощь.</li>
      <li className="mb-2">С нами вы получаете надежность и качество на высшем уровне.</li>
    </ul>
    <p className="mb-10 px-4 block mx-auto">&quot;Помогайкин&quot; готов оказывать услуги по установке дверных глазков в Санкт-Петербурге и Ленобласти. Независимо от вашей локации, мы всегда готовы обеспечить вашу безопасность и комфорт. Свяжитесь с нами сегодня, чтобы узнать больше и получить консультацию!</p>
  </Wrap>
);

const InstallPeephole = ({ location }) => {
  usePage(location.search);
  return (
    <Promo info={InfoBlock} table={Table} description={Description}>
      <span className="text-blred-500">Установка</span><br />дверного глазка<br />
      в <span className="text-blred-500">Санкт-Петербурге</span>
    </Promo>
  );
};

export const Head = () => (
  <Seo
    title="Установка дверного глазка в СПб круглосуточно, срочно и недорого – цены от 1100 рублей"
    description="Установка дверного глазка в СПб и ЛО круглосуточно с выездом от 15 минут. 100% гарантия качества работы мастера. Работаем со всеми видами механизмов."
  />
);

export default InstallPeephole;
