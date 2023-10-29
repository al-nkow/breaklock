import * as React from 'react';

import Seo from '../components/seo';
import Promo from '../components/Promo';
import Wrap from '../components/Wrap';
import List from '../components/List';
import usePage from '../hooks/usePage';
import { SERVICE_DATA, SAFE_BRANDS } from '../constants';

const InfoBlock = (
  <Wrap extClassName="pt-12 pb-6 lg:pt-16 lg:pb-8" intClassName="md:flex">
    <p className="md:text-lg text-center">
      Компания &quot;Помогайкин&quot; предоставляет высококачественные услуги по
      ремонту сейфовых замков в Санкт-Петербурге и Ленинградской области. Наша
      команда профессионалов обладает богатым опытом в аварийном вскрытии,
      установке и замене замков, гарантируя безопасность ваших ценных вещей
      и документов.
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
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Ситуации, когда может потребоваться ремонт сейфовых замков</h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2"><em>Забытый код или потеря ключей:</em>&nbsp; В случае утери ключей или забытого кода от сейфа, наши специалисты помогут вам без повреждения сейфа.</li>
      <li className="mb-2"><em>Попытка вскрытия:</em>&nbsp; Попытки незаконного вскрытия сейфа могут повредить замок. Мы восстановим его работоспособность.</li>
      <li className="mb-2"><em>Износ и поломки:</em>&nbsp; С течением времени сейфовые замки могут изнашиваться и ломаться. Наша команда готова решить эту проблему.</li>
    </ul>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Законность ремонта сейфовых замков</h2>
    <p className="mb-20 px-4 block mx-auto">Ремонт и замена сейфовых замков в Санкт-Петербурге проводятся нашими специалистами в строгом соответствии с законодательством России. Мы обеспечиваем законную процедуру и сохранность ваших имущественных интересов.</p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Порядок действий при ремонте замка сейфа</h2>
    <ol className="list-decimal px-4 mx-auto mb-20">
      <li className="mb-2"><em>Обращение к нам:</em>&nbsp; Свяжитесь с нами по телефону или через сайт для консультации и назначения встречи.</li>
      <li className="mb-2"><em>Диагностика:</em>&nbsp; Наши мастера проведут диагностику замка и определят необходимые работы.</li>
      <li className="mb-2"><em>Ремонт и обслуживание:</em>&nbsp; Мы произведем ремонт, замену, или вскрытие замка в зависимости от состояния.</li>
      <li className="mb-2"><em>Гарантия:</em>&nbsp; Мы предоставляем гарантию на выполненные работы и установленные замки.</li>
    </ol>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Преимущества вызова аварийной службы ремонта сейфовых замков</h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2"><em>Скорость реагирования:</em>&nbsp; Мы готовы прибыть к вам в кратчайшие сроки.</li>
      <li className="mb-2"><em>Профессионализм:</em>&nbsp; Наши специалисты имеют богатый опыт и знания в сфере замков и безопасности.</li>
      <li className="mb-2"><em>Безопасность:</em>&nbsp; Работая с нами, вы можете быть уверены в сохранности ваших ценностей.</li>
      <li className="mb-2"><em>Конфиденциальность:</em>&nbsp; Мы соблюдаем строгую конфиденциальность в отношении наших клиентов.</li>
    </ul>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Рекомендации по действиям</h3>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2">Не пытайтесь сами вскрывать сейф в случае проблем.</li>
      <li className="mb-2">Сразу же свяжитесь с нами для получения помощи.</li>
      <li className="mb-2">При обращении уточните марку и модель сейфа, если это возможно.</li>
    </ul>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Типы замков</h3>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2">Электронные цифровые замки.</li>
      <li className="mb-2">Механические комбинационные замки.</li>
      <li className="mb-2">Биометрические замки.</li>
    </ul>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Вызов нашего специалиста для ремонта сейфового замка в Санкт-Петербурге и Ленобласти</h2>
    <ul className="list-disc px-4 mx-auto mb-10">
      <li className="mb-2">Более 10 лет опыта в сфере безопасности и замков.</li>
      <li className="mb-2">Индивидуальный подход к каждому клиенту.</li>
      <li className="mb-2">Широкий спектр услуг: ремонт, установка, замена.</li>
      <li className="mb-2">Доступность и оперативность.</li>
    </ul>
    <p className="mb-10 px-4 block mx-auto">Обслуживание Санкт-Петербурга и Ленинградской области: Мы готовы оказать наши услуги по ремонту сейфовых замков в Санкт-Петербурге и всей Ленинградской области. Независимо от вашего местонахождения, &quot;Помогайкин&quot; гарантирует надежность и качество работы.</p>
    <p className="mb-10 px-4 block mx-auto">Компания &quot;Помогайкин&quot; - это надежный партнер в вопросах безопасности и сейфовых замков в Санкт-Петербурге. Мы готовы прийти на помощь в любой ситуации, обеспечивая вашу безопасность и уверенность в сохранности ваших ценностей. Свяжитесь с нами прямо сейчас и обретите спокойствие вместе с нами.</p>
  </Wrap>
);

const Brands = (
  <Wrap extClassName="py-12 md:text-lg">
    <div className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">
      Некоторые бренды механических и электронных сейфов, с которыми мы работаем:
    </div>
    <List data={SAFE_BRANDS} />
  </Wrap>
);

const SafeLockRepair = ({ location }) => {
  usePage(location.search);
  return (
    <Promo info={InfoBlock} table={Table} description={Description} brands={Brands}>
      <span className="text-blred-500">Ремонт</span><br />сейфовых замков<br />
      в <span className="text-blred-500">Санкт-Петербурге</span>
    </Promo>
  );
};

export const Head = () => (
  <Seo
    title="Ремонт сейфовых замков в СПб круглосуточно, срочно и недорого – цены от 1100 рублей"
    description="Ремонт сейфовых замков в СПб и ЛО круглосуточно с выездом от 15 минут. 100% гарантия качества работы мастера. Работаем со всеми видами механизмов."
  />
);

export default SafeLockRepair;
