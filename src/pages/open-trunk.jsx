import * as React from 'react';

import Seo from '../components/seo';
import Promo from '../components/Promo';
import Wrap from '../components/Wrap';
import List from '../components/List';
import usePage from '../hooks/usePage';
import { SERVICE_DATA, AUTO_BRANDS } from '../constants';

const InfoBlock = (
  <Wrap extClassName="pt-12 pb-6 lg:pt-16 lg:pb-8" intClassName="md:flex">
    <p className="md:text-lg text-center">
      Компания &quot;Помогайкин&quot; предлагает вам свои профессиональные услуги по аварийному
      вскрытию багажника автомобиля в Санкт-Петербурге. Мы понимаем, что непредвиденные
      ситуации, такие как потеря ключей или поломка замка багажника, могут возникнуть
      в самый неподходящий момент. Наша команда специалистов готова оперативно прийти
      а помощь и обеспечить доступ к вашим вещам, сохраняя при этом целостность автомобиля.
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
      Ситуации, когда может потребоваться аварийное вскрытие багажника автомобиля
    </h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2">Потеря ключей от багажника или их поломка.</li>
      <li className="mb-2">Застревание замка багажника.</li>
      <li className="mb-2">Нарушение электронной системы открытия багажника.</li>
      <li className="mb-2">Ломка замка багажника при попытке вскрыть его самостоятельно.</li>
    </ul>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Законность вскрытия багажника автомобиля</h2>
    <p className="mb-20 px-4 block mx-auto">Важно отметить, что аварийное вскрытие багажника автомобиля в Санкт-Петербурге является законной процедурой, осуществляемой только при наличии документов, подтверждающих право собственности на автомобиль или письменного согласия владельца.</p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Порядок действий при аварийном вскрытии багажника автомобиля</h2>
    <ol className="list-decimal px-4 mx-auto mb-20">
      <li className="mb-2">Свяжитесь с нашей аварийной службой вскрытия замков по телефону <a href="tel:+78127183016">+7 (812) 718-3016</a>.</li>
      <li className="mb-2">Укажите адрес и расскажите о проблеме с замком багажника.</li>
      <li className="mb-2">Наши специалисты оперативно прибудут на место.</li>
      <li className="mb-2">С использованием специализированных инструментов и оборудования, они проведут аварийное вскрытие багажника автомобиля.</li>
      <li className="mb-2">После успешного выполнения работы, вы получите доступ к вашим вещам в багажнике.</li>
    </ol>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Преимущества вызова аварийной службы вскрытия замков</h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2">Высококвалифицированные мастера с многолетним опытом работы в области вскрытия автомобилей.</li>
      <li className="mb-2">Быстрое реагирование на вызовы клиентов и оперативное прибытие на место.</li>
      <li className="mb-2">Применение специальных инструментов и технологий, минимизирующих риск повреждения багажника и автомобиля.</li>
      <li className="mb-2">Гарантия сохранности ваших вещей в багажнике.</li>
    </ul>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Рекомендации по действиям</h3>
    <p className="mb-20 px-4 block mx-auto">Не пытайтесь вскрывать замок багажника самостоятельно, чтобы избежать повреждений автомобиля. Обратитесь к нам как можно скорее, чтобы избежать дополнительных неудобств.</p>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Типы замков</h3>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2">Механические замки багажника.</li>
      <li className="mb-2">Электронные замки багажника.</li>
    </ul>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Вызов нашего специалиста для вскрытия багажника автомобиля в Санкт-Петербурге и Ленобласти</h2>
    <ul className="list-disc px-4 mx-auto mb-10">
      <li className="mb-2"><em>Большой опыт работы в сфере аварийного вскрытия замков:</em>&nbsp; Наша команда специалистов обладает глубокими знаниями и навыками, позволяющими оперативно и безопасно решать проблемы с замками багажников автомобилей.</li>
      <li className="mb-2"><em>Профессиональное оборудование и инструменты:</em>&nbsp; Мы используем специализированные инструменты и современное оборудование, чтобы минимизировать риск повреждения багажника и автомобиля при вскрытии замка.</li>
      <li className="mb-2"><em>Быстрое реагирование и оперативное прибытие на место:</em>&nbsp; Мы понимаем, что проблемы с замком багажника требуют немедленного решения, поэтому мы стараемся оперативно реагировать на вызовы клиентов и прибывать на место в кратчайшие сроки.</li>
      <li className="mb-2"><em>Гарантия сохранности ваших вещей в багажнике:</em>&nbsp; Наша команда работает аккуратно и профессионально, чтобы обеспечить сохранность ваших вещей при вскрытии замка багажника. Мы понимаем, что ваши вещи имеют для вас ценность, поэтому обращаем особое внимание на их сохранность.</li>
      <li className="mb-2"><em>Полное соблюдение законности:</em>&nbsp; Мы работаем в соответствии с законодательством и осуществляем аварийное вскрытие багажников только при наличии необходимых документов или письменного согласия владельца автомобиля.</li>
    </ul>
    <p className="mb-20 px-4 block mx-auto">
      Если у вас возникла проблема с замком багажника автомобиля, не стоит беспокоиться.
      Компания &quot;Помогайкин&quot; готова предоставить вам профессиональную помощь и
      оперативно решитьэту проблему. Свяжитесь с нами по телефону
      <a href="tel:+78127183016">+7 (812) 718-3016</a> и наши специалисты прибудут на место,
      чтобы обеспечить доступ к вашим вещам в багажнике автомобиля.
    </p>
  </Wrap>
);

const Brands = (
  <Wrap extClassName="py-12 md:text-lg">
    <div className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">
      Некоторые бренды машин, с которыми работают наши мастера:
    </div>
    <List data={AUTO_BRANDS} />
  </Wrap>
);

const OpenTrunk = ({ location }) => {
  usePage(location.search);
  return (
    <Promo info={InfoBlock} table={Table} description={Description} brands={Brands}>
      <span className="text-blred-500">Вскрытие</span> багажника<br />
      в <span className="text-blred-500">Санкт-Петербурге</span>
    </Promo>
  );
};

export const Head = () => (
  <Seo
    title="Вскрытие багажника в СПб круглосуточно, срочно и недорого – цены от 1100 рублей"
    description="Вскрытие багажника в СПб и ЛО круглосуточно с выездом от 15 минут. 100% гарантия качества работы мастера. Работаем со всеми видами механизмов."
  />
);

export default OpenTrunk;
