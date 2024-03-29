import * as React from 'react';

import Seo from '../components/seo';
import Promo from '../components/Promo';
import Wrap from '../components/Wrap';
import List from '../components/List';
import usePage from '../hooks/usePage';
import { SERVICE_DATA, SAFE_BRANDS } from '../constants';

const FAQ = [
  {
    qstn: 'Какой тип замков сейфа вы можете открыть - механические или электронные?',
    resp: 'Наши мастера специализируются на открытии как механических, так и электронных замков, включая импортные и российские модели.',
  }, {
    qstn: 'Сколько времени займет мастеру взломать мой сейф и открыть его двери?',
    resp: 'Время работы зависит от сложности механизма, но обычно мастера проводят эту работу в течение нескольких часов.',
  }, {
    qstn: 'Могу ли я заказать срочный вызов мастера для вскрытия в нерабочее время?',
    resp: 'Да, мы предоставляем услуги круглосуточно, так что вы можете заказать вызов мастера даже в нерабочее время.',
  }, {
    qstn: 'Будет ли механизм замка поврежден после его вскрытия?',
    resp: 'Мы стараемся минимизировать повреждения механизма сейфа, но в каких то случаях, придется произвести некоторые ремонтные работы для открытия без ущерба.',
  }, {
    qstn: 'Какие документы или доказательства вам понадобятся, чтобы подтвердить, что сейф принадлежит мне?',
    resp: 'Мы обычно требуем доказательства владения или полномочий на сейф, такие как ключи, коды доступа или документы с фото.',
  }, {
    qstn: 'Могу ли я заказать вызов мастера для вскрытия сейфа, если я потерял ключи или забыл код доступа?',
    resp: 'Да, наши мастера обладают специализированными инструментами и навыками, чтобы открыть замок, даже если ключи потеряны или код доступа забыт.',
  }, {
    qstn: 'Какие виды работ мастер будет выполнять после вскрытия?',
    resp: 'После вскрытия сейфа мастер может провести ремонт или замену механизма, если это необходимо, а также помочь восстановить функциональность.',
  }, {
    qstn: 'Смогу ли я сохранить сейф после вскрытия его дверей?',
    resp: 'В большинстве случаев сейф можно сохранить после вскрытия его двери, если он не поврежден слишком сильно. Мастера обычно стараются минимизировать повреждения.',
  }, {
    qstn: 'Какова стоимость вызова мастера?',
    resp: 'Стоимость зависит от типа сейфа, его сложности и других факторов. Мастер предоставит вам ценовую оценку перед началом работ.',
  }, {
    qstn: 'Что мне делать, если я не могу открыть сейф и у меня срочно нужен доступ к его содержимому?',
    resp: 'Вызовите мастера в нашей компании - они имеют опыт и инструменты, чтобы помочь вам получить доступ к содержимому, даже в срочных ситуациях.',
  },
];

const InfoBlock = (
  <Wrap extClassName="pt-12 pb-6 lg:pt-16 lg:pb-8" intClassName="md:flex">
    <p className="md:text-lg text-center">
      Столкнулись с проблемой вскрытия сейфа? Мы предлагаем профессиональные услуги
      по аварийному вскрытию сейфов в Санкт-Петербурге, чтобы помочь вам решить
      эту сложную ситуацию. Наша компания &quot;Помогайкин&quot; специализируется на аварийном
      вскрытии замков, установке и замене замков, и мы готовы предоставить вам
      высококачественное и надежное решение для вашего сейфа.
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
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Ситуации, когда может потребоваться аварийное вскрытие сейфов в Санкт-Петербурге:</h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2"><em>Утеря или забытый код доступа к сейфу:</em>&nbsp; Мы понимаем, что ситуации бывают разные, и иногда важные коды доступа к сейфам могут быть потеряны или забыты. Наша команда специалистов готова оперативно прийти на помощь и открыть сейф без повреждения.</li>
      <li className="mb-2"><em>Неисправность замка:</em>&nbsp; Если замок на вашем сейфе вышел из строя и вы не можете получить доступ к своим ценностям, мы предлагаем надежное и профессиональное аварийное вскрытие, чтобы вернуть вам доступ к вашим вещам.</li>
      <li className="mb-2"><em>Чрезвычайные ситуации:</em>&nbsp; В случае чрезвычайных ситуаций, таких как заложенные документы или срочная необходимость в доступе к ценным предметам, наши специалисты готовы оперативно прибыть на место и выполнить аварийное вскрытие сейфа.</li>
    </ul>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Законность процедуры при аварийном вскрытии сейфов</h2>
    <p className="mb-20 px-4 block mx-auto">Мы работаем в строгом соответствии с законодательством и принципами этики. Аварийное вскрытие сейфов в Санкт-Петербурге является легальной процедурой, которую наша компания выполняет только в случаях, когда у нас есть полное согласие и подтверждение правомерности запроса от владельца сейфа.</p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Порядок действий при аварийном вскрытии сейфов</h2>
    <ol className="list-decimal px-4 mx-auto mb-20">
      <li className="mb-2"><em>Консультация и диагностика:</em>&nbsp; Позвоните нам, и наши опытные специалисты проведут консультацию и оценку ситуации, чтобы предложить вам оптимальное решение.</li>
      <li className="mb-2"><em>Быстрое реагирование:</em>&nbsp; Мы ценим ваше время и стремимся оперативно прибыть на место, чтобы выполнить аварийное вскрытие сейфа в Санкт-Петербурге.</li>
    </ol>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Преимущества вызова аварийной службы вскрытия сейфов</h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2"><em>Профессиональное вскрытие:</em>&nbsp; Наши специалисты обладают глубокими знаниями и опытом в области аварийного вскрытия сейфов. Мы гарантируем, что ваш сейф будет открыт без повреждений, сохраняя все его содержимое в целости и сохранности.</li>
      <li className="mb-2"><em>Конфиденциальность и безопасность:</em>&nbsp; Мы строго соблюдаем принципы конфиденциальности и гарантируем, что информация о вашем сейфе и его содержимом останется абсолютно конфиденциальной. Мы принимаем все меры для обеспечения безопасности ваших ценностей и соблюдения конфиденциальности.</li>
    </ul>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Рекомендации по действиям</h3>
    <p className="mb-20 px-4 block mx-auto">Если вы столкнулись с проблемой доступа к сейфу, рекомендуется обратиться к профессионалам, чтобы избежать повреждения замка или сейфа при самостоятельных попытках вскрытия. Помните, что неправильные попытки вскрытия сейфа могут привести к его повреждению, что сделает его дальнейшее использование невозможным. В случае утери кода доступа рекомендуется обратиться к нашим специалистам как можно скорее, чтобы минимизировать риски и восстановить доступ к сейфу в кратчайшие сроки.</p>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Типы замков</h3>
    <p className="mb-20 px-4 block mx-auto">Наша компания имеет опыт в работе с различными типами замков, включая электронные, механические и комбинационные замки. Мы готовы решить любую сложность и обеспечить доступ к вашему сейфу, независимо от его типа.</p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Вызов нашего специалиста для вскрытия сейфа в Санкт-Петербурге и Ленобласти</h2>
    <ul className="list-disc px-4 mx-auto mb-10">
      <li className="mb-2"><em>Профессионализм:</em>&nbsp; Наша команда состоит из опытных специалистов, обладающих глубокими знаниями и навыками в области вскрытия сейфов. Мы гарантируем качественное и безопасное решение для ваших потребностей.</li>
      <li className="mb-2"><em>Быстрое реагирование:</em>&nbsp; Мы осознаем, что ситуации, требующие аварийного вскрытия сейфов, требуют немедленной реакции. Поэтому мы стремимся оперативно прибыть на место и решить вашу проблему в кратчайшие сроки.</li>
      <li className="mb-2"><em>Конфиденциальность:</em>&nbsp; Мы гарантируем полную конфиденциальность ваших данных и информации о сейфе. Ваши ценности и личные данные будут надежно защищены.</li>
    </ul>
    <p className="mb-10 px-4 block mx-auto">Мы предоставляем свои услуги по аварийному вскрытию сейфов в Санкт-Петербурге и Ленобласти. Независимо от вашего местонахождения, вы можете рассчитывать на нашу помощь и профессиональное решение в любой ситуации.</p>
    <p className="mb-10 px-4 block mx-auto">Компания &quot;Помогайкин&quot; готова предоставить вам надежную помощь в аварийном вскрытии сейфов в Санкт-Петербурге. Наша команда профессионалов обладает опытом и знаниями, чтобы решить любую сложность сейфа, сохраняя конфиденциальность и безопасность. Обратитесь к нам, и мы с радостью поможем вам восстановить доступ к вашему сейфу.</p>
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

const OpenSafe = ({ location }) => {
  usePage(location.search);
  return (
    <Promo info={InfoBlock} table={Table} description={Description} brands={Brands} faq={FAQ}>
      <span className="text-blred-500">Вскрытие</span> сейфов<br />
      в <span className="text-blred-500">Санкт-Петербурге</span>
    </Promo>
  );
};

export const Head = () => (
  <Seo
    title="Вскрытие сейфов в СПб круглосуточно, срочно и недорого – цены от 1100 рублей"
    description="Вскрытие сейфов в СПб и ЛО круглосуточно с выездом от 15 минут. 100% гарантия качества работы мастера. Работаем со всеми видами механизмов."
  />
);

export default OpenSafe;
