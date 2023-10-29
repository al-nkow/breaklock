import * as React from 'react';

import Seo from '../components/seo';
import Promo from '../components/Promo';
import Wrap from '../components/Wrap';
import List from '../components/List';
import usePage from '../hooks/usePage';
import { SERVICE_DATA, LOCK_BRANDS } from '../constants';

const InfoBlock = (
  <Wrap extClassName="pt-12 pb-6 lg:pt-16 lg:pb-8" intClassName="md:flex">
    <p className="md:text-lg text-center">
      Компания &quot;Помогайкин&quot; предоставляет профессиональные услуги аварийного вскрытия
      замков дверей в Санкт-Петербурге и Ленинградской области. Наша команда экспертов
      всегда готова прийти на помощь в случае потери ключей, поломки замка или других
      ситуаций, требующих срочного доступа в помещение.
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
      Ситуации, когда может потребоваться вскрытие замка двери
    </h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2">
        <em>Потеря ключей или забыли их:</em>&nbsp;
        Ситуации, когда ключи были потеряны или оставлены внутри помещения,
        могут возникнуть внезапно. Мы гарантируем быстрое и безопасное вскрытие двери.
      </li>
      <li className="mb-2">
        <em>Замок вышел из строя или поврежден:</em>&nbsp;
        Механические повреждения или износ могут сделать замок неэффективным.
        Наши специалисты справятся с этой проблемой.
      </li>
      <li className="mb-2">
        <em>Срочный доступ:</em>&nbsp;
        В случае аварии или неотложной необходимости получить доступ к помещению,
        мы готовы прибыть в кратчайшие сроки и обеспечить безопасное вскрытие.
      </li>
      <li className="mb-2">
        <em>Заблокированный замок:</em>&nbsp;
        Замок может заблокироваться из-за механических неисправностей.
        Мы оперативно разблокируем дверь.
      </li>
    </ul>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">
      Законность аварийного вскрытия замков дверей
    </h2>
    <p className="mb-20 px-4 block mx-auto">
      Мы проводим все операции в соответствии с законодательством Российской
      Федерации. Перед началом работы мы проверяем наличие документов,
      подтверждающих право на доступ.
    </p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">
      Порядок действий при аварийном вскрытии замков дверей
    </h2>
    <ol className="list-decimal px-4 mx-auto mb-20">
      <li className="mb-2">
        <em>Свяжитесь с нами:</em>&nbsp;
        Позвоните по номеру <a href="tel:+78127183016">+7 (812) 718-3016</a> для вызова нашей службы.
      </li>
      <li className="mb-2">
        <em>Подтвердите право доступа:</em>&nbsp;
        Предоставьте документы, подтверждающие ваше право на доступ в помещение.
      </li>
      <li className="mb-2">
        <em>Прибытие специалиста:</em> Наш опытный специалист приедет к вам в кратчайшие сроки.
      </li>
      <li className="mb-2">
        <em>Бережное вскрытие замка:</em> Мы вскроем замок без его повреждения.
      </li>
      <li className="mb-2">
        <em>Доступ в помещение:</em> После вскрытия двери мы обеспечим вам доступ в помещение.
      </li>
    </ol>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">
      Преимущества вызова аварийной службы вскрытия замков
    </h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2">
        <em>Скорость реагирования:</em>&nbsp;
        Наша команда оперативно прибудет к вам в любое время суток.
      </li>
      <li className="mb-2">
        <em>Профессиональные навыки:</em>&nbsp;
        Мы обладаем богатым опытом работы с разными типами замков и систем безопасности.
      </li>
      <li className="mb-2">
        <em>Безопасность:</em>&nbsp;
        Вскроем замок так, чтобы избежать повреждений.
      </li>
    </ul>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">
      Рекомендации по действиям
    </h3>
    <p className="mb-20 px-4 block mx-auto">
      Если у вас возникли проблемы с доступом в помещение, не рекомендуется пытаться
      вскрывать замок самостоятельно, чтобы избежать повреждений. Обратитесь к профессионалам.
    </p>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">
      Типы замков
    </h3>
    <p className="mb-20 px-4 block mx-auto">
      Мы работаем с различными видами замков, включая механические и электронные, врезные и
      накладные, цилиндровые и с кодовым замком.
    </p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">
      Вызов нашего специалиста для вскрытия замка двери в Санкт-Петербурге и Ленобласти
    </h2>
    <p className="mb-4 px-4 block mx-auto">
      Выбирая &quot;Помогайкин&quot;, вы получаете надежного партнера, готового оказать помощь
      в любой ситуации, обеспечивая безопасность и сохранность вашего имущества.
    </p>
    <p className="mb-4 px-4 block mx-auto">
      Мы предоставляем услуги аварийного вскрытия дверей в Санкт-Петербурге и Ленинградской области,
      всегда готовы к вам приехать и помочь в случае неотложных ситуаций.
    </p>
  </Wrap>
);

const Brands = (
  <Wrap extClassName="py-12 md:text-lg">
    <div className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">
      Некоторые бренды замков, с которыми работают наши мастера:
    </div>
    <List data={LOCK_BRANDS} />
  </Wrap>
);

const NotFoundPage = ({ location }) => {
  usePage(location.search);
  return (
    <Promo info={InfoBlock} table={Table} description={Description} brands={Brands}>
      <span className="text-blred-500">Вскрытие</span> дверей<br />
      в <span className="text-blred-500">Санкт-Петербурге</span>
    </Promo>
  );
};

export const Head = () => (
  <Seo
    title="Вскрытие дверей в СПб круглосуточно, срочно и недорого – цены от 1100 рублей"
    description="Вскрытие дверей в СПб и ЛО круглосуточно с выездом от 15 минут. 100% гарантия качества работы мастера. Работаем со всеми видами механизмов."
  />
);

export default NotFoundPage;
