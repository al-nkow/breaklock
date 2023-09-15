import * as React from 'react';

import Seo from '../components/seo';
import Promo from '../components/Promo';
import Wrap from '../components/Wrap';
import usePage from '../hooks/usePage';
import { SERVICE_DATA } from '../constants';

const InfoBlock = (
  <Wrap extClassName="pt-12 pb-6 lg:pt-16 lg:pb-8" intClassName="md:flex">
    <p className="md:text-lg text-center">
      В мире, где ценные документы, деньги и ценности нуждаются в надежной защите,
      сейфы играют ключевую роль. Но что делать, если ваш сейф вышел из строя или
      заблокировался? Компания &quot;Помогайкин&quot; в Санкт-Петербурге приходит на помощь,
      предоставляя услуги по Ремонту сейфов.
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
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Ситуации, когда может потребоваться ремонт сейфов</h2>
    <ol className="list-decimal px-4 mx-auto mb-20">
      <li className="mb-2"><em>Потеря ключей или кода доступа:</em>&nbsp; Бывает, что владельцы сейфов забывают коды или теряют ключи. Мы помогаем восстановить доступ.</li>
      <li className="mb-2"><em>Механические повреждения:</em>&nbsp; Сейфы подвержены износу и могут выйти из строя из-за механических повреждений. Мы проводим ремонт и восстановление.</li>
      <li className="mb-2"><em>Электронные сбои:</em>&nbsp; Электронные сейфы могут подвергаться сбоям в системе. Наши специалисты могут восстановить их работоспособность.</li>
    </ol>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Законность процедуры</h2>
    <p className="mb-20 px-4 block mx-auto">Важно отметить, что ремонт сейфов является законной процедурой, при условии, что вы являетесь владельцем сейфа или имеете на это полномочия.</p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Порядок действий:</h2>
    <ol className="list-decimal px-4 mx-auto mb-20">
      <li className="mb-2"><em>Звонок нам:</em>&nbsp; Когда у вас возникли проблемы с сейфом, позвоните нам по номеру <a href="tel:+78127183016">+7 (812) 718-3016</a>. Мы доступны 24/7.</li>
      <li className="mb-2"><em>Консультация:</em>&nbsp; Наши опытные специалисты предоставят вам консультацию и оценку ситуации.</li>
      <li className="mb-2"><em>Выезд на место:</em>&nbsp; После согласования, наши мастера приедут к вам в оговоренное время.</li>
      <li className="mb-2"><em>Ремонт и обслуживание:</em>&nbsp; Мы проведем ремонт, замену замков или восстановление сейфа.</li>
    </ol>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Преимущества вызова службы ремонта сейфов</h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2"><em>Скорость реагирования:</em>&nbsp; Мы приходим на помощь моментально, гарантируя вам быстрое решение проблемы.</li>
      <li className="mb-2"><em>Профессионализм:</em>&nbsp; Наши мастера обладают богатым опытом и знаниями, необходимыми для решения самых сложных задач.</li>
      <li className="mb-2"><em>Конфиденциальность:</em>&nbsp; Мы обеспечиваем абсолютную конфиденциальность ваших ценностей и информации.</li>
    </ul>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Рекомендации по действиям</h3>
    <p className="mb-20 px-4 block mx-auto">Не пытайтесь сами вскрывать сейф, это может ухудшить ситуацию. Сохраняйте спокойствие и немедленно свяжитесь с нами.</p>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Типы замков сейфов</h3>
    <p className="mb-20 px-4 block mx-auto">Мы специализируемся на ремонте и обслуживании различных типов замков сейфов, включая механические и электронные.</p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Вызов нашего специалиста для ремонта сейфа в Санкт-Петербурге и Ленобласти</h2>
    <ul className="list-disc px-4 mx-auto mb-10">
      <li className="mb-2"><em>Опыт и профессионализм:</em>&nbsp; Более 10 лет опыта в сфере обслуживания сейфов и замков.</li>
      <li className="mb-2"><em>Современное оборудование:</em>&nbsp; Мы используем современное оборудование и технологии для выполнения работ.</li>
      <li className="mb-2"><em>Доступность:</em>&nbsp; Мы работаем в Санкт-Петербурге и Ленинградской области, всегда готовы прийти на помощь.</li>
    </ul>
    <p className="mb-10 px-4 block mx-auto">Компания &quot;Помогайкин&quot; предоставляет услуги по ремонту сейфов и замков как в Санкт-Петербурге, так и в Ленинградской области, обеспечивая надежную защиту ваших ценностей.</p>
    <p className="mb-10 px-4 block mx-auto">Не оставляйте свою безопасность на волю случая. Обратитесь к профессионалам от &quot;Помогайкин&quot; и мы сделаем все возможное, чтобы ваш сейф снова стал надежной крепостью для ваших ценностей.</p>
  </Wrap>
);

const SafeRepair = ({ location }) => {
  usePage(location.search);
  return (
    <Promo info={InfoBlock} table={Table} description={Description}>
      <span className="text-blred-500">Ремонт</span> сейфов<br />
      в <span className="text-blred-500">Санкт-Петербурге</span>
    </Promo>
  );
};

export const Head = () => (
  <Seo
    title="Ремонт сейфов в СПб круглосуточно, срочно и недорого – цены от 1100 рублей"
    description="Ремонт сейфов в СПб и ЛО круглосуточно с выездом от 15 минут. 100% гарантия качества работы мастера. Работаем со всеми видами механизмов."
  />
);

export default SafeRepair;
