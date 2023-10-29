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
      Компания &quot;Помогайкин&quot; предоставляет профессиональные услуги по
      обслуживанию сейфов в Санкт-Петербурге и Ленинградской области. Наши специалисты
      обладают многолетним опытом в сфере аварийного вскрытия замков, установки и
      замены сейфов, гарантируя безопасность и конфиденциальность ваших ценных вещей.
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
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Ситуации, когда может потребоваться обслуживание сейфов</h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2"><em>Забытый код или потеря ключей: Если </em>&nbsp;вы потеряли доступ к сейфу, наши эксперты помогут вам без повреждения сейфа его открыть.</li>
      <li className="mb-2"><em>Технические неисправности:</em>&nbsp; Регулярная проверка сейфа позволит выявить и устранить возможные поломки заранее, предотвращая потерю доступа к ценностям.</li>
      <li className="mb-2"><em>Улучшение безопасности:</em>&nbsp; Мы поможем установить более современные и надежные сейфы, обеспечивая максимальную защиту вашим ценностям.</li>
    </ul>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Законность обслуживания сейфов</h2>
    <p className="mb-20 px-4 block mx-auto">Мы работаем в строгом соответствии с законодательством России и имеем все необходимые лицензии и разрешения на оказание услуг по обслуживанию сейфов.</p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Порядок действий при обслуживании сейфов</h2>
    <ol className="list-decimal px-4 mx-auto mb-20">
      <li className="mb-2"><em>Вызов специалиста:</em>&nbsp; Позвоните нам, и наш мастер приедет к вам в кратчайшие сроки.</li>
      <li className="mb-2"><em>Диагностика:</em>&nbsp; Мы проведем диагностику сейфа и определим необходимый объем работ.</li>
      <li className="mb-2"><em>Решение проблемы:</em>&nbsp; Наши опытные мастера предпримут необходимые действия для восстановления доступа или ремонта сейфа.</li>
      <li className="mb-2"><em>Установка нового сейфа:</em>&nbsp; При необходимости установки нового сейфа, мы подберем наилучший вариант, учитывая ваши потребности.</li>
    </ol>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Преимущества вызова службы обслуживания сейфов</h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2"><em>Быстрое реагирование:</em>&nbsp; Мы доступны 24/7 и приедем к вам в самые критические моменты.</li>
      <li className="mb-2"><em>Профессиональные навыки:</em>&nbsp; Наши специалисты обладают высокой квалификацией и опытом работы с сейфами.</li>
      <li className="mb-2"><em>Безопасность и конфиденциальность:</em>&nbsp; Ваши ценности останутся в безопасности, а информация о сейфе останется конфиденциальной.</li>
      <li className="mb-2"><em>Гарантия качества:</em>&nbsp; Мы предоставляем гарантию на все выполненные работы и установленные сейфы.</li>
    </ul>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Рекомендации по действиям</h3>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2">Регулярно проверяйте состояние сейфа.</li>
      <li className="mb-2">Храните резервные ключи и коды в надежном месте.</li>
      <li className="mb-2">Обращайтесь к профессионалам при любых проблемах с сейфом.</li>
    </ul>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Типы сейфов</h3>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2">Механические сейфы.</li>
      <li className="mb-2">Электронные сейфы.</li>
      <li className="mb-2">Биометрические сейфы.</li>
    </ul>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Вызов нашего специалиста для обслуживания сейфа в Санкт-Петербурге и Ленобласти</h2>
    <ul className="list-disc px-4 mx-auto mb-10">
      <li className="mb-2">Опыт и надежность.</li>
      <li className="mb-2">Доступность 24/7.</li>
      <li className="mb-2">Индивидуальный подход к каждому клиенту.</li>
    </ul>
    <p className="mb-10 px-4 block mx-auto">Мы оперативно выезжаем к клиентам в Санкт-Петербурге и прилегающих районах Ленинградской области.</p>
    <p className="mb-10 px-4 block mx-auto">Обратившись в компанию &quot;Помогайкин&quot; для обслуживания сейфа, вы можете быть уверены в сохранности ваших ценностей и профессиональном подходе к решению всех проблем с сейфами. Не оставляйте безопасность ваших ценностей на волю случая — доверьтесь нам, и мы сделаем все возможное для ее обеспечения.</p>
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

const SafeService = ({ location }) => {
  usePage(location.search);
  return (
    <Promo info={InfoBlock} table={Table} description={Description} brands={Brands}>
      <span className="text-blred-500">Обслуживание</span><br />сейфов<br />
      в <span className="text-blred-500">Санкт-Петербурге</span>
    </Promo>
  );
};

export const Head = () => (
  <Seo
    title="Обслуживание сейфов в СПб круглосуточно, срочно и недорого – цены от 1100 рублей"
    description="Обслуживание сейфов в СПб и ЛО круглосуточно с выездом от 15 минут. 100% гарантия качества работы мастера. Работаем со всеми видами механизмов."
  />
);

export default SafeService;
