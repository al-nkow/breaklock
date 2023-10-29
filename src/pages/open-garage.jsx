import * as React from 'react';

import Seo from '../components/seo';
import Promo from '../components/Promo';
import Wrap from '../components/Wrap';
import usePage from '../hooks/usePage';
import { SERVICE_DATA } from '../constants';

const InfoBlock = (
  <Wrap extClassName="pt-12 pb-6 lg:pt-16 lg:pb-8" intClassName="md:flex">
    <p className="md:text-lg text-center">
      Компания &quot;Помогайкин&quot; предлагает профессиональные услуги аварийного вскрытия
      замков гаражей в Санкт-Петербурге. Независимо от того, какая ситуация у вас
      сложилась, наши эксперты готовы оперативно прийти на помощь и обеспечить
      быстрый и безопасный доступ к вашему гаражу.
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
      Ситуации, когда может потребоваться вскрытие замка гаража
    </h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2">
        <em>Забыли ключи или потеряли их:</em>&nbsp;
        Потеря ключей или их забытье может стать чрезвычайно неприятной ситуацией.
        Мы поможем вам получить доступ к гаражу, даже если у вас нет ключей.
      </li>
      <li className="mb-2">
        <em>Замок вышел из строя или поврежден:</em>&nbsp;
        Иногда замки могут подвергаться износу или повреждениям, что делает их неэффективными.
        Наши специалисты с легкостью разблокируют или заменят поврежденные замки.
      </li>
      <li className="mb-2">
        <em>Срочный доступ к гаражу в случае аварии:</em>&nbsp;
        В аварийных ситуациях каждая минута имеет значение. Мы гарантируем быстрое
        и безопасное вскрытие замка для обеспечения неотложного доступа к вашему гаражу.
      </li>
      <li className="mb-2">
        <em>Замок заблокировался из-за механической неисправности:</em>&nbsp;
        Иногда замки могут блокироваться из-за неисправностей. Наши специалисты обладают
        опытом в работе с различными типами замков и механизмами, и мы гарантируем успешное
        и безвредное вскрытие.
      </li>
    </ul>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">
      Законность аварийного вскрытия замков гаражей
    </h2>
    <p className="mb-20 px-4 block mx-auto">
      Все наши операции по вскрытию замков гаражей проводятся в строгом соответствии
      с законодательством Российской Федерации. Мы требуем подтверждения вашего права на доступ
      к гаражу, чтобы гарантировать законность и безопасность наших действий.
    </p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">
      Порядок действий при аварийном вскрытии замков гаражей
    </h2>
    <ol className="list-decimal px-4 mx-auto mb-20">
      <li className="mb-2">
        <em>Свяжитесь с нами:</em>&nbsp;
        Позвоните нам по номеру <a href="tel:+78127183016">+7 (812) 718-3016</a>, чтобы вызвать нашу службу.
      </li>
      <li className="mb-2">
        <em>Подтвердите право доступа:</em>&nbsp;
        Предоставьте документы, подтверждающие ваше право на доступ к гаражу.
      </li>
      <li className="mb-2">
        <em>Прибытие специалиста:</em>&nbsp;
        Наш профессиональный специалист приедет на место в кратчайшие сроки.
      </li>
      <li className="mb-2">
        <em>Бережное вскрытие замка:</em>&nbsp;
        Мы проведем вскрытие замка без его повреждения, чтобы сохранить его функциональность.
      </li>
      <li className="mb-2">
        <em>Доступ к гаражу:</em>&nbsp;
        После вскрытия замка, мы предоставим вам доступ к вашему гаражу.
      </li>
    </ol>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">
      Преимущества вызова аварийной службы вскрытия замков
    </h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2">
        <em>Скорость реагирования:</em>&nbsp;
        Мы гарантируем оперативное прибытие к вам в любое время суток.
      </li>
      <li className="mb-2">
        <em>Профессиональные навыки:</em>&nbsp;
        Наши специалисты обладают опытом и знаниями, необходимыми для работы с
        различными типами замков.
      </li>
      <li className="mb-2">
        <em>Безопасность:</em>&nbsp;
        Мы вскроем замок без повреждений, чтобы вы могли продолжить использовать его.
      </li>
    </ul>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">
      Рекомендации по действиям
    </h3>
    <p className="mb-20 px-4 block mx-auto">
      В случае потери ключей, поломки замка или других сложностей с доступом к
      гаражу, рекомендуем немедленно связаться с нами и не пытаться вскрывать
      замок самостоятельно, чтобы избежать повреждений.
    </p>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">
      Типы замков
    </h3>
    <p className="mb-20 px-4 block mx-auto">
      Мы имеем опыт в работе с различными типами замков, включая механические и
      электронные замки, цилиндровые и врезные замки.
    </p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">
      Вызов нашего специалиста для вскрытия замка гаража в Санкт-Петербурге и Ленобласти
    </h2>
    <p className="mb-4 px-4 block mx-auto">
      Выбирая «Помогайкин», вы получаете профессиональный подход, надежность и
      безопасность. Мы гарантируем эффективное вскрытие замков гаражей, а также
      защиту ваших прав и имущества.
    </p>
    <p className="px-4 block mx-auto">
      Если у вас возникли проблемы с доступом к гаражу, не стесняйтесь
      обращаться к нам. Мы всегда готовы помочь вам в любой ситуации и обеспечить
      вашу безопасность.
    </p>
  </Wrap>
);

const OpenGarage = ({ location }) => {
  usePage(location.search);
  return (
    <Promo info={InfoBlock} table={Table} description={Description}>
      <span className="text-blred-500">Вскрытие</span> гаража<br />
      в <span className="text-blred-500">Санкт-Петербурге</span>
    </Promo>
  );
};

export const Head = () => (
  <Seo
    title="Вскрытие гаража в СПб круглосуточно, срочно и недорого – цены от 1100 рублей"
    description="Вскрытие гаража в СПб и ЛО круглосуточно с выездом от 15 минут. 100% гарантия качества работы мастера. Работаем со всеми видами механизмов."
  />
);

export default OpenGarage;
