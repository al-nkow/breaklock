import * as React from 'react';

import Seo from '../components/seo';
import Promo from '../components/Promo';
import Wrap from '../components/Wrap';
import usePage from '../hooks/usePage';
import { SERVICE_DATA } from '../constants';

const InfoBlock = (
  <Wrap extClassName="pt-12 pb-6 lg:pt-16 lg:pb-8" intClassName="md:flex">
    <p className="md:text-lg text-center">
      Компания &quot;Помогайкин&quot; – ваш надежный союзник в обеспечении безопасности
      в Санкт-Петербурге. Мы специализируемся на аварийном вскрытии замков, установке и
      замене замков, и в этой статье мы расскажем вам подробнее о наших услугах по замене
      замков в Санкт-Петербурге.
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
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Ситуации, когда может потребоваться замена замков:</h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2"><em>Потеря ключей:</em>&nbsp; Внезапная утрата ключей может привести к необходимости замены замков для обеспечения безопасности вашего дома или офиса.</li>
      <li className="mb-2"><em>Попытка взлома:</em>&nbsp; Попытки взлома могут повредить замки и сделать вашу собственность уязвимой, поэтому замена замков становится неотложной мерой.</li>
      <li className="mb-2"><em>Износ и поломка:</em>&nbsp; С течением времени замки могут изнашиваться, что может снизить их надежность. В таких случаях требуется их замена.</li>
    </ul>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Законность процедуры замены замков</h2>
    <p className="mb-20 px-4 block mx-auto">Замена замков в Санкт-Петербурге – законная процедура, которую регулируют местные законы и нормативные акты. Наша компания работает в строгом соответствии с законами, обеспечивая соблюдение всех необходимых процедур и разрешений.</p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Порядок действий при замене замков:</h2>
    <ol className="list-decimal px-4 mx-auto mb-20">
      <li className="mb-2">Связаться с нами по телефону или через сайт.</li>
      <li className="mb-2">Описать свою ситуацию и указать необходимые детали.</li>
      <li className="mb-2">Мы выезжаем на место в кратчайшие сроки.</li>
      <li className="mb-2">Проводим оценку и консультацию с вами.</li>
      <li className="mb-2">Выполняем замену замков профессионально и качественно.</li>
    </ol>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Преимущества вызова аварийной службы замены замков:</h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2"><em>Экстренный выезд:</em>&nbsp; Мы доступны круглосуточно, 7 дней в неделю, гарантируя вам быстрое реагирование в любой ситуации.</li>
      <li className="mb-2"><em>Опыт и профессионализм:</em>&nbsp; Наши специалисты обладают богатым опытом и высокой квалификацией, что гарантирует качественное выполнение работ.</li>
      <li className="mb-2"><em>Качественные материалы:</em>&nbsp; Мы используем только надежные и сертифицированные замки, обеспечивая надежность и долгий срок службы.</li>
      <li className="mb-2"><em>Конфиденциальность:</em>&nbsp; Ваши данные и собственность остаются в полной безопасности.</li>
    </ul>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Рекомендации по действиям:</h3>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2">В случае утери ключей или попытки взлома, сначала свяжитесь с нами для оценки ситуации.</li>
      <li className="mb-2">Не пытайтесь сами заменять замки, это может ухудшить ситуацию.</li>
      <li className="mb-2">Соблюдайте конфиденциальность информации о вашем замке и ключах.</li>
    </ul>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Типы замков</h3>
    <p className="mb-20 px-4 block mx-auto">Мы предлагаем широкий выбор замков различных типов, включая механические и электронные системы, а также мастер-ключи для организаций.</p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Вызов нашего специалиста для замены замков в Санкт-Петербурге и Ленобласти</h2>
    <ul className="list-disc px-4 mx-auto mb-10">
      <li className="mb-2">Надежность и профессионализм.</li>
      <li className="mb-2">Эффективное решение в экстренных ситуациях.</li>
      <li className="mb-2">Конкурентоспособные цены.</li>
      <li className="mb-2">Гарантия качества наших услуг.</li>
    </ul>
    <p className="mb-10 px-4 block mx-auto">Мы оказываем услуги по замене замков в Санкт-Петербурге и Ленинградской области, обеспечивая вашу безопасность и уверенность в ней. Не рискуйте, обратитесь к профессионалам – компании &quot;Помогайкин&quot;. Наша цель – ваша защита.</p>
  </Wrap>
);

const ReplaceLock = ({ location }) => {
  usePage(location.search);
  return (
    <Promo info={InfoBlock} table={Table} description={Description}>
      <span className="text-blred-500">Замена</span> замков<br />
      в <span className="text-blred-500">Санкт-Петербурге</span>
    </Promo>
  );
};

export const Head = () => (
  <Seo
    title="Замена замков в СПб круглосуточно, срочно и недорого – цены от 1100 рублей"
    description="Замена замков в СПб и ЛО круглосуточно с выездом от 15 минут. 100% гарантия качества работы мастера. Работаем со всеми видами механизмов."
  />
);

export default ReplaceLock;
